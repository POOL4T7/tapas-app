// menuById.ts
export type Dish = {
  name: string;
  photo: string;
  description: string;
  ingredients: string[];
  interestingFacts: string;
  images:string[];
  price:number
};

export type MenuById = {
  [key: string]: Dish;
};

const menuById: MenuById = {
  breakfast: {
    name: "Pancakes",
    photo: "https://plus.unsplash.com/premium_photo-1693237042093-b6fc2d56191d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:['https://plus.unsplash.com/premium_photo-1693183381392-4221ab649e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1693183383324-280f2e5f4f28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1707757442384-df157463bf15?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: "Fluffy pancakes served with syrup and fresh berries describes a delightful breakfast or brunch option, combining soft, airy pancakes with the sweetness of syrup and the freshness of seasonal berries. This classic dish offers a comforting and indulgent experience for any mealtime occasion.",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder", "Salt"],
    interestingFacts: "Pancakes have been a popular breakfast food since ancient Greek and Roman times.",
    price:12
  },
  moderate: {
    name: "moderate",
    photo: "https://plus.unsplash.com/premium_photo-1693237042093-b6fc2d56191d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:['https://plus.unsplash.com/premium_photo-1693183381392-4221ab649e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1693183383324-280f2e5f4f28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1707757442384-df157463bf15?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: "Fluffy pancakes served with syrup and fresh berries.",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder", "Salt"],
    interestingFacts: "Pancakes have been a popular breakfast food since ancient Greek and Roman times.",
    price:12

  },
  brunch1: {
    name: "Eggs Benedict",
    photo: "/images/eggs_benedict.jpg",
    images:['https://plus.unsplash.com/premium_photo-1693183381392-4221ab649e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1693183383324-280f2e5f4f28?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1707757442384-df157463bf15?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1663854478296-dd00b6257021?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
    description: "Poached eggs with hollandaise sauce on an English muffin, served with ham or bacon.",
    ingredients: ["Eggs", "English Muffins", "Ham", "Butter", "Lemon Juice", "Cayenne Pepper"],
    interestingFacts: "Eggs Benedict is said to have been created in New York City at the Waldorf Hotel in the late 19th century.",
    price:12
  },
  businessLunch1: {
    name: "Caesar Salad",
    photo: "/images/caesar_salad.jpg",
    images:[],
    description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan cheese.",
    ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese", "Anchovies"],
    interestingFacts: "The Caesar Salad was created in Tijuana, Mexico, by Italian-American restaurateur Caesar Cardini.",
    price:12
  },
  tapas1: {
    name: "Patatas Bravas",
    photo: "/images/patatas_bravas.jpg",
    images:[],
    description: "Crispy fried potatoes served with a spicy tomato sauce and aioli.",
    ingredients: ["Potatoes", "Tomato Sauce", "Garlic", "Olive Oil", "Paprika"],
    interestingFacts: "Patatas Bravas is a classic Spanish tapas dish, known for its bold flavors and versatility.",
    price:12
  },
  drinks1: {
    name: "Mojito",
    photo: "/images/mojito.jpg",
    images:[],
    description: "A refreshing cocktail made with rum, lime juice, mint, sugar, and soda water.",
    ingredients: ["White Rum", "Lime Juice", "Mint Leaves", "Sugar", "Soda Water"],
    interestingFacts: "The Mojito originated in Cuba and was a favorite drink of the author Ernest Hemingway.",
    price:12
  }
};

export default menuById;
