'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Camisola SL Benfica 2024",
    price: "€79.99",
    image: "https://readdy.ai/api/search-image?query=SL%20Benfica%20red%20home%20jersey%202024%20official%20soccer%20shirt%20with%20eagle%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot%20with%20soft%20lighting&width=400&height=400&seq=benfica2024&orientation=squarish",
    category: "Futebol"
  },
  {
    id: 2,
    name: "Camisola Lakers #23 LeBron",
    price: "€89.99",
    image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20purple%20and%20gold%20basketball%20jersey%20number%2023%20LeBron%20James%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=400&height=400&seq=lakers23&orientation=squarish",
    category: "NBA"
  },
  {
    id: 3,
    name: "Camisola Red Bull Racing F1",
    price: "€69.99",
    image: "https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20team%20shirt%20dark%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography%2C%20professional%20product%20shot&width=400&height=400&seq=redbullf1&orientation=squarish",
    category: "F1"
  },
  {
    id: 4,
    name: "Camisola Real Madrid Home",
    price: "€85.99",
    image: "https://readdy.ai/api/search-image?query=Real%20Madrid%20white%20home%20soccer%20jersey%202024%20official%20La%20Liga%20shirt%20with%20club%20crest%20on%20clean%20white%20background%2C%20premium%20football%20merchandise%20photography%2C%20professional%20product%20display&width=400&height=400&seq=realmadrid&orientation=squarish",
    category: "Futebol"
  },
  {
    id: 5,
    name: "Camisola Golden State Warriors",
    price: "€79.99",
    image: "https://readdy.ai/api/search-image?query=Golden%20State%20Warriors%20blue%20and%20yellow%20basketball%20jersey%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20professional%20sports%20merchandise%20photography%2C%20high%20quality%20product%20shot&width=400&height=400&seq=warriors&orientation=squarish",
    category: "NBA"
  }
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Mais Vendidas</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-gray-600"></i>
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-gray-600"></i>
          </button>
        </div>
      </div>

      <div className="relative h-96">
        <div className="flex transition-transform duration-500 ease-in-out h-full"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 p-6">
              <div className="flex items-center space-x-6 h-full">
                <div className="flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{product.price}</p>
                  <div className="flex space-x-3">
                    <Link href={`/produto/${product.id}`} className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                      Ver Produto
                    </Link>
                    <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}