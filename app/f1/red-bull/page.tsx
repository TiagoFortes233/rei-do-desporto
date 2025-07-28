'use client';

import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useState } from 'react';

const merchandise = [
  { id: 8, name: 'Camisola Red Bull Racing 2024', price: 69.99, type: 'Camisola', image: "https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20team%20shirt%202024%20dark%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography%2C%20professional%20product%20shot&width=300&height=300&seq=rbrcamisola&orientation=squarish" },
  { id: 21, name: 'Polo Red Bull Racing', price: 59.99, type: 'Polo', image: "https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20polo%20shirt%20navy%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography%2C%20professional%20product%20display&width=300&height=300&seq=rbrpolo&orientation=squarish" },
  { id: 22, name: 'Boné Red Bull Racing', price: 39.99, type: 'Boné', image: "https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20cap%20navy%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20accessories%20photography%2C%20professional%20product%20shot&width=300&height=300&seq=rbrcap&orientation=squarish" },
  { id: 23, name: 'Hoodie Red Bull Racing', price: 89.99, type: 'Hoodie', image: "https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20hoodie%20dark%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography%2C%20professional%20product%20display&width=300&height=300&seq=rbrhoodie&orientation=squarish" },
  { id: 24, name: 'Camisola Max Verstappen', price: 74.99, type: 'Camisola', image: "https://readdy.ai/api/search-image?query=Max%20Verstappen%20Red%20Bull%20Racing%20Formula%201%20driver%20shirt%20with%20number%201%20dark%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography&width=300&height=300&seq=verstappen&orientation=squarish" },
  { id: 25, name: 'Camisola Sergio Pérez', price: 74.99, type: 'Camisola', image: "https://readdy.ai/api/search-image?query=Sergio%20Perez%20Red%20Bull%20Racing%20Formula%201%20driver%20shirt%20with%20number%2011%20dark%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography&width=300&height=300&seq=perez&orientation=squarish" }
];

export default function RedBull() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative h-64 bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20garage%20with%20RB19%20car%2C%20modern%20F1%20pit%20area%20with%20red%20bull%20branding%2C%20professional%20motorsport%20photography%20with%20dynamic%20lighting%20and%20racing%20atmosphere&width=1200&height=400&seq=redbullgarage&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Red Bull Racing</h1>
            <p className="text-xl">Merchandising oficial da equipa campeã mundial</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Produtos Disponíveis</h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md pr-8">
              <option>Filtrar por Tipo</option>
              <option>Camisola</option>
              <option>Polo</option>
              <option>Hoodie</option>
              <option>Boné</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md pr-8">
              <option>Ordenar por</option>
              <option>Preço: Menor para Maior</option>
              <option>Preço: Maior para Menor</option>
              <option>Nome A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchandise.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/produto/${item.id}`}>
                <div className="h-64 bg-gray-100 flex items-center justify-center cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Link href={`/produto/${item.id}`}>
                    <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">{item.name}</h3>
                  </Link>
                  <span className={`text-sm px-2 py-1 rounded ${ 
                    item.type === 'Camisola' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'Polo' ? 'bg-green-100 text-green-800' :
                    item.type === 'Hoodie' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.type}
                  </span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">€{item.price}</p>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tamanho:</label>
                  <div className="flex space-x-2">
                    {item.type === 'Boné' ? (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">Único</span>
                    ) : (
                      ['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
                      ))
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Link href={`/produto/${item.id}`} className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center cursor-pointer whitespace-nowrap">
                    Ver Detalhes
                  </Link>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/f1" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
            ← Voltar à F1
          </Link>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}