import { LoadingSkeleton } from "@/layouts/Loader";
import dynamic from "next/dynamic";


// Lazy load BlogMain component
const GridLayout = dynamic(() => import("@/component/blogSection"), {
  loading: () => <LoadingSkeleton />,ssr:false
});
export default function BlogIndividual({ params: { locale, blog } }: { params: { locale: string, blog: string } }) {

  function getBlogData(blog: any) {
    const data = [
      {
        "url": "Fajitas-De-Carne",
        "id": "Fajitas De Carne",
        "title": "Best Fajitas de Carne Easy Recipe | Spicy & Flavorful Fajita",
        "image": "/image/blog/fajitas.jpg",
        "description": [
          "Juicy beef, vibrant veggies, and bold spices served with guacamole, salsa, and soft tortillas.",
          "Fajitas De Carne are the perfect combination of sizzling flavors and delicious textures.",
          "This easy-to-follow recipe ensures a restaurant-quality experience at home.",
          "Enjoy the authentic Mexican taste with minimal effort and maximum flavor.",
          "Ideal for family dinners, weekend gatherings, or festive celebrations."
        ],
        "checklist": [
          "Marinate the beef for at least 30 minutes to enhance flavor.",
          "Use fresh bell peppers and onions for the best texture.",
          "Sear the meat on high heat for a perfect char.",
          "Serve with warm tortillas, guacamole, and sour cream.",
          "Adjust the chili powder to match your spice preference."
        ],
        "additionalDetails": {
          "header": "More Details",
          "text": "Fajitas De Carne offer a rich blend of smoky, spicy, and tangy flavors. The colorful presentation and easy preparation make this dish a go-to favorite for any occasion."
        },
        "notes": {
          "header": "Notes",
          "text": "Please inform our staff of any allergies or dietary restrictions before ordering."
        },
        "steps": [
          {
            "label": "Step 1: Marinate the Beef",
            "description": "In a bowl, mix beef with olive oil, garlic, chili powder, cumin, paprika, salt, and lime juice. Let it marinate for at least 30 minutes."
          },
          {
            "label": "Step 2: Sauté the Vegetables",
            "description": "Heat a pan over medium-high heat, add a little oil, and sauté onions, bell peppers, and zucchini until slightly tender. Remove and set aside."
          },
          {
            "label": "Step 3: Cook the Beef",
            "description": "In the same pan, cook the marinated beef for 3-4 minutes until browned and fully cooked."
          },
          {
            "label": "Step 4: Combine & Serve",
            "description": "Add the sautéed vegetables back to the pan and stir well. Serve hot with warm tortillas, guacamole, salsa, and sour cream."
          }
        ],
        "faq": [
          {
            "question": "Can I make Fajitas De Carne without a grill?",
            "answer": "Absolutely! You can cook them on a skillet or even in the oven for an easy alternative."
          },
          {
            "question": "What is the best beef cut for Fajitas?",
            "answer": "Flank steak or sirloin works best due to its tenderness and flavor."
          },
          {
            "question": "Can I prepare Fajitas De Carne ahead of time?",
            "answer": "Yes, you can marinate the beef a day in advance and store it in the refrigerator for enhanced flavor."
          },
          {
            "question": "Are Fajitas De Carne spicy?",
            "answer": "The spice level can be adjusted to your preference by increasing or reducing the chili powder."
          }
        ]
      },
      {
        "url": "Gambas-Al-Ajillo",
        "id": "Gambas Al Ajillo",
        "title": "Easy Gambas al Ajillo Recipe: Spanish Garlic Shrimp",
        "image": "/image/blog/Shrimp.jpg",
        "description": [
          "A classic Spanish tapa dish bursting with bold garlic flavors.",
          "Fresh shrimp cooked in olive oil with garlic, red pepper flakes, and lemon.",
          "A quick and easy recipe ready in just 15 minutes.",
          "Perfect for gatherings, tapas nights, or as a flavorful appetizer.",
          "Best served with crusty bread to soak up the delicious garlic-infused oil."
        ],
        "checklist": [
          "Use fresh, high-quality shrimp for the best taste.",
          "Don’t overcook the shrimp to keep them tender and juicy.",
          "Adjust red pepper flakes for desired spice level.",
          "Add white wine for extra depth of flavor (optional).",
          "Serve with fresh lemon wedges and crusty bread."
        ],
        "additionalDetails": {
          "header": "More Details",
          "text": "Gambas al Ajillo is a staple of Spanish cuisine, typically enjoyed as a tapa with a glass of white wine. Its simple ingredients and quick preparation make it a favorite for home cooking and festive occasions alike."
        },
        "notes": {
          "header": "Notes",
          "text": "Please inform our staff of any allergies or dietary restrictions before ordering."
        },
        "steps": [
          {
            "label": "Step 1: Heat the Olive Oil",
            "description": "In a large skillet or pan, heat the olive oil over medium heat. Add the sliced garlic and red pepper flakes, sautéing until the garlic turns golden and fragrant (1-2 minutes)."
          },
          {
            "label": "Step 2: Cook the Shrimp",
            "description": "Add the shrimp to the pan in a single layer. Season with salt, black pepper, and smoked paprika. Cook for about 1-2 minutes per side until the shrimp turn pink and opaque."
          },
          {
            "label": "Step 3: Add White Wine (Optional)",
            "description": "For added depth of flavor, pour in the white wine and let it simmer for another minute until slightly reduced."
          },
          {
            "label": "Step 4: Finish and Serve",
            "description": "Remove from heat, squeeze fresh lemon juice over the shrimp, and sprinkle with chopped parsley. Serve immediately with crusty bread."
          }
        ],
        "faq": [
          {
            "question": "What does Gambas al Ajillo mean?",
            "answer": "Gambas al Ajillo translates to 'Garlic Shrimp' in Spanish, referring to the dish's main ingredients."
          },
          {
            "question": "Can I use frozen shrimp for this recipe?",
            "answer": "Yes, you can use frozen shrimp. Make sure they are properly thawed and patted dry before cooking."
          },
          {
            "question": "What wine pairs best with Gambas al Ajillo?",
            "answer": "A crisp Spanish white wine like Albariño or Verdejo complements the garlicky shrimp perfectly."
          },
          {
            "question": "Can I make this dish less spicy?",
            "answer": "Yes, reduce or omit the red pepper flakes for a milder flavor."
          }
        ]
      },

      {
        "url": "Paella-De-Marisco",
        "id": "Paella De Marisco",
        "title": "Paella de Marisco: The Ultimate Spanish Seafood Paella Recipe",
        "image": "/image/blog/Paella.jpg",
        "description": [
          "A vibrant seafood paella with saffron-infused rice, rich Mediterranean flavors, and fresh seafood.",
          "Paella de Marisco is a traditional Spanish dish originating from Valencia.",
          "Perfect for gatherings, it captures the essence of Spanish coastal cuisine.",
          "With shrimp, mussels, clams, and squid, every bite is a burst of oceanic flavor.",
          "Served with lemon wedges and fresh parsley for a complete culinary experience."
        ],
        "checklist": [
          "Use high-quality saffron for authentic color and flavor.",
          "Avoid stirring the rice once the broth is added to achieve the perfect texture.",
          "Ensure seafood is fresh for the best taste.",
          "Create a socarrat (crispy bottom layer) for a traditional touch.",
          "Use a wide, shallow paella pan for even cooking."
        ],
        "additionalDetails": {
          "header": "More Details",
          "text": "Paella de Marisco is not just a dish, but a celebration of Mediterranean culture. Its vibrant colors and flavors bring people together, making it ideal for festive occasions."
        },
        "notes": {
          "header": "Notes",
          "text": "For the best results, use authentic Spanish saffron and fresh seafood. Adjust the seasoning to your preference and enjoy with a glass of Spanish white wine."
        },
        "steps": [
          {
            "label": "Step 1: Prepare the Broth",
            "description": "Heat fish stock in a small pot, add saffron threads and smoked paprika, and let it simmer for 5 minutes. Keep warm."
          },
          {
            "label": "Step 2: Sauté the Base",
            "description": "In a paella pan, heat olive oil and sauté chopped onion, garlic, and red bell pepper until soft. Add grated tomato and cook until the mixture thickens."
          },
          {
            "label": "Step 3: Add the Rice",
            "description": "Add rice to the pan and stir to coat it with the sautéed mixture. Pour in white wine, letting the alcohol evaporate."
          },
          {
            "label": "Step 4: Pour in the Broth",
            "description": "Add the warm seafood broth gradually, spreading the rice evenly. Avoid stirring to allow the rice to cook properly."
          },
          {
            "label": "Step 5: Cook the Seafood",
            "description": "Arrange shrimp, mussels, clams, and squid on top of the rice. Reduce heat and cook until the seafood is done and the broth is absorbed. Add green peas in the final minutes."
          },
          {
            "label": "Step 6: Create the Socarrat",
            "description": "Increase the heat for 1-2 minutes to form a crispy, caramelized rice layer at the bottom. Be careful not to burn it."
          },
          {
            "label": "Step 7: Serve and Enjoy",
            "description": "Let the paella rest for 5 minutes. Garnish with lemon wedges and fresh parsley. Serve directly from the pan for an authentic experience."
          }
        ],
        "faq": [
          {
            "question": "What is Paella de Marisco?",
            "answer": "Paella de Marisco is a traditional Spanish seafood paella made with saffron-infused rice, fresh seafood, and Mediterranean spices."
          },
          {
            "question": "Can I make Paella without seafood?",
            "answer": "Yes, you can substitute seafood with vegetables, chicken, or rabbit to make other versions like Paella Valenciana."
          },
          {
            "question": "What is the secret to a perfect Paella?",
            "answer": "The key to a perfect paella is using high-quality saffron, maintaining proper broth-to-rice ratio, and achieving the crispy socarrat layer."
          },
          {
            "question": "What type of rice is best for Paella?",
            "answer": "Bomba rice is traditionally used for paella due to its ability to absorb liquid without becoming mushy. Arborio rice is also a good substitute."
          }
        ]
      }
      ,
      {
        "url": "Spanish-Churros",
        "id": "Spanish Churros",
        "title": "Make Authentic Spanish Churros | Easy Churros Recipe",
        "image": "/image/blog/Churros.jpg",
        "description": [
          "Golden, crispy, and dusted with cinnamon sugar – Churros are the ultimate indulgence for anyone with a sweet tooth.",
          "Churros are made from light and airy choux pastry, piped into long strips, and fried until perfectly crispy.",
          "The warm pastries are generously sprinkled with cinnamon and sugar, adding the perfect balance of sweetness and spice.",
          "No churro experience is complete without a rich, velvety chocolate sauce for dipping.",
          "A timeless treat perfect for breakfast, dessert, or a festive snack!"
        ],
        "checklist": [
          "Use a star-tipped piping bag for authentic churro ridges.",
          "Ensure the oil is at 375°F (190°C) for perfect crispiness.",
          "Coat the churros in cinnamon sugar while they are still warm.",
          "Prepare a smooth chocolate sauce for dipping.",
          "Enjoy fresh churros for the best taste and texture."
        ],
        "additionalDetails": {
          "header": "More Details",
          "text": "Spanish Churros bring together crispiness, sweetness, and indulgence in every bite. A simple yet delightful experience that captures the joy of authentic Spanish cuisine."
        },
        "notes": {
          "header": "Notes",
          "text": "Please inform our staff of any allergies or dietary restrictions before ordering."
        },
        "steps": [
          {
            "label": "Step 1: Prepare the Dough",
            "description": "In a saucepan, bring water, butter, sugar, and salt to a boil. Remove from heat and stir in flour until it forms a smooth dough."
          },
          {
            "label": "Step 2: Cool & Add Egg",
            "description": "Let the dough cool slightly, then mix in the egg and vanilla until smooth."
          },
          {
            "label": "Step 3: Pipe the Churros",
            "description": "Transfer the dough into a piping bag with a star tip."
          },
          {
            "label": "Step 4: Fry Until Golden",
            "description": "Heat oil to 375°F (190°C) and pipe strips of dough directly into the oil. Fry until golden brown."
          },
          {
            "label": "Step 5: Coat with Cinnamon Sugar",
            "description": "Roll the warm churros in a mixture of sugar and cinnamon."
          },
          {
            "label": "Step 6: Serve with Chocolate Sauce",
            "description": "Enjoy crispy churros dipped in rich, warm chocolate sauce."
          }
        ],
        "faq": [
          {
            "question": "Where Did Churros Originate?",
            "answer": "Churros are believed to have originated in Spain and became popular across Latin America and other parts of the world."
          },
          {
            "question": "Can I Bake Churros Instead of Frying?",
            "answer": "While traditionally fried, churros can also be baked for a healthier option, though they won't achieve the same crispy texture."
          },
          {
            "question": "What is the Best Chocolate Sauce for Churros?",
            "answer": "A rich dark chocolate sauce made from melted chocolate, cream, and a hint of cinnamon is the perfect pairing."
          },
          {
            "question": "Can I Make Churros in Advance?",
            "answer": "Churros are best enjoyed fresh, but you can prepare the dough ahead and fry them just before serving."
          }
        ],
        "meta": {
          "title": "Make Authentic Spanish Churros | Easy Churros Recipe",
          "description": "Learn how to make crispy Spanish churros with this easy recipe! Light choux pastry, dusted with cinnamon sugar, and served with warm chocolate sauce.",
          "keywords": [
            "Best churros recipe",
            "Churros ingredients",
            "Easy churros recipe",
            "Spanish churros recipe"
          ]
        }
      },

  



    ]

    return data.find(item => item.url === blog) || null;
  }
  const blogData = getBlogData(blog);

  if (!blogData) {
    return <h1>Blog not found!</h1>;
  }







  return (
    <div className="mt-[6rem]">
      <GridLayout blogData={blogData} />
    </div>
  );
}

