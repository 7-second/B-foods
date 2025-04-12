import React, { useState } from 'react';
import { Foods } from '../Food Data/Food';
import { IoMdCloseCircle } from "react-icons/io";

function Card() {
  const [food, setFood] = useState(Foods);
  const [selectedFood, setSelectedFood] = useState(null);

  const filterFoodType = (category) => {
    setFood(Foods.filter((item) => item.category === category));
  };

  const filterFoodPrice = (minPrice, maxPrice) => {
    setFood(Foods.filter((item) => item.price >= minPrice && item.price <= maxPrice));
  };

  return (
    <>
      {selectedFood && (
        <div className="w-full h-screen top-0 left-0 bg-black/80 z-20 flex items-center justify-center fixed">
          <div className="bg-white w-[500px] h-[400px] px-4 rounded-xl overflow-y-auto">
            <div className="flex justify-between">
              <div className="px-2 py-2 h-fit text-[20px] font-serif font-bold underline">{selectedFood.hotelName}</div>
              <div className="flex justify-end px-2 py-2 cursor-pointer " title='Close'>
                <IoMdCloseCircle onClick={() => setSelectedFood(null)} size={30} />
              </div>
            </div>
            <div className="">
              <img className='w-full h-[200px] rounded-t-xl object-cover' src={selectedFood.image} alt={selectedFood.name} />
            </div>
            <div className="flex flex-col ">
              <h2 className='flex gap-6'> <label className='text-left text-[15px] font-bold font-sans'>category: </label>{selectedFood.category} </h2>
              <h2 className='flex gap-6'> <label className='text-left text-[15px] font-bold font-sans'>calories: </ label>{selectedFood.calories}</h2>
              <h2 className='flex gap-6'> <label className='text-left text-[15px] font-bold font-sans'>ingredients: </label>{selectedFood.ingredients}</h2>
              <h2 className='flex gap-6'> <label className='text-left text-[15px] font-bold font-sans'>description: </label>{selectedFood.description}</h2>
            </div>
            <div className="flex flex-col gap-2 px-2 py-2">
              {selectedFood.reviews && Array.isArray(selectedFood.reviews) ? (
                selectedFood.reviews.map((review, reviewIndex) => (
                  <div key={reviewIndex} className="border border-gray-950 p-2">
                    <h2>
                      <label>
                        Name: <label className="font-semibold">{review.user}</label>
                      </label>
                    </h2>
                    <h2>{review.comment}</h2>
                    <p>Stars: {review.stars}</p>
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-8 lg:px-24">
          <div className="mb-8 overflow-x-auto">
            <h2 className="text-white text-lg font-semibold mb-4">Filter Type</h2>
            <ul className="flex space-x-3">
              <li
                onClick={() => setFood(Foods)}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                All
              </li>
              <li
                onClick={() => filterFoodType('Burger')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Burger
              </li>
              <li
                onClick={() => filterFoodType('Pizza')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Pizza
              </li>
              <li
                onClick={() => filterFoodType('Salad')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Salad
              </li>
              <li
                onClick={() => filterFoodType('Pasta')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Pasta
              </li>
              <li
                onClick={() => filterFoodType('Tacos')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Tacos
              </li>
              <li
                onClick={() => filterFoodType('Curry')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Curry
              </li>
              <li
                onClick={() => filterFoodType('Dessert')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Dessert
              </li>
              <li
                onClick={() => filterFoodType('BBQ')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                BBQ
              </li>
              <li
                onClick={() => filterFoodType('Sushi')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Sushi
              </li>
              <li
                onClick={() => filterFoodType('Drink')}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                Drink
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">Filter Price (Birr)</h2>
            <ul className="flex space-x-3">
              <li
                onClick={() => setFood(Foods)}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                All
              </li>
              <li
                onClick={() => filterFoodPrice(50, 300)}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                50 - 300
              </li>
              <li
                onClick={() => filterFoodPrice(400, 800)}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                400 - 800
              </li>
              <li
                onClick={() => filterFoodPrice(900, Infinity)}
                className="border border-orange-500 text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-500 hover:text-white cursor-pointer transition-colors duration-300"
              >
                900+
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {food.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
              >
                <h3 className="text-white text-xl font-semibold mb-2">{item.hotelName}</h3>
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-xl object-cover w-full h-48 mb-4"
                />
                <div className="flex justify-between w-full mb-4">
                  <h4 className="text-white">{item.name}</h4>
                  <span className="bg-red-500 text-white px-2 rounded-full">{item.price} Birr</span>
                </div>
                <button
                  onClick={() => setSelectedFood(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg transition-colors duration-300 w-full mb-2"
                >
                  Detail
                </button>
                <button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg transition-colors duration-300 w-full"
                >
                 Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;