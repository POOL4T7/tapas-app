
export type DishDetail={
    title: string;
    meta: string;
    price: number;
    imageUrl: string;
}

export type dishTag={
    title:string,
    dishes:DishDetail[]
}

export type MenuSectionProps ={
    name: string;
    tagName:string;
    items: dishTag[];
}

const menuDataDishes: MenuSectionProps[] = [
    {
        name: 'starter',
        tagName:'starter',
        items: [
            {
                title: 'All',
                dishes: [
                    { title: 'Aloo and Dal ki Tikki', meta: 'Onion / Tomato', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Cheese Balls', meta: 'Puffed corn / Cheese-flavored', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Veg Crispy', meta: 'Ginger garlic / Black pepper', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Veg Nuggets', meta: 'Crispy / Delicious', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Paneer Tikka', meta: 'Tandoori / Spicy', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Aloo and Dal ki Tikki', meta: 'Onion / Tomato', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Cheese Balls', meta: 'Puffed corn / Cheese-flavored', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Veg Crispy', meta: 'Ginger garlic / Black pepper', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Veg Nuggets', meta: 'Crispy / Delicious', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Paneer Tikka', meta: 'Tandoori / Spicy', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Wings', meta: 'Spicy / BBQ', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Fish Fry', meta: 'Marinated / Crispy', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Prawn Tempura', meta: 'Lightly battered / Crunchy', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Tikka', meta: 'Tandoori / Spicy', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Lollipop', meta: 'Succulent / Tangy', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Spring Rolls', meta: 'Crispy / Vegetable-filled', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chilli Paneer', meta: 'Spicy / Tangy', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Manchurian', meta: 'Indo-Chinese / Tangy', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Schezwan Noodles', meta: 'Spicy / Flavorful', price: 13, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Honey Chilli Potatoes', meta: 'Sweet / Spicy', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Tandoori Chicken', meta: 'Spicy / Smoky', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Malai Tikka', meta: 'Creamy / Mild', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Afghani Chicken', meta: 'Rich / Flavorful', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Seekh Kebab', meta: 'Savory / Grilled', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Tandoori Fish', meta: 'Marinated / Grilled', price: 18, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },

            {
                title: 'Veg Starters',
                dishes: [
                    { title: 'Aloo and Dal ki Tikki', meta: 'Onion / Tomato', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Cheese Balls', meta: 'Puffed corn / Cheese-flavored', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Veg Crispy', meta: 'Ginger garlic / Black pepper', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Veg Nuggets', meta: 'Crispy / Delicious', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Paneer Tikka', meta: 'Tandoori / Spicy', price: 14, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
            {
                title: 'Non-Veg Starters',
                dishes: [
                    { title: 'Chicken Wings', meta: 'Spicy / BBQ', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Fish Fry', meta: 'Marinated / Crispy', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Prawn Tempura', meta: 'Lightly battered / Crunchy', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Tikka', meta: 'Tandoori / Spicy', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Lollipop', meta: 'Succulent / Tangy', price: 16, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
            {
                title: 'Chinese Starters',
                dishes: [
                    { title: 'Spring Rolls', meta: 'Crispy / Vegetable-filled', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chilli Paneer', meta: 'Spicy / Tangy', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Manchurian', meta: 'Indo-Chinese / Tangy', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Schezwan Noodles', meta: 'Spicy / Flavorful', price: 13, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Honey Chilli Potatoes', meta: 'Sweet / Spicy', price: 11, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
            {
                title: 'Tandoori Starters',
                dishes: [
                    { title: 'Tandoori Chicken', meta: 'Spicy / Smoky', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Malai Tikka', meta: 'Creamy / Mild', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Afghani Chicken', meta: 'Rich / Flavorful', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Seekh Kebab', meta: 'Savory / Grilled', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Tandoori Fish', meta: 'Marinated / Grilled', price: 18, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            }
        ]
    },
    {
        name: 'breakfast',
        tagName:'breakfast',

        items: [
            {
                title: 'All',
                dishes: [
                    { title: 'Eggs Benedict', meta: 'Poached eggs / English muffin / Hollandaise sauce', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Pancakes', meta: 'Buttermilk / Maple syrup / Butter', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'French Toast', meta: 'Thick-sliced bread / Cinnamon / Syrup', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Omelette', meta: 'Choice of fillings: cheese, ham, mushrooms, peppers, onions', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Continental Breakfast', meta: 'Assorted pastries / Fresh fruit / Yogurt', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Eggs Benedict', meta: 'Poached eggs / English muffin / Hollandaise sauce', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Pancakes', meta: 'Buttermilk / Maple syrup / Butter', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'French Toast', meta: 'Thick-sliced bread / Cinnamon / Syrup', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Omelette', meta: 'Choice of fillings: cheese, ham, mushrooms, peppers, onions', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Continental Breakfast', meta: 'Assorted pastries / Fresh fruit / Yogurt', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Eggs Benedict', meta: 'Poached eggs / English muffin / Hollandaise sauce', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Pancakes', meta: 'Buttermilk / Maple syrup / Butter', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'French Toast', meta: 'Thick-sliced bread / Cinnamon / Syrup', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Omelette', meta: 'Choice of fillings: cheese, ham, mushrooms, peppers, onions', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Continental Breakfast', meta: 'Assorted pastries / Fresh fruit / Yogurt', price: 15, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
            {
                title: 'Classic Breakfast',
                dishes: [
                    { title: 'Eggs Benedict', meta: 'Poached eggs / English muffin / Hollandaise sauce', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Pancakes', meta: 'Buttermilk / Maple syrup / Butter', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'French Toast', meta: 'Thick-sliced bread / Cinnamon / Syrup', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Omelette', meta: 'Choice of fillings: cheese, ham, mushrooms, peppers, onions', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Continental Breakfast', meta: 'Assorted pastries / Fresh fruit / Yogurt', price: 15, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
            {
                title: 'Special',
                dishes: [
                    { title: 'Eggs Benedict', meta: 'Poached eggs / English muffin / Hollandaise sauce', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Pancakes', meta: 'Buttermilk / Maple syrup / Butter', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'French Toast', meta: 'Thick-sliced bread / Cinnamon / Syrup', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Omelette', meta: 'Choice of fillings: cheese, ham, mushrooms, peppers, onions', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Continental Breakfast', meta: 'Assorted pastries / Fresh fruit / Yogurt', price: 15, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
        ]
    },
    {
        name: 'brunch',
        tagName:'Brunch',

        items: [
            {
                title: 'All',
                dishes: [
                    { title: 'Avocado Toast', meta: 'Whole grain bread / Avocado / Cherry tomatoes', price: 13, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Quiche', meta: 'Savory pastry crust / Eggs / Cheese / Vegetables', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Smoked Salmon Bagel', meta: 'Toasted bagel / Cream cheese / Red onions', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Breakfast Burrito', meta: 'Scrambled eggs / Black beans / Salsa / Cheese', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Granola Bowl', meta: 'Greek yogurt / Fresh berries / Honey / Granola', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Avocado Toast ', meta: 'Whole grain bread / Avocado / Cherry tomatoes', price: 13, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Quiche', meta: 'Savory pastry crust / Eggs / Cheese / Vegetables', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Smoked Salmon ', meta: 'Toasted bagel / Cream cheese / Red onions', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Breakfast Burrito', meta: 'Scrambled eggs / Black beans / Salsa / Cheese', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Granola Bowl', meta: 'Greek yogurt / Fresh berries / Honey / Granola', price: 10, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
            {
                title: 'Bunch Buffer Specialties',
                dishes: [
                    { title: 'Avocado Toast', meta: 'Whole grain bread / Avocado / Cherry tomatoes', price: 13, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Quiche', meta: 'Savory pastry crust / Eggs / Cheese / Vegetables', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Smoked Salmon Bagel', meta: 'Toasted bagel / Cream cheese / Red onions', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Breakfast Burrito', meta: 'Scrambled eggs / Black beans / Salsa / Cheese', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Granola Bowl', meta: 'Greek yogurt / Fresh berries / Honey / Granola', price: 10, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            },
            {
                title: 'Bunch Buffer Main',
                dishes: [
                    { title: 'Avocado Toast ', meta: 'Whole grain bread / Avocado / Cherry tomatoes', price: 13, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Quiche', meta: 'Savory pastry crust / Eggs / Cheese / Vegetables', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Smoked Salmon ', meta: 'Toasted bagel / Cream cheese / Red onions', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Breakfast Burrito', meta: 'Scrambled eggs / Black beans / Salsa / Cheese', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Granola Bowl', meta: 'Greek yogurt / Fresh berries / Honey / Granola', price: 10, imageUrl: 'http://via.placeholder.com/70x70' }
                ]
            }
        ]
    },
    {
        name: 'tapas',
        tagName:'Tapas',

        items: [
            
                { title: 'All',
                 dishes: [
                    { title: 'Bruschetta', meta: 'Toasted bread / Tomato / Basil / Garlic', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Patatas Bravas', meta: 'Fried potatoes / Spicy tomato sauce / Garlic aioli', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Gazpacho', meta: 'Cold tomato soup / Cucumber / Bell pepper / Onion', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cheese / Herbs / Breadcrumbs', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Spanish Tortilla', meta: 'Potatoes / Eggs / Onion / Olive oil', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Garlic Shrimp', meta: 'Shrimp / Garlic / Parsley / Olive oil', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Calamari', meta: 'Fried squid rings / Marinara sauce', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Grilled Octopus', meta: 'Octopus tentacles / Lemon / Olive oil / Paprika', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Sardines in Vinegar', meta: 'Fresh sardines / Vinegar / Onion / Olive oil', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Anchovy Toast', meta: 'Toasted bread / Anchovies / Olive oil / Parsley', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Garlic Shrimp', meta: 'Shrimp / Garlic / Parsley / Olive oil', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Calamari', meta: 'Fried squid rings / Marinara sauce', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Grilled Octopus', meta: 'Octopus tentacles / Lemon / Olive oil / Paprika', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Sardines in Vinegar', meta: 'Fresh sardines / Vinegar / Onion / Olive oil', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Anchovy Toast', meta: 'Toasted bread / Anchovies / Olive oil / Parsley', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chorizo al Vino', meta: 'Spanish chorizo / Red wine reduction', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Albondigas', meta: 'Spanish meatballs / Tomato sauce / Garlic', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Pork Belly Bites', meta: 'Roasted pork belly / Honey glaze', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Skewers', meta: 'Grilled chicken / Bell peppers / Onions', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Lamb Empanadas', meta: 'Savory pastry / Ground lamb / Spices', price: 13, imageUrl: 'http://via.placeholder.com/70x70' }
                ] },
                { title: 'Vegetarian Tapas',
                 dishes: [
                    { title: 'Bruschetta', meta: 'Toasted bread / Tomato / Basil / Garlic', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Patatas Bravas', meta: 'Fried potatoes / Spicy tomato sauce / Garlic aioli', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Gazpacho', meta: 'Cold tomato soup / Cucumber / Bell pepper / Onion', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cheese / Herbs / Breadcrumbs', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Spanish Tortilla', meta: 'Potatoes / Eggs / Onion / Olive oil', price: 8, imageUrl: 'http://via.placeholder.com/70x70' }
                ] },
                { title: 'Seafood Tapas', dishes: [
                    { title: 'Garlic Shrimp', meta: 'Shrimp / Garlic / Parsley / Olive oil', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Calamari', meta: 'Fried squid rings / Marinara sauce', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Grilled Octopus', meta: 'Octopus tentacles / Lemon / Olive oil / Paprika', price: 15, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Sardines in Vinegar', meta: 'Fresh sardines / Vinegar / Onion / Olive oil', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Anchovy Toast', meta: 'Toasted bread / Anchovies / Olive oil / Parsley', price: 9, imageUrl: 'http://via.placeholder.com/70x70' }
                ] },
                { title: 'Meat Tapas', dishes: [
                    { title: 'Chorizo al Vino', meta: 'Spanish chorizo / Red wine reduction', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Albondigas', meta: 'Spanish meatballs / Tomato sauce / Garlic', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Pork Belly Bites', meta: 'Roasted pork belly / Honey glaze', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Chicken Skewers', meta: 'Grilled chicken / Bell peppers / Onions', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                    { title: 'Lamb Empanadas', meta: 'Savory pastry / Ground lamb / Spices', price: 13, imageUrl: 'http://via.placeholder.com/70x70' }
                ] },
                
            ]
        },
        {
            name: 'carte',
            tagName:'ALA CARTE',

            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Calamari', meta: 'Fried squid rings / Marinara sauce', price: 12, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Appetizers',
                    dishes: [
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Calamari', meta: 'Fried squid rings / Marinara sauce', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: 'Prime beef tenderloin / Red wine reduction', price: 32, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Risotto', meta: 'Arborio rice / Seasonal vegetables / Parmesan cheese', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Lava Cake', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Lava Cake', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Lava Cake', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 8, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Main Course',
                    dishes: [
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Wild-caught salmon / Lemon butter sauce', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: 'Prime beef tenderloin / Red wine reduction', price: 32, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Risotto', meta: 'Arborio rice / Seasonal vegetables / Parmesan cheese', price: 16, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Desserts',
                    dishes: [
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Lava Cake', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Lava Cake', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Lava Cake', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 8, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            
            ]
        },
        {
            name: 'drinks',
            tagName:'Drinks',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Fresh Orange Juice', meta: '100% pure squeezed orange juice', price: 5, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Virgin Mojito', meta: 'Mint leaves / Lime / Soda water / Sugar', price: 6, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Margarita', meta: 'Tequila / Triple sec / Lime juice / Salt rim', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Mojito', meta: 'White rum / Lime / Mint / Soda water / Sugar', price: 11, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chardonnay', meta: 'White wine / Citrus / Oaky notes', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Rosé', meta: 'Pink wine / Strawberry / Floral aroma', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lager', meta: 'Light beer / Crisp / Refreshing', price: 6, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Non-Alcoholic',
                    dishes: [
                        { title: 'Fresh Orange Juice', meta: '100% pure squeezed orange juice', price: 5, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Virgin Mojito', meta: 'Mint leaves / Lime / Soda water / Sugar', price: 6, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Cocktails',
                    dishes: [
                        { title: 'Margarita', meta: 'Tequila / Triple sec / Lime juice / Salt rim', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Mojito', meta: 'White rum / Lime / Mint / Soda water / Sugar', price: 11, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Wines',
                    dishes: [
                        { title: 'Chardonnay', meta: 'White wine / Citrus / Oaky notes', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Rosé', meta: 'Pink wine / Strawberry / Floral aroma', price: 8, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Beers',
                    dishes: [
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lager', meta: 'Light beer / Crisp / Refreshing', price: 6, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        },
        {
            name: 'bregular',
            tagName:'BUSINESS LUNCH - REGULAR',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Soup of the Day', meta: 'Chef\'s daily creation', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Bruschetta', meta: 'Toasted bread / Tomato / Basil / Garlic', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Chicken Breast', meta: 'Mashed potatoes / Seasonal vegetables', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Pasta Primavera', meta: 'Mixed vegetables / Parmesan cheese / Olive oil', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Fruit Tart', meta: 'Seasonal fruits / Pastry cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Starters',
                    dishes: [
                        { title: 'Soup of the Day', meta: 'Chef\'s daily creation', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caesar Salad', meta: 'Romaine lettuce / Croutons / Parmesan cheese', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Bruschetta', meta: 'Toasted bread / Tomato / Basil / Garlic', price: 9, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Main Course',
                    dishes: [
                        { title: 'Grilled Chicken Breast', meta: 'Mashed potatoes / Seasonal vegetables', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Salmon Fillet', meta: 'Wild rice / Asparagus / Lemon butter sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Pasta Primavera', meta: 'Mixed vegetables / Parmesan cheese / Olive oil', price: 16, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Desserts',
                    dishes: [
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Mousse', meta: 'Rich chocolate / Whipped cream', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Fruit Tart', meta: 'Seasonal fruits / Pastry cream', price: 9, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        },
        {
            name:'bmoderate',
            tagName: 'BUSINESS LUNCH - MODERATE',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Soup of the Day', meta: 'Chef\'s daily creation', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Shrimp Cocktail', meta: 'Chilled shrimp / Cocktail sauce / Lemon wedge', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Marsala', meta: 'Pan-seared chicken / Marsala wine sauce / Mushrooms', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Stir-Fry', meta: 'Assorted vegetables / Teriyaki sauce / Jasmine rice', price: 16, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 8, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Starters',
                    dishes: [
                        { title: 'Soup of the Day', meta: 'Chef\'s daily creation', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Caprese Salad', meta: 'Fresh mozzarella / Tomato / Basil / Balsamic glaze', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Shrimp Cocktail', meta: 'Chilled shrimp / Cocktail sauce / Lemon wedge', price: 12, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Main Course',
                    dishes: [
                        { title: 'Chicken Marsala', meta: 'Pan-seared chicken / Marsala wine sauce / Mushrooms', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Sea Bass', meta: 'Jasmine rice / Green beans / Lemon dill sauce', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Stir-Fry', meta: 'Assorted vegetables / Teriyaki sauce / Jasmine rice', price: 16, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Desserts',
                    dishes: [
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Key Lime Pie', meta: 'Tangy lime filling / Graham cracker crust', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 8, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        },
        {
            name:'bspecial',
            tagName: 'BUSINESS LUNCH - SPECIAL',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Seafood Chowder', meta: 'Assorted seafood / Creamy broth / Vegetables', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Escargot', meta: 'Snails / Garlic butter / Parsley / Baguette', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: 'Grilled beef tenderloin / Red wine reduction', price: 32, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Rack of Lamb', meta: 'Herb-crusted lamb / Mint jelly', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Soufflé', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 11, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Starters',
                    dishes: [
                        { title: 'Seafood Chowder', meta: 'Assorted seafood / Creamy broth / Vegetables', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Spinach Artichoke Dip', meta: 'Creamy spinach / Artichoke hearts / Tortilla chips', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Escargot', meta: 'Snails / Garlic butter / Parsley / Baguette', price: 14, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Main Course',
                    dishes: [
                        { title: 'Filet Mignon', meta: 'Grilled beef tenderloin / Red wine reduction', price: 32, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Ravioli', meta: 'Homemade ravioli / Lobster meat / Cream sauce', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Rack of Lamb', meta: 'Herb-crusted lamb / Mint jelly', price: 30, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Desserts',
                    dishes: [
                        { title: 'Chocolate Soufflé', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 11, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        },
        {
            name:'gregular',
            tagName: 'GROUP OFFER - REGULAR',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Bruschetta Platter', meta: 'Assorted bruschetta / Garlic bread / Tomato topping', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Antipasto Platter', meta: 'Cured meats / Cheeses / Olives / Artichokes / Breadsticks', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Antipasto Platter', meta: 'Cured meats / Cheeses / Olives / Artichokes / Breadsticks', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Antipasto Platter', meta: 'Cured meats / Cheeses / Olives / Artichokes / Breadsticks', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Spring Rolls', meta: 'Crispy rolls / Mixed vegetables / Sweet chili sauce', price: 25, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Parmesan', meta: 'Breaded chicken / Marinara sauce / Mozzarella cheese / Spaghetti', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Parmesan', meta: 'Breaded chicken / Marinara sauce / Mozzarella cheese / Spaghetti', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Parmesan', meta: 'Breaded chicken / Marinara sauce / Mozzarella cheese / Spaghetti', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Mutton Lasagna', meta: 'Layers of pasta / Ground Mutton / Marinara sauce / Ricotta cheese', price: 55, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Eggplant Rollatini', meta: 'Thinly sliced eggplant / Ricotta cheese / Marinara sauce', price: 45, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Fondue', meta: 'Assorted fruits / Marshmallows / Melted chocolate', price: 35, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Starters',
                    dishes: [
                        { title: 'Bruschetta Platter', meta: 'Assorted bruschetta / Garlic bread / Tomato topping', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Antipasto Platter', meta: 'Cured meats / Cheeses / Olives / Artichokes / Breadsticks', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Antipasto Platter', meta: 'Cured meats / Cheeses / Olives / Artichokes / Breadsticks', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Antipasto Platter', meta: 'Cured meats / Cheeses / Olives / Artichokes / Breadsticks', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Spring Rolls', meta: 'Crispy rolls / Mixed vegetables / Sweet chili sauce', price: 25, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Main Course',
                    dishes: [
                        { title: 'Chicken Parmesan', meta: 'Breaded chicken / Marinara sauce / Mozzarella cheese / Spaghetti', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Parmesan', meta: 'Breaded chicken / Marinara sauce / Mozzarella cheese / Spaghetti', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Parmesan', meta: 'Breaded chicken / Marinara sauce / Mozzarella cheese / Spaghetti', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Mutton Lasagna', meta: 'Layers of pasta / Ground Mutton / Marinara sauce / Ricotta cheese', price: 55, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Eggplant Rollatini', meta: 'Thinly sliced eggplant / Ricotta cheese / Marinara sauce', price: 45, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Desserts',
                    dishes: [
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cheesecake', meta: 'Graham cracker crust / Berry compote', price: 28, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Fondue', meta: 'Assorted fruits / Marshmallows / Melted chocolate', price: 35, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        },{
            name:'gmoderate',
            tagName: 'GROUP OFFER - MODERATE ',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Seafood Platter', meta: 'Assorted seafood / Lemon wedges / Cocktail sauce', price: 40, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Mediterranean Mezze', meta: 'Hummus / Baba ganoush / Tzatziki / Pita bread', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Wings', meta: 'BBQ / Buffalo / Honey mustard', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Ribeye Steak', meta: '12 oz steak / Mashed potatoes / Grilled vegetables', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Tail', meta: 'Steamed lobster tail / Drawn butter / Lemon', price: 65, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetarian Paella', meta: 'Saffron rice / Mixed vegetables / Spanish spices', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Classic Martini', meta: 'Gin / Dry vermouth / Olive garnish', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Old Fashioned', meta: 'Bourbon / Angostura bitters / Sugar cube / Orange twist', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Margarita', meta: 'Tequila / Triple sec / Lime juice / Salt rim', price: 13, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Starters',
                    dishes: [
                        { title: 'Seafood Platter', meta: 'Assorted seafood / Lemon wedges / Cocktail sauce', price: 40, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Mediterranean Mezze', meta: 'Hummus / Baba ganoush / Tzatziki / Pita bread', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chicken Wings', meta: 'BBQ / Buffalo / Honey mustard', price: 30, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Main Course',
                    dishes: [
                        { title: 'Grilled Ribeye Steak', meta: '12 oz steak / Mashed potatoes / Grilled vegetables', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lobster Tail', meta: 'Steamed lobster tail / Drawn butter / Lemon', price: 65, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetarian Paella', meta: 'Saffron rice / Mixed vegetables / Spanish spices', price: 50, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Bar Selection',
                    dishes: [
                        { title: 'Classic Martini', meta: 'Gin / Dry vermouth / Olive garnish', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Old Fashioned', meta: 'Bourbon / Angostura bitters / Sugar cube / Orange twist', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Margarita', meta: 'Tequila / Triple sec / Lime juice / Salt rim', price: 13, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Desserts',
                    dishes: [
                        { title: 'Chocolate Lava Cake', meta: 'Warm chocolate cake / Melting center / Vanilla ice cream', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 18, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 22, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        },{
            name:'gbar',
            tagName: 'GROUP OFFER - BAR',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Mojito', meta: 'White rum / Mint / Lime / Soda water', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Old Fashioned', meta: 'Bourbon / Angostura bitters / Sugar / Orange twist', price: 14, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lager', meta: 'Light beer / Crisp / Refreshing', price: 6, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chardonnay', meta: 'White wine / Citrus / Oaky notes', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Rosé', meta: 'Pink wine / Strawberry / Floral aroma', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Virgin Mojito', meta: 'Mint / Lime / Soda water / Sugar', price: 6, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Fresh Orange Juice', meta: '100% pure squeezed orange juice', price: 5, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Cocktails',
                    dishes: [
                        { title: 'Mojito', meta: 'White rum / Mint / Lime / Soda water', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Cosmopolitan', meta: 'Vodka / Triple sec / Cranberry juice / Lime juice', price: 12, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Old Fashioned', meta: 'Bourbon / Angostura bitters / Sugar / Orange twist', price: 14, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Beers',
                    dishes: [
                        { title: 'IPA', meta: 'India Pale Ale / Hoppy / Bitter', price: 7, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stout', meta: 'Dark beer / Roasted malt / Chocolate / Coffee', price: 8, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Lager', meta: 'Light beer / Crisp / Refreshing', price: 6, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Wines',
                    dishes: [
                        { title: 'Chardonnay', meta: 'White wine / Citrus / Oaky notes', price: 9, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Merlot', meta: 'Red wine / Plum / Cherry / Earthy notes', price: 10, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Rosé', meta: 'Pink wine / Strawberry / Floral aroma', price: 8, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Non-Alcoholic',
                    dishes: [
                        { title: 'Virgin Mojito', meta: 'Mint / Lime / Soda water / Sugar', price: 6, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Iced Tea', meta: 'Brewed black tea / Ice / Lemon wedge', price: 4, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Fresh Orange Juice', meta: '100% pure squeezed orange juice', price: 5, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        }, 
        {
            name:'gspecial',
            tagName: 'GROUP OFFER - SPECIAL',
            items: [
                {
                    title: 'All',
                    dishes: [
                        { title: 'Charcuterie Board', meta: 'Assorted cured meats / Cheeses / Olives / Bread', price: 40, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Shrimp Cocktail', meta: 'Chilled shrimp / Cocktail sauce / Lemon', price: 35, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Grilled Salmon', meta: 'Fresh salmon fillet / Lemon dill sauce / Roasted potatoes', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: '8 oz beef tenderloin / Red wine reduction / Grilled asparagus', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: '8 oz beef tenderloin / Red wine reduction / Grilled asparagus', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: '8 oz beef tenderloin / Red wine reduction / Grilled asparagus', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Risotto', meta: 'Arborio rice / Seasonal vegetables / Parmesan cheese', price: 45, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Chocolate Fondue', meta: 'Assorted fruits / Marshmallows / Melted chocolate', price: 25, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 18, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Appetizers',
                    dishes: [
                        { title: 'Charcuterie Board', meta: 'Assorted cured meats / Cheeses / Olives / Bread', price: 40, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Stuffed Mushrooms', meta: 'Mushroom caps / Cream cheese / Garlic / Herbs', price: 30, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Shrimp Cocktail', meta: 'Chilled shrimp / Cocktail sauce / Lemon', price: 35, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Entrees',
                    dishes: [
                        { title: 'Grilled Salmon', meta: 'Fresh salmon fillet / Lemon dill sauce / Roasted potatoes', price: 50, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: '8 oz beef tenderloin / Red wine reduction / Grilled asparagus', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: '8 oz beef tenderloin / Red wine reduction / Grilled asparagus', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Filet Mignon', meta: '8 oz beef tenderloin / Red wine reduction / Grilled asparagus', price: 60, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Vegetable Risotto', meta: 'Arborio rice / Seasonal vegetables / Parmesan cheese', price: 45, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                },
                {
                    title: 'Desserts',
                    dishes: [
                        { title: 'Chocolate Fondue', meta: 'Assorted fruits / Marshmallows / Melted chocolate', price: 25, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Tiramisu', meta: 'Ladyfingers / Mascarpone / Coffee liqueur', price: 20, imageUrl: 'http://via.placeholder.com/70x70' },
                        { title: 'Crème Brûlée', meta: 'Vanilla custard / Caramelized sugar', price: 18, imageUrl: 'http://via.placeholder.com/70x70' }
                    ]
                }
            ]
        }
        
        
        
        
];

export default menuDataDishes













