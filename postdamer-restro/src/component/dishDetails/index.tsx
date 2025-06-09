// DishDetail.tsx
// import React from 'react';
// import menuById, { Dish } from '../../../AllData/menubyId';
// import './DishDetail.css';

// type DishDetailProps = {
//   dishId: string;
// };

// const DishDetail: React.FC<DishDetailProps> = ({ dishId }) => {
//   const dish: Dish  = menuById[dishId];

//   if (!dish) {
//     return <div>Dish not found.</div>;
//   }

//   return (
//     <div className="dish-detail">
//       <h2>{dish.name}</h2>
//       <img src={dish.photo} alt={dish.name} className="dish-photo" />
//       <p className="dish-description">{dish.description}</p>
//       <h3>Ingredients:</h3>
//       <ul className="dish-ingredients">
//         {dish.ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
//         ))}
//       </ul>
//       <h3>Interesting Facts:</h3>
//       <p className="dish-facts">{dish.interestingFacts}</p>
//     </div>
//   );
// };

// export default DishDetail;
