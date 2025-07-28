'use client';

import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useState } from 'react';

const jerseys = [
  { id: 6, name: 'LeBron James #23', price: 89.99, type: 'Casa', image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20home%20jersey%20number%2023%20LeBron%20James%20purple%20and%20gold%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=300&height=300&seq=lebronjames&orientation=squarish" },
  { id: 7, name: 'Anthony Davis #3', price: 89.99, type: 'Casa', image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20home%20jersey%20number%203%20Anthony%20Davis%20purple%20and%20gold%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=300&height=300&seq=anthonydavis&orientation=squarish" },
  { id: 15, name: 'LeBron James #23', price: 89.99, type: 'Visitante', image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20away%20jersey%20number%2023%20LeBron%20James%20white%20with%20purple%20and%20gold%20details%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography&width=300&height=300&seq=lebronjamesaway&orientation=squarish" },
  { id: 16, name: 'Russell Westbrook #0', price: 84.99, type: 'Casa', image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20home%20jersey%20number%200%20Russell%20Westbrook%20purple%20and%20gold%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=300&height=300&seq=westbrook&orientation=squarish" },
  { id: 17, name: 'Kobe Bryant #24', price: 99.99, type: 'Retro', image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20vintage%20jersey%20number%2024%20Kobe%20Bryant%20purple%20and%20gold%20retro%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20classic%20basketball%20jersey&width=300&height=300&seq=kobebryant&orientation=squarish" },
  { id: 18, name: 'Magic Johnson #32', price: 94.99, type: 'Retro', image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20vintage%20jersey%20number%2032%20Magic%20Johnson%20purple%20and%20gold%20retro%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20classic%20basketball%20jersey&width=300&height=300&seq=magicjohnson&orientation=squarish" }
];

export default function Lakers() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative h-64 bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20basketball%20arena%20with%20purple%20and%20gold%20colors%2C%20NBA%20stadium%20atmosphere%20with%20Lakers%20branding%20and%20championship%20banners%2C%20professional%20sports%20photography%20with%20dynamic%20lighting&width=1200&height=400&seq=lakersarena&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Los Angeles Lakers</h1>
            <p className="text-xl">Camisolas oficiais da equipa mais icónica da NBA</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Camisolas Disponíveis</h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md pr-8">
              <option>Filtrar por Tipo</option>
              <option>Casa</option>
              <option>Visitante</option>
              <option>Retro</option>
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
          {jerseys.map((jersey) => (
            <div key={jersey.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/produto/${jersey.id}`}>
                <div className="h-64 bg-gray-100 flex items-center justify-center cursor-pointer">
                  <img 
                    src={jersey.image} 
                    alt={jersey.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Link href={`/produto/${jersey.id}`}>
                    <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">{jersey.name}</h3>
                  </Link>
                  <span className={`text-sm px-2 py-1 rounded ${
                    jersey.type === 'Casa' ? 'bg-purple-100 text-purple-800' :
                    jersey.type === 'Visitante' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {jersey.type}
                  </span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-4">€{jersey.price}</p>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tamanho:</label>
                  <div className="flex space-x-2">
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

                <div className="space-y-2">
                  <Link href={`/produto/${jersey.id}`} className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center cursor-pointer whitespace-nowrap">
                    Ver Detalhes
                  </Link>
                  <button
                    onClick={() => addToCart(jersey.id)}
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
          <Link href="/nba" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
            ← Voltar à NBA
          </Link>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
