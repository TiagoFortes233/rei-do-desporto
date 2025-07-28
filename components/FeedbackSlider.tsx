'use client';

import { useState, useEffect } from 'react';

const feedbacks = [
  {
    id: 1,
    name: "João Silva",
    rating: 5,
    comment: "Excelente qualidade! A camisola do Benfica chegou rapidamente e é exatamente como na foto."
  },
  {
    id: 2,
    name: "Maria Santos",
    rating: 5,
    comment: "Adorei a camisola do Lakers! Material de primeira qualidade e entrega super rápida."
  },
  {
    id: 3,
    name: "Pedro Costa",
    rating: 4,
    comment: "Muito satisfeito com a compra. A camisola da Ferrari F1 é perfeita para os fãs!"
  },
  {
    id: 4,
    name: "Ana Rodrigues",
    rating: 5,
    comment: "Serviço impecável! Já é a terceira vez que compro e sempre com a mesma qualidade."
  },
  {
    id: 5,
    name: "Carlos Ferreira",
    rating: 5,
    comment: "Recomendo! A camisola do Real Madrid é igual à original e o preço é excelente."
  }
];

export default function FeedbackSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`ri-star-${index < rating ? 'fill' : 'line'} text-yellow-400`}
      ></i>
    ));
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-40">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800">Feedback dos Clientes</h3>
        <div className="flex space-x-1">
          {renderStars(feedbacks[currentIndex].rating)}
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        "{feedbacks[currentIndex].comment}"
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">- {feedbacks[currentIndex].name}</span>
        <div className="flex space-x-1">
          {feedbacks.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}