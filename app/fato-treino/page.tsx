
'use client';

import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useState } from 'react';

const tracksuits = [
  // Futebol
  { id: 1, name: 'Fato Treino Nike Academy', price: 79.99, brand: 'Nike', category: 'Futebol', image: "https://readdy.ai/api/search-image?query=Nike%20football%20training%20tracksuit%20navy%20blue%20with%20white%20details%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20modern%20athletic%20wear%20product%20shot&width=300&height=300&seq=nikeacademy&orientation=squarish" },
  { id: 2, name: 'Fato Treino Adidas Tiro 23', price: 74.99, brand: 'Adidas', category: 'Futebol', image: "https://readdy.ai/api/search-image?query=Adidas%20Tiro%2023%20football%20training%20tracksuit%20black%20with%20white%20three%20stripes%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20athletic%20wear%20product%20display&width=300&height=300&seq=tiro23&orientation=squarish" },
  { id: 3, name: 'Fato Treino Puma teamFINAL', price: 69.99, brand: 'Puma', category: 'Futebol', image: "https://readdy.ai/api/search-image?query=Puma%20teamFINAL%20football%20training%20tracksuit%20red%20with%20black%20accents%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20premium%20athletic%20wear%20product%20shot&width=300&height=300&seq=teamfinal&orientation=squarish" },
  
  // Basquetebol
  { id: 4, name: 'Fato Treino Nike Team', price: 94.99, brand: 'Nike', category: 'Basquetebol', image: "https://readdy.ai/api/search-image?query=Nike%20basketball%20training%20tracksuit%20black%20with%20orange%20details%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20modern%20athletic%20wear%20product%20shot&width=300&height=300&seq=nikebball&orientation=squarish" },
  { id: 5, name: 'Fato Treino Adidas Hoop', price: 89.99, brand: 'Adidas', category: 'Basquetebol', image: "https://readdy.ai/api/search-image?query=Adidas%20basketball%20training%20tracksuit%20navy%20blue%20with%20white%20three%20stripes%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20athletic%20wear%20product%20display&width=300&height=300&seq=adidashoop&orientation=squarish" },
  { id: 6, name: 'Fato Treino Jordan Flight', price: 119.99, brand: 'Jordan', category: 'Basquetebol', image: "https://readdy.ai/api/search-image?query=Jordan%20basketball%20training%20tracksuit%20red%20with%20black%20accents%20and%20jumpman%20logo%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20premium%20athletic%20wear%20product%20shot&width=300&height=300&seq=jordanflight&orientation=squarish" },
  
  // Running
  { id: 7, name: 'Fato Treino Nike Swift', price: 89.99, brand: 'Nike', category: 'Running', image: "https://readdy.ai/api/search-image?query=Nike%20Swift%20running%20tracksuit%20gray%20with%20neon%20green%20details%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20modern%20athletic%20wear%20product%20shot&width=300&height=300&seq=nikeswift&orientation=squarish" },
  { id: 8, name: 'Fato Treino Adidas Own the Run', price: 79.99, brand: 'Adidas', category: 'Running', image: "https://readdy.ai/api/search-image?query=Adidas%20Own%20the%20Run%20tracksuit%20blue%20with%20white%20three%20stripes%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20athletic%20wear%20product%20display&width=300&height=300&seq=owntherun&orientation=squarish" },
  { id: 9, name: 'Fato Treino Puma Run Favourite', price: 74.99, brand: 'Puma', category: 'Running', image: "https://readdy.ai/api/search-image?query=Puma%20Run%20Favourite%20tracksuit%20purple%20with%20silver%20accents%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20premium%20athletic%20wear%20product%20shot&width=300&height=300&seq=runfav&orientation=squarish" },
  
  // Fitness
  { id: 10, name: 'Fato Treino Nike Therma-FIT', price: 84.99, brand: 'Nike', category: 'Fitness', image: "https://readdy.ai/api/search-image?query=Nike%20fitness%20training%20tracksuit%20gray%20with%20black%20details%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20modern%20athletic%20wear%20product%20shot&width=300&height=300&seq=nikefitness&orientation=squarish" },
  { id: 11, name: 'Fato Treino Adidas Essentials', price: 74.99, brand: 'Adidas', category: 'Fitness', image: "https://readdy.ai/api/search-image?query=Adidas%20fitness%20training%20tracksuit%20navy%20with%20white%20three%20stripes%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20athletic%20wear%20product%20display&width=300&height=300&seq=essentials&orientation=squarish" },
  { id: 12, name: 'Fato Treino Under Armour Rival', price: 89.99, brand: 'Under Armour', category: 'Fitness', image: "https://readdy.ai/api/search-image?query=Under%20Armour%20fitness%20training%20tracksuit%20black%20with%20red%20accents%2C%20professional%20sports%20apparel%20photography%20on%20clean%20white%20background%2C%20premium%20athletic%20wear%20product%20shot&width=300&height=300&seq=rival&orientation=squarish" }
];

export default function FatoTreino() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const categories = ['Todos', 'Futebol', 'Basquetebol', 'Running', 'Fitness'];
  
  const filteredTracksuits = selectedCategory === 'Todos' 
    ? tracksuits 
    : tracksuits.filter(tracksuit => tracksuit.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20sports%20training%20facility%20with%20athletes%20wearing%20various%20training%20tracksuits%2C%20professional%20sports%20photography%20with%20dynamic%20lighting%20and%20equipment%20background&width=1200&height=500&seq=fatotreinohero&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Fatos de Treino</h1>
            <p className="text-xl mb-6">Equipamento profissional para todos os desportos</p>
            <p className="text-lg">Conforto, qualidade e performance em cada treino</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Todos os Fatos de Treino</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md pr-8"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTracksuits.map((tracksuit) => (
            <div key={tracksuit.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img 
                  src={tracksuit.image} 
                  alt={tracksuit.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{tracksuit.name}</h3>
                  <span className="text-sm text-gray-500">{tracksuit.brand}</span>
                </div>
                <p className="text-sm text-blue-600 mb-2">{tracksuit.category}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">€{tracksuit.price}</p>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tamanho:</label>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1 border rounded-md text-sm ${
                          selectedSize === size 
                            ? 'bg-blue-600 text-white border-blue-600' 
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        } cursor-pointer whitespace-nowrap`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(tracksuit.id)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Porquê Escolher os Nossos Fatos de Treino?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shirt-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold mb-2">Materiais Premium</h4>
              <p className="text-gray-600">Tecidos de alta qualidade com tecnologia anti-transpiração</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-speed-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold mb-2">Performance</h4>
              <p className="text-gray-600">Corte ergonómico para máxima liberdade de movimento</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold mb-2">Durabilidade</h4>
              <p className="text-gray-600">Resistentes ao desgaste e lavagens frequentes</p>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
