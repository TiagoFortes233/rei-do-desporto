
'use client';

import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useState } from 'react';

const shoes = [
  // Futebol
  { id: 1, name: 'Nike Mercurial Vapor 15', price: 179.99, brand: 'Nike', category: 'Futebol', image: "https://readdy.ai/api/search-image?query=Nike%20Mercurial%20Vapor%2015%20football%20boots%20bright%20orange%20with%20black%20details%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20modern%20soccer%20cleats%20product%20shot&width=300&height=300&seq=mercurial15&orientation=squarish" },
  { id: 2, name: 'Adidas Predator Accuracy', price: 159.99, brand: 'Adidas', category: 'Futebol', image: "https://readdy.ai/api/search-image?query=Adidas%20Predator%20Accuracy%20football%20boots%20red%20with%20black%20three%20stripes%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20soccer%20cleats%20product%20display&width=300&height=300&seq=predator&orientation=squarish" },
  { id: 3, name: 'Puma Future Ultimate', price: 149.99, brand: 'Puma', category: 'Futebol', image: "https://readdy.ai/api/search-image?query=Puma%20Future%20Ultimate%20football%20boots%20blue%20with%20white%20accents%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20soccer%20cleats%20product%20shot&width=300&height=300&seq=future&orientation=squarish" },
  
  // Basquetebol
  { id: 4, name: 'Nike Air Jordan 1 Mid', price: 119.99, brand: 'Nike', category: 'Basquetebol', image: "https://readdy.ai/api/search-image?query=Nike%20Air%20Jordan%201%20Mid%20basketball%20shoe%20black%20and%20red%20colorway%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20modern%20athletic%20sneaker%20product%20shot&width=300&height=300&seq=jordan1mid&orientation=squarish" },
  { id: 5, name: 'Adidas Dame 8', price: 109.99, brand: 'Adidas', category: 'Basquetebol', image: "https://readdy.ai/api/search-image?query=Adidas%20Dame%208%20basketball%20shoe%20white%20with%20blue%20details%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20athletic%20sneaker%20product%20display&width=300&height=300&seq=dame8&orientation=squarish" },
  { id: 6, name: 'Nike LeBron 20', price: 149.99, brand: 'Nike', category: 'Basquetebol', image: "https://readdy.ai/api/search-image?query=Nike%20LeBron%2020%20basketball%20shoe%20purple%20and%20gold%20colorway%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20premium%20athletic%20sneaker%20product%20shot&width=300&height=300&seq=lebron20&orientation=squarish" },
  
  // Running
  { id: 7, name: 'Nike Air Zoom Pegasus 40', price: 129.99, brand: 'Nike', category: 'Running', image: "https://readdy.ai/api/search-image?query=Nike%20Air%20Zoom%20Pegasus%2040%20running%20shoe%20white%20with%20blue%20accents%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20modern%20athletic%20sneaker%20product%20shot&width=300&height=300&seq=pegasus40&orientation=squarish" },
  { id: 8, name: 'Adidas Ultraboost 23', price: 149.99, brand: 'Adidas', category: 'Running', image: "https://readdy.ai/api/search-image?query=Adidas%20Ultraboost%2023%20running%20shoe%20black%20with%20white%20three%20stripes%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20athletic%20sneaker%20product%20display&width=300&height=300&seq=ultraboost&orientation=squarish" },
  { id: 9, name: 'Asics Gel-Kayano 30', price: 139.99, brand: 'Asics', category: 'Running', image: "https://readdy.ai/api/search-image?query=Asics%20Gel-Kayano%2030%20running%20shoe%20navy%20blue%20with%20silver%20details%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20premium%20athletic%20sneaker%20product%20shot&width=300&height=300&seq=kayano30&orientation=squarish" },
  
  // Fitness
  { id: 10, name: 'Nike Metcon 9', price: 119.99, brand: 'Nike', category: 'Fitness', image: "https://readdy.ai/api/search-image?query=Nike%20Metcon%209%20fitness%20training%20shoe%20black%20with%20white%20details%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20modern%20athletic%20sneaker%20product%20shot&width=300&height=300&seq=metcon9&orientation=squarish" },
  { id: 11, name: 'Adidas Adipower Weightlifting', price: 139.99, brand: 'Adidas', category: 'Fitness', image: "https://readdy.ai/api/search-image?query=Adidas%20Adipower%20weightlifting%20shoe%20white%20with%20black%20three%20stripes%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20athletic%20sneaker%20product%20display&width=300&height=300&seq=adipower&orientation=squarish" },
  { id: 12, name: 'Reebok Nano X3', price: 109.99, brand: 'Reebok', category: 'Fitness', image: "https://readdy.ai/api/search-image?query=Reebok%20Nano%20X3%20fitness%20training%20shoe%20blue%20with%20orange%20accents%2C%20professional%20sports%20footwear%20photography%20on%20clean%20white%20background%2C%20premium%20athletic%20sneaker%20product%20shot&width=300&height=300&seq=nanox3&orientation=squarish" }
];

export default function Calcado() {
  const [selectedSize, setSelectedSize] = useState('42');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const categories = ['Todos', 'Futebol', 'Basquetebol', 'Running', 'Fitness'];
  
  const filteredShoes = selectedCategory === 'Todos' 
    ? shoes 
    : shoes.filter(shoe => shoe.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative h-80 bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20sports%20footwear%20store%20with%20various%20athletic%20shoes%20displayed%20on%20clean%20shelves%2C%20professional%20retail%20photography%20with%20bright%20lighting%20and%20organized%20shoe%20displays&width=1200&height=500&seq=calcadohero&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Calçado Desportivo</h1>
            <p className="text-xl mb-6">Performance e conforto para todos os desportos</p>
            <p className="text-lg">Das melhores marcas mundiais</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Todo o Calçado</h2>
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
          {filteredShoes.map((shoe) => (
            <div key={shoe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img 
                  src={shoe.image} 
                  alt={shoe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{shoe.name}</h3>
                  <span className="text-sm text-gray-500">{shoe.brand}</span>
                </div>
                <p className="text-sm text-blue-600 mb-2">{shoe.category}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">€{shoe.price}</p>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tamanho:</label>
                  <div className="flex flex-wrap gap-2">
                    {['38', '39', '40', '41', '42', '43', '44', '45', '46'].map((size) => (
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
                  onClick={() => addToCart(shoe.id)}
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
            <h3 className="text-2xl font-bold mb-4">Porquê Escolher o Nosso Calçado?</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-footprint-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold mb-2">Conforto Superior</h4>
              <p className="text-gray-600">Tecnologia avançada para máximo conforto</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-thunder-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold mb-2">Performance</h4>
              <p className="text-gray-600">Otimizado para cada tipo de desporto</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold mb-2">Durabilidade</h4>
              <p className="text-gray-600">Materiais resistentes e duradouros</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-2xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold mb-2">Marcas Premium</h4>
              <p className="text-gray-600">Nike, Adidas, Puma e muito mais</p>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
