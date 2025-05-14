'use client';
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
  price: string;
  Food: {
    Description: string;
    PricePerPerson: string;
    Items: MenuItem[];
  };
  Drinks: {
    Description: string;
    PricePerPerson: string;
    Items: MenuItem[];
  };
}
function extractAndAddPrices(price1: any, price2: any) {
  function parsePrice(priceString: any) {
    // Remove any non-numeric characters except for commas and periods
    // Replace commas with periods for decimal point consistency
    let normalizedString = priceString.replace(/[^0-9,.]+/g, ''); // Remove any non-numeric characters except commas and periods
    // Normalize the string to a format suitable for parsing
    let [integerPart, decimalPart] = normalizedString.split(',');
    if (decimalPart) {
      return parseFloat(`${integerPart}.${decimalPart}`);
    }
    return parseFloat(integerPart);
  }
  let number1 = parsePrice(price1);
  let number2 = parsePrice(price2);
  let total = number1 + number2;
  // Extract currency symbol from the first price string
  let currencySymbolMatch = price1.match(/[^\d.,]+/);
  let currencySymbol = currencySymbolMatch ? currencySymbolMatch[0] : '';
  // Format the total with European style (comma as thousand separator and period as decimal point)
  let formattedTotal = total.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // Log intermediate values
  // Return formatted total with currency symbol
  return currencySymbol + formattedTotal;
}
const DishCard: React.FC<{ dishes: MenuItem[] }> = ({ dishes }) => (
  <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4'>
    {dishes.map((dish) => (
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
        const transformedOffers = result.data.map((offer: any) => ({
          name: offer.name || 'category name',
          price: extractAndAddPrices(offer.price1 || '0', offer.price2 || '0') || '0',
          Food: {
            Description: offer.foodItemsInfo.replace(/\r\n/g, '<br/>'), // Replace newlines with <br/> tags
            PricePerPerson: offer.foodItemsPrice || 0,
            // Items: offer.food_items.map((item: any) => ({
            //   id: item.id,
            //   name: item.name,
            //   description: item.description || '',
            //   image: item.image,
            // })),
            Items:[
              {
                id: offer.id,
                name: offer.foodItemsInfo,
                description: offer.foodItemsInfo,
                image: offer.foodItemsImagePaths?.[0],
              }
            ]
          },
          Drinks: {
            Description: offer.drinkItemsInfo.replace(/\r\n/g, '<br/>'), // Replace newlines with <br/> tags
            PricePerPerson: offer.drinkItemsPrice || 0,
            Items:[
              {
                id: offer.id,
                name: offer.drinkItemsInfo,
                description: offer.drinkItemsInfo,
                image: offer.drinkItemsImagePaths?.[0],
              }
            ]
          },
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
        transformedOffers.forEach((offer: any, index: any) => {
          initialOfferStates[index] = {
            activeTab: 'Food',
            loadedDishes: {
              Food: { dishes: offer.Food.Items.slice(0, 4), loadedCount: 4 },
              Drinks: {
                dishes: offer.Drinks.Items.slice(0, 4),
                loadedCount: 4,
              },
            },
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
    setOfferStates((prevStates) => ({
      ...prevStates,
      [offerIndex]: {
        ...prevStates[offerIndex],
        activeTab: tab,
      },
    }));
  };
  const loadMoreDishes = (tab: 'Food' | 'Drinks', offerIndex: number) => {
    const currentLength =
      offerStates[offerIndex].loadedDishes[tab].dishes.length;
    const newDishes = offers[offerIndex][tab].Items.slice(
      currentLength,
      currentLength + 4
    );
    setOfferStates((prevStates) => ({
      ...prevStates,
      [offerIndex]: {
        ...prevStates[offerIndex],
        loadedDishes: {
          ...prevStates[offerIndex].loadedDishes,
          [tab]: {
            dishes: [
              ...prevStates[offerIndex].loadedDishes[tab].dishes,
              ...newDishes,
            ],
            loadedCount:
              prevStates[offerIndex].loadedDishes[tab].loadedCount + 4,
          },
        },
      },
    }));
  };
  return (
    <>
      <div className='w-full'>
        <div className={styles.background}>
          <div className={styles.bgBack}>
            <div className='bg-dark pt-20 pb-20'>
              <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='  bg-opacity-60 rounded-lg p-6 text-center'>
                  <h1 className='text-3xl sm:text-4xl font-bold text-gray-100 mb-4'>
                    Group Offers
                  </h1>
                  <p className='text-sm sm:text-lg text-gray-200'>
                    Group offers for parties with 20 guests or more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.background1}>
          {offers.map((offer, index) => (
            <div
              key={index}
              className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'
            >
              <div className='bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-lg mx-auto'>
                <p
                  style={{
                    background: 'goldenrod',
                    color: 'white',
                    padding: '1rem',
                  }}
                  className=' text-lg justify-start flex mb-3'
                >
                  {/*                   <span>&#8364;{offer.price} per person</span> */}
                  <h2 className='text-xl font-semibold '>{offer.name}</h2>
                </p>
                <div className='px-6 py-4'>
                  <div className='flex justify-between items-center'></div>
                  <div className='mt-4'>
                    <div className='flex border-b w-full'>
                      <button
                        className={`text-xl w-full md:w-1/2 sm:w-full  font-semibold py-2 px-4 rounded-lg focus:outline-none ${
                          offerStates[index].activeTab === 'Food'
                            ? 'text-white border-2 bg-[goldenrod] border-[goldenrod]'
                            : 'text-white border-2 bg-[goldenrod] border-[goldenrod]'
                        }`}
                        onClick={() => toggleTab('Food', index)}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span>Food</span>
                        <span>
                          &#8364;{offer.Food.PricePerPerson} per person
                        </span>
                      </button>
                      {/* <button
                        className={`text-xl w-1/2 font-semibold py-2 px-4 rounded-lg focus:outline-none ${offerStates[index].activeTab === 'Drinks' ? 'text-white border-2 bg-[goldenrod] border-[goldenrod]' : 'rounded-none text-gray-700 bg-[#FCEFC0] border-[#FCEFC0]'}`}
                        onClick={() => toggleTab('Drinks', index)}
                      >
                        Drinks
                      </button> */}
                    </div>
                    <div className='mt-4'>
                      {true && (
                        <div className='bg-gray-100 p-4 rounded-lg'>
                          <p
                            style={{ color: 'black' }}
                            className='text-gray-600 text-lg  flex mb-3'
                            dangerouslySetInnerHTML={{
                              __html: offer.Food.Description,
                            }}
                          />
                          <DishCard
                            dishes={offerStates[index].loadedDishes.Food.dishes}
                          />
                          {offerStates[index].loadedDishes.Food.dishes.length <
                            offer.Food.Items.length && (
                            <div className='flex justify-center mt-4'>
                              <Button
                                onClick={() => loadMoreDishes('Food', index)}
                                className='bg-[#FCEFC0] text-gray-700'
                              >
                                Load More Food
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                      {/* {offerStates[index].activeTab === 'Drinks' && (
                        <div className="bg-gray-100 p-4 rounded-lg">
                        <p style={{ color: 'goldenrod' }} className="text-gray-600 text-lg justify-end flex mb-3"><span>&#8364;{offer.Drinks.PricePerPerson} per person</span></p>
                          <p style={{ color: 'black' }} className="text-gray-600 text-lg flex mb-3"
                             dangerouslySetInnerHTML={{ __html: offer.Drinks.Description }}
                          />
                          <DishCard dishes={offerStates[index].loadedDishes.Drinks.dishes} />
                          {offerStates[index].loadedDishes.Drinks.dishes.length < offer.Drinks.Items.length && (
                            <div className="flex justify-center mt-4">
                              <Button
                                
                                onClick={() => loadMoreDishes('Drinks', index)}
                                className="bg-[#FCEFC0] text-gray-700"
                              >
                                Load More Drinks
                              </Button>
                            </div>
                          )}
                        </div>
                      )} */}
                    </div>
                    <div className='flex border-b w-full'>
                      <button
                        className={`text-xl w-full md:w-1/2 sm:w-full  font-semibold py-2 px-4 rounded-lg focus:outline-none ${
                          offerStates[index].activeTab === 'Drinks'
                            ? 'text-white border-2 bg-[goldenrod] border-[goldenrod]'
                            : 'text-white border-2 bg-[goldenrod] border-[goldenrod]'
                        }`}
                        onClick={() => toggleTab('Drinks', index)}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span> Drinks</span>
                        <span>
                          &#8364;{offer.Drinks.PricePerPerson} per person
                        </span>
                      </button>
                    </div>
                    <div className='mt-4'>
                      {/* {offerStates[index].activeTab === 'Food' && (
                        <div className="bg-gray-100 p-4 rounded-lg">
                        <p style={{ color: 'goldenrod' }} className="text-gray-600 text-lg justify-end flex mb-3"><span>&#8364;{offer.Food.PricePerPerson} per person</span></p>
                          <p style={{ color: 'black' }} className="text-gray-600 text-lg  flex mb-3"
                             dangerouslySetInnerHTML={{ __html: offer.Food.Description }}
                          />
                          <DishCard dishes={offerStates[index].loadedDishes.Food.dishes} />
                          {offerStates[index].loadedDishes.Food.dishes.length < offer.Food.Items.length && (
                            <div className="flex justify-center mt-4">
                              <Button
                                
                                onClick={() => loadMoreDishes('Food', index)}
                                className="bg-[#FCEFC0] text-gray-700"
                              >
                                Load More Food
                              </Button>
                            </div>
                          )}
                        </div>
                      )} */}
                      {true && (
                        <div className='bg-gray-100 p-4 rounded-lg'>
                          <p
                            style={{ color: 'black' }}
                            className='text-gray-600 text-lg flex mb-3'
                            dangerouslySetInnerHTML={{
                              __html: offer.Drinks.Description,
                            }}
                          />
                          <DishCard
                            dishes={
                              offerStates[index].loadedDishes.Drinks.dishes
                            }
                          />
                          {offerStates[index].loadedDishes.Drinks.dishes
                            .length < offer.Drinks.Items.length && (
                            <div className='flex justify-center mt-4'>
                              <Button
                                onClick={() => loadMoreDishes('Drinks', index)}
                                className='bg-[#FCEFC0] text-gray-700'
                              >
                                Load More Drinks
                              </Button>
                            </div>
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
    </>
  );
};
export default GroupOffer;
