import React, { useEffect, useRef, useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import hero from '../assets/hero.png';
import hand from '../assets/hand.png';
import toprated from '../Food Data/Top.Rated';
import gsap from 'gsap';

function Home() {
  const [fooddetail, setFoodDetail] = useState(false);
  const [top, setTop] = useState(toprated);
  const [selectedFood, setSelectedFood] = useState(null);

  const textRef = useRef(null);
  const imageRef = useRef(null);
  const navRef = useRef(null);
  const topRatedRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power1.out' } });

    tl.from(navRef.current.children, {
      opacity: 0,
      y: -20,
      stagger: 0.03,
    }).to(navRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.03,
    }).from(textRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.03,
    }).to(textRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.03,
    }).from(imageRef.current, {
      opacity: 0,
      x: 30,
    }).to(imageRef.current, {
      opacity: 1,
      x: 0,
    }, '-=0.2').from(topRatedRef.current, {
      opacity: 0,
      y: 20,
    }).to(topRatedRef.current, {
      opacity: 1,
      y: 0,
    });

    return () => tl.kill();
  }, []);

  return (
    <>
      {selectedFood && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-20 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-y-auto max-w-[500px] w-full max-h-[90vh] p-4">
            <div className="flex justify-between">
              <div className="text-2xl font-serif font-bold underline">{selectedFood.hotelName}</div>
              <div className="cursor-pointer" title="Close">
                <IoMdCloseCircle onClick={() => setSelectedFood(null)} size={30} />
              </div>
            </div>
            <div className="mt-4">
              <img className="w-full rounded-t-xl object-cover h-[200px]" src={selectedFood.image} alt={selectedFood.name} />
            </div>
            <div className="flex flex-col mt-4">
              <h2 className="flex gap-2 text-sm md:text-base"><label className="font-bold">category:</label> {selectedFood.category}</h2>
              <h2 className="flex gap-2 text-sm md:text-base"><label className="font-bold">calories:</label> {selectedFood.calories}</h2>
              <h2 className="flex gap-2 text-sm md:text-base"><label className="font-bold">ingredients:</label> {selectedFood.ingredients.join(', ')}</h2>
              <h2 className="flex gap-2 text-sm md:text-base"><label className="font-bold">description:</label> {selectedFood.description}</h2>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {selectedFood.reviews && Array.isArray(selectedFood.reviews) ? (
                selectedFood.reviews.map((review, reviewIndex) => (
                  <div key={reviewIndex} className="border border-gray-950 p-2">
                    <h2 className="text-sm md:text-base"><label className="font-bold">Name:</label> <label className="font-semibold">{review.user}</label></h2>
                    <h2 className="text-sm md:text-base">{review.comment}</h2>
                    <p className="text-sm md:text-base">Stars: {review.stars}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm md:text-base">No reviews available.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-8 lg:px-24">
          <nav className="flex flex-wrap justify-evenly items-center mb-8" ref={navRef}>
            <div className="flex w-full justify-center md:justify-start md:w-auto mb-4 md:mb-0">
              <h1 className="text-orange-500 font-bold text-3xl">
                <span className="text-blue-500 text-2xl flex flex-col">
                  <span className="text-xs absolute mt-6">enjoy</span>
                </span>
                𝔅-𝓕𝓸𝓸𝓭𝓼
              </h1>
            </div>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 items-center text-gray-300 font-semibold text-lg w-full md:w-auto">
              <li className="border border-orange-500 px-2 py-1 rounded-lg hover:text-white transition-colors duration-300 cursor-pointer">Find Food</li>
              <li className="border border-orange-500 px-2 py-1 rounded-xl hover:text-white transition-colors duration-300 cursor-pointer">Find Restaurant</li>
            </ul>
            <div className="w-16 h-16 flex justify-center items-center rounded-full overflow-hidden mt-4 md:mt-0">
              <img className="object-cover w-full h-full" src={hero} alt="User Avatar" />
            </div>
          </nav>

          <section className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="text-white text-center md:text-left" ref={textRef}>
              <h2 className="text-lg md:text-xl text-gray-400 mb-2">😋 Easy way to choose your desire</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Order Tasty & Fresh Food</h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 leading-tight mb-6">Anytime!</h1>
              <p className="text-gray-300 text-sm md:text-base mb-8">Just confirm your order and enjoy our delicious delivery.</p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 cursor-pointer">Order Now</button>
              <div className="hidden md:flex absolute md:left-[-50px] mt-[140px] w-[200px] lg:left-[-30px] lg:top-[280px] lg:w-[300px]">
                <img src={hand} alt="hand gesture" />
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 lg:w-2/5" ref={imageRef}>
              <img src={hero} alt="food illustration" className="w-full" />
            </div>
          </section>

          <section className="text-center mb-6 mt-[-50px]" ref={topRatedRef}>
            <h2 className="text-3xl font-bold text-white mb-8">Top <span className="text-orange-500">Rated</span></h2>
            <div className="flex gap-6 mb-2 w-full overflow-x-auto scrollbar-hide">
              {top.map((item, index) => (
                <div key={index} className="flex gap-4 items-center justify-center w-full h-full min-w-[300px]">
                  <div className="w-[300px] bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6">
                    <div className="relative mb-4">
                      <img src={item.image} alt="food item" className="h-[150px] w-full mx-auto transition-transform duration-300 hover:scale-110 rounded-xl" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-red-500 font-medium text-base mb-4">{item.price}</p>
                    <div className="flex flex-col space-y-2">
                      <button onClick={() => setSelectedFood(item)} className="text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white py-2 rounded-lg transition-colors duration-300 cursor-pointer">Detail</button>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-colors duration-300 cursor-pointer">Order Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;