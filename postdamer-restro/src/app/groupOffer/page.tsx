'use client'

import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { Button } from '@nextui-org/button';
import DishCardGroup from '@/component/dishGroupOffer/page';
import { getGroupOffer } from '@/service/apiService';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface MenuOffer {
  name: string;
  price:string;
  Food: {
    Description: string;
    PricePerPerson: string;
    Items: MenuItem[];
  };
  Drinks: {
    Description: string;
    PricePerPerson: number;
    Items: MenuItem[];
  };
}
function extractAndAddPrices(price1:any, price2:any) {
  function extractNumber(priceString:any) {
      return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
  }
  let number1 = extractNumber(price1);
  let number2 = extractNumber(price2);
  let total = number1 + number2;
  let currencySymbol = price1.match(/[^\d.-]+/);
  return  " " + total.toFixed(2);
}
const DishCard: React.FC<{ dishes: MenuItem[] }> = ({ dishes }) => (
  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
    {dishes.map(dish => (
      <DishCardGroup key={dish.id} dish={dish} />
    ))}
  </div>
);

const GroupOffer: React.FC = () => {
  const [offerStates, setOfferStates] = useState<{
    [key: number]: {
      activeTab: 'Food' | 'Drinks';
      loadedDishes: {
        Food: { dishes: MenuItem[]; loadedCount: number };
        Drinks: { dishes: MenuItem[]; loadedCount: number };
      };
    };
  }>({});
  const [offers, setOffers] = useState<MenuOffer[]>([]);

  useEffect(() => {
    const fetchGroupOffer = async () => {
      try {
        const result = await getGroupOffer();
        console.log(result);
        const transformedOffers = result.map((offer: any) => ({
          name: offer.category_name,
          price:extractAndAddPrices(offer.price1,offer.price2),
          Food: {
            Description: offer.desc1,
            PricePerPerson: offer.price1,
            Items: offer.food_items.map((item: any) => ({
              id: item.id,
              name: item.name,
              description: item.description || '',
              image: item.image
            }))
          },
          Drinks: {
            Description: offer.desc2,
            PricePerPerson: offer.price2,
            Items: offer.drink_items.map((item: any) => ({
              id: item.id,
              name: item.name,
              description: item.description || '',
              image: item.image
            }))
          }
        }));
        setOffers(transformedOffers);

        const initialOfferStates: {
          [key: number]: {
            activeTab: 'Food' | 'Drinks';
            loadedDishes: {
              Food: { dishes: MenuItem[]; loadedCount: number };
              Drinks: { dishes: MenuItem[]; loadedCount: number };
            };
          };
        } = {};
        transformedOffers.forEach((offer:any, index:any) => {
          initialOfferStates[index] = {
            activeTab: 'Food',
            loadedDishes: {
              Food: { dishes: offer.Food.Items.slice(0, 4), loadedCount: 4 },
              Drinks: { dishes: offer.Drinks.Items.slice(0, 4), loadedCount: 4 }
            }
          };
        });
        setOfferStates(initialOfferStates);
      } catch (error) {
        console.error('Error fetching group offers:', error);
      }
    };

    fetchGroupOffer();
  }, []);

  const toggleTab = (tab: 'Food' | 'Drinks', offerIndex: number) => {
    setOfferStates(prevStates => ({
      ...prevStates,
      [offerIndex]: {
        ...prevStates[offerIndex],
        activeTab: tab
      }
    }));
  };

  const loadMoreDishes = (tab: 'Food' | 'Drinks', offerIndex: number) => {
    const currentLength = offerStates[offerIndex].loadedDishes[tab].dishes.length;
    const newDishes = offers[offerIndex][tab].Items.slice(currentLength, currentLength + 2);
    setOfferStates(prevStates => ({
      ...prevStates,
      [offerIndex]: {
        ...prevStates[offerIndex],
        loadedDishes: {
          ...prevStates[offerIndex].loadedDishes,
          [tab]: {
            dishes: [...prevStates[offerIndex].loadedDishes[tab].dishes, ...newDishes],
            loadedCount: prevStates[offerIndex].loadedDishes[tab].loadedCount + 2
          }
        }
      }
    }));
  };

  return (
    <div className="w-full">
      <div className={styles.background}>
        <div className={styles.bgBack}>
          <div className="bg-dark pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-900 bg-opacity-60 rounded-lg p-6 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Group Offers</h1>
                <p className="text-sm sm:text-lg text-gray-200">Group offers for parties with 20 guests or more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100">
        {offers.map((offer, index) => (
          <div key={index} className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-lg mx-auto">
              <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-semibold text-gray-800">{offer.name}</h2>
                  
                  <p style={{ color: 'goldenrod' }} className="text-gray-600 text-lg"><span>&#8364;{offer.price} per person</span></p>
                </div>
                <div className="mt-4">
                  <div className="flex border-b">
                    <button
                      className={`text-xl font-semibold py-2 px-4 focus:outline-none ${offerStates[index].activeTab === 'Food' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                      onClick={() => toggleTab('Food', index)}
                    >
                      Food
                    </button>
                    <button
                      className={`text-xl font-semibold py-2 px-4 focus:outline-none ${offerStates[index].activeTab === 'Drinks' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                      onClick={() => toggleTab('Drinks', index)}
                    >
                      Drinks
                    </button>
                  </div>
                  <div className="mt-4">
                    {offerStates[index].activeTab === 'Food' && (
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <span style={{ width: '70%' }}>{offer.Food.Description}</span>
                          <span style={{ color: 'goldenrod', width: '30%', textAlign: 'end' }}>&#8364;{offer.Food.PricePerPerson} per person</span>
                        </div>
                        <DishCard dishes={offerStates[index].loadedDishes.Food.dishes} />
                        {offerStates[index].loadedDishes.Food.loadedCount < offer.Food.Items.length && (
                          <Button
                            style={{ marginTop: '10px' }}
                            variant='bordered'
                            onClick={() => loadMoreDishes('Food', index)}
                          >
                            Load More
                          </Button>
                        )}
                      </div>
                    )}
                    {offerStates[index].activeTab === 'Drinks' && (
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <span style={{ width: '70%' }}>{offer.Drinks.Description}</span>
                          <span style={{ color: 'goldenrod', width: '30%', textAlign: 'end' }}>&#8364;{offer.Drinks.PricePerPerson} per person</span>
                        </div>
                        <DishCard dishes={offerStates[index].loadedDishes.Drinks.dishes} />
                        {offerStates[index].loadedDishes.Drinks.loadedCount < offer.Drinks.Items.length && (
                          <Button
                            style={{ marginTop: '10px' }}
                            variant='bordered'
                            onClick={() => loadMoreDishes('Drinks', index)}
                          >
                            Load More
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupOffer;
