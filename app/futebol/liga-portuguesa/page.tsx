
'use client';

import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import { useState } from 'react';

const teams = [
  { id: 1, name: 'SL Benfica', price: 79.99, image: "https://readdy.ai/api/search-image?query=SL%20Benfica%20red%20home%20jersey%202024%20official%20soccer%20shirt%20with%20eagle%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot%20with%20soft%20lighting&width=300&height=300&seq=benficaliga&orientation=squarish" },
  { id: 2, name: 'FC Porto', price: 79.99, image: "https://readdy.ai/api/search-image?query=FC%20Porto%20blue%20and%20white%20home%20jersey%202024%20official%20soccer%20shirt%20with%20dragon%20logo%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=300&height=300&seq=portoliga&orientation=squarish" },
  { id: 3, name: 'Sporting CP', price: 79.99, image: "https://readdy.ai/api/search-image?query=Sporting%20CP%20green%20home%20jersey%202024%20official%20soccer%20shirt%20with%20lion%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot&width=300&height=300&seq=sportingliga&orientation=squarish" },
  { id: 4, name: 'SC Braga', price: 69.99, image: "https://readdy.ai/api/search-image?query=SC%20Braga%20red%20home%20jersey%202024%20official%20soccer%20shirt%20with%20club%20logo%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=300&height=300&seq=bragaliga&orientation=squarish" },
  { id: 5, name: 'Vitória SC', price: 59.99, image: "https://readdy.ai/api/search-image?query=Vitoria%20SC%20white%20home%20jersey%202024%20official%20soccer%20shirt%20with%20club%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot&width=300&height=300&seq=vitoriasc&orientation=squarish" },
  { id: 6, name: 'Boavista FC', price: 59.99, image: "https://readdy.ai/api/search-image?query=Boavista%20FC%20black%20and%20white%20striped%20home%20jersey%202024%20official%20soccer%20shirt%20with%20club%20logo%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography&width=300&height=300&seq=boavista&orientation=squarish" }
];

export default function LigaPortuguesa() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative h-64 bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Portuguese%20football%20stadium%20with%20green%20field%20and%20red%20seats%2C%20modern%20soccer%20venue%20atmosphere%20with%20Portuguese%20Liga%20branding%2C%20professional%20sports%20photography%20with%20dynamic%20lighting&width=1200&height=400&seq=ligaportuguesahero&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">Liga Portuguesa</h1>
            <p className="text-xl">Camisolas oficiais dos clubes portugueses</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Equipas Disponíveis</h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md pr-8">
              <option>Ordenar por</option>
              <option>Preço: Menor para Maior</option>
              <option>Preço: Maior para Menor</option>
              <option>Nome A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div key={team.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link href={`/produto/${team.id}`}>
                <div className="h-64 bg-gray-100 flex items-center justify-center cursor-pointer">
                  <img 
                    src={team.image} 
                    alt={team.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/produto/${team.id}`}>
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">{team.name}</h3>
                </Link>
                <p className="text-2xl font-bold text-blue-600 mb-4">€{team.price}</p>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tamanho:</label>
                  <div className="flex space-x-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
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
                  <Link href={`/produto/${team.id}`} className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center cursor-pointer whitespace-nowrap">
                    Ver Detalhes
                  </Link>
                  <button
                    onClick={() => addToCart(team.id)}
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
          <Link href="/futebol" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap">
            ← Voltar ao Futebol
          </Link>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}
