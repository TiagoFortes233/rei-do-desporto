'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

const products = {
  '1': {
    name: 'SL Benfica 2024',
    price: 79.99,
    category: 'Liga Portuguesa',
    image: "https://readdy.ai/api/search-image?query=SL%20Benfica%20red%20home%20jersey%202024%20official%20soccer%20shirt%20with%20eagle%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot%20with%20soft%20lighting&width=600&height=600&seq=benficadetail&orientation=squarish",
    backLink: '/futebol/liga-portuguesa'
  },
  '2': {
    name: 'FC Porto 2024',
    price: 79.99,
    category: 'Liga Portuguesa',
    image: "https://readdy.ai/api/search-image?query=FC%20Porto%20blue%20and%20white%20home%20jersey%202024%20official%20soccer%20shirt%20with%20dragon%20logo%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=600&height=600&seq=portodetail&orientation=squarish",
    backLink: '/futebol/liga-portuguesa'
  },
  '3': {
    name: 'Sporting CP 2024',
    price: 79.99,
    category: 'Liga Portuguesa',
    image: "https://readdy.ai/api/search-image?query=Sporting%20CP%20green%20home%20jersey%202024%20official%20soccer%20shirt%20with%20lion%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot&width=600&height=600&seq=sportingdetail&orientation=squarish",
    backLink: '/futebol/liga-portuguesa'
  },
  '4': {
    name: 'Real Madrid 2024',
    price: 89.99,
    category: 'Liga Espanhola',
    image: "https://readdy.ai/api/search-image?query=Real%20Madrid%20white%20home%20jersey%202024%20official%20soccer%20shirt%20with%20crown%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot%20with%20soft%20lighting&width=600&height=600&seq=realmadriddetail&orientation=squarish",
    backLink: '/futebol/liga-espanhola'
  },
  '5': {
    name: 'FC Barcelona 2024',
    price: 89.99,
    category: 'Liga Espanhola',
    image: "https://readdy.ai/api/search-image?query=FC%20Barcelona%20blue%20and%20red%20home%20jersey%202024%20official%20soccer%20shirt%20with%20club%20logo%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=600&height=600&seq=barcelonadetail&orientation=squarish",
    backLink: '/futebol/liga-espanhola'
  },
  '6': {
    name: 'LeBron James #23',
    price: 89.99,
    category: 'Lakers',
    image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20home%20jersey%20number%2023%20LeBron%20James%20purple%20and%20gold%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=600&height=600&seq=lebronjamesdetail&orientation=squarish",
    backLink: '/nba/lakers'
  },
  '7': {
    name: 'Anthony Davis #3',
    price: 89.99,
    category: 'Lakers',
    image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20home%20jersey%20number%203%20Anthony%20Davis%20purple%20and%20gold%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=600&height=600&seq=anthonydavisdetail&orientation=squarish",
    backLink: '/nba/lakers'
  },
  '8': {
    name: 'Camisola Red Bull Racing 2024',
    price: 69.99,
    category: 'Red Bull Racing',
    image: "https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20team%20shirt%202024%20dark%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography%2C%20professional%20product%20shot&width=600&height=600&seq=rbrcamisoladetail&orientation=squarish",
    backLink: '/f1/red-bull'
  },
  '9': {
    name: 'Chuteiras Nike Phantom',
    price: 149.99,
    category: 'Calçado de Futebol',
    image: "https://readdy.ai/api/search-image?query=Nike%20Phantom%20soccer%20cleats%20football%20boots%20black%20and%20white%20professional%20sports%20footwear%20on%20clean%20white%20background%2C%20premium%20athletic%20shoe%20photography%2C%20professional%20product%20display&width=600&height=600&seq=nikephantomdetail&orientation=squarish",
    backLink: '/calcado/futebol'
  },
  '10': {
    name: 'Fato Treino Nike Academy',
    price: 89.99,
    category: 'Fato de Treino',
    image: "https://readdy.ai/api/search-image?query=Nike%20Academy%20tracksuit%20training%20set%20navy%20blue%20and%20white%20professional%20sports%20apparel%20on%20clean%20white%20background%2C%20premium%20athletic%20wear%20photography%2C%20professional%20product%20display&width=600&height=600&seq=nikeacademydetail&orientation=squarish",
    backLink: '/fato-treino/futebol'
  }
};

export default function ProductDetail({ productId }: { productId: string }) {
  const product = products[productId as keyof typeof products];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Voltar à página inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedBadge, setSelectedBadge] = useState('Sem Badge');
  const [personalization, setPersonalization] = useState({
    name: '',
    number: ''
  });
  const [showPersonalization, setShowPersonalization] = useState(false);

  const badgeOptions = [
    'Sem Badge',
    'Liga Portuguesa (+€15)',
    'Liga Espanhola (+€15)',
    'Champions League (+€20)',
    'Europa League (+€15)',
    'Mundial (+€25)'
  ];

  const calculatePrice = () => {
    let price = product.price;
    
    if (selectedBadge.includes('+€15')) price += 15;
    if (selectedBadge.includes('+€20')) price += 20;
    if (selectedBadge.includes('+€25')) price += 25;
    
    if (showPersonalization && (personalization.name || personalization.number)) {
      price += 20;
    }
    
    return price;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href={product.backLink} className="text-blue-600 hover:text-blue-700 flex items-center">
            <i className="ri-arrow-left-line mr-2"></i>
            Voltar
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="aspect-square bg-gray-100 rounded-lg mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square bg-gray-100 rounded-md">
                <img 
                  src={product.image} 
                  alt="Vista 1"
                  className="w-full h-full object-cover rounded-md opacity-50"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-md">
                <img 
                  src={product.image} 
                  alt="Vista 2"
                  className="w-full h-full object-cover rounded-md opacity-50"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-md">
                <img 
                  src={product.image} 
                  alt="Vista 3"
                  className="w-full h-full object-cover rounded-md opacity-50"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-md">
                <img 
                  src={product.image} 
                  alt="Vista 4"
                  className="w-full h-full object-cover rounded-md opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <span className="text-sm text-gray-500">{product.category}</span>
              <h1 className="text-3xl font-bold text-gray-800 mt-1">{product.name}</h1>
            </div>

            <div className="mb-6">
              <p className="text-4xl font-bold text-blue-600">€{calculatePrice().toFixed(2)}</p>
              {calculatePrice() > product.price && (
                <p className="text-sm text-gray-500 line-through">€{product.price.toFixed(2)}</p>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">TAMANHO</label>
                <div className="flex space-x-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium ${
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">BADGE</label>
                <div className="grid grid-cols-2 gap-2">
                  {badgeOptions.map((badge) => (
                    <button
                      key={badge}
                      onClick={() => setSelectedBadge(badge)}
                      className={`px-3 py-2 border rounded-md text-sm text-left ${
                        selectedBadge === badge 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      } cursor-pointer whitespace-nowrap`}
                    >
                      {badge}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">PERSONALIZAÇÃO</label>
                  <button
                    onClick={() => setShowPersonalization(!showPersonalization)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      showPersonalization 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } cursor-pointer whitespace-nowrap`}
                  >
                    {showPersonalization ? 'Remover (+€20)' : 'Adicionar (+€20)'}
                  </button>
                </div>
                
                {showPersonalization && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Nome</label>
                      <input
                        type="text"
                        value={personalization.name}
                        onChange={(e) => setPersonalization({...personalization, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ex: RONALDO"
                        maxLength={12}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Número</label>
                      <input
                        type="number"
                        value={personalization.number}
                        onChange={(e) => setPersonalization({...personalization, number: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ex: 7"
                        min="1"
                        max="99"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold cursor-pointer whitespace-nowrap">
                Adicionar ao Carrinho
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors text-lg font-semibold cursor-pointer whitespace-nowrap">
                Comprar Agora
              </button>
            </div>

            <div className="mt-6 border-t pt-6">
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <i className="ri-truck-line mr-2"></i>
                  Envio grátis acima de €50
                </div>
                <div className="flex items-center">
                  <i className="ri-shield-check-line mr-2"></i>
                  Garantia oficial
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Descrição do Produto</h2>
          <div className="prose text-gray-600">
            <p>Camisola oficial {product.name} da época 2024. Fabricada com tecnologia Dri-FIT que mantém o corpo seco e confortável durante toda a atividade. Material de alta qualidade com acabamentos premium.</p>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Características:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>100% Poliéster reciclado</li>
              <li>Tecnologia Dri-FIT</li>
              <li>Corte atlético</li>
              <li>Logos bordados</li>
              <li>Aprovado oficialmente</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Cuidados:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Lavar à máquina a 30°C</li>
              <li>Não usar lixívia</li>
              <li>Secar na horizontal</li>
              <li>Passar a ferro em temperatura baixa</li>
            </ul>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
}