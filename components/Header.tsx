
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <i className="ri-trophy-fill text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold text-gray-800">Rei do Desporto</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('futebol')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Futebol</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              {activeDropdown === 'futebol' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link href="/futebol/liga-portuguesa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Liga Portuguesa</Link>
                  <Link href="/futebol/liga-espanhola" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Liga Espanhola</Link>
                  <Link href="/futebol/liga-alema" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Liga Alemã</Link>
                  <Link href="/futebol/liga-francesa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Liga Francesa</Link>
                  <Link href="/futebol/liga-inglesa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Liga Inglesa</Link>
                  <Link href="/futebol/resto-mundo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resto do Mundo</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('nba')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>NBA</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              {activeDropdown === 'nba' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link href="/nba/lakers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lakers</Link>
                  <Link href="/nba/warriors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Warriors</Link>
                  <Link href="/nba/celtics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Celtics</Link>
                  <Link href="/nba/heat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Heat</Link>
                  <Link href="/nba/bulls" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bulls</Link>
                  <Link href="/nba/knicks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Knicks</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('f1')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>F1</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>
              {activeDropdown === 'f1' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto">
                  <Link href="/f1/red-bull" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Red Bull Racing</Link>
                  <Link href="/f1/mercedes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mercedes</Link>
                  <Link href="/f1/ferrari" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ferrari</Link>
                  <Link href="/f1/mclaren" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">McLaren</Link>
                  <Link href="/f1/aston-martin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Aston Martin</Link>
                  <Link href="/f1/alpine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alpine</Link>
                  <Link href="/f1/williams" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Williams</Link>
                  <Link href="/f1/alphatauri" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AlphaTauri</Link>
                  <Link href="/f1/alfa-romeo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alfa Romeo</Link>
                  <Link href="/f1/haas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Haas</Link>
                </div>
              )}
            </div>

            <Link href="/calcado" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors whitespace-nowrap">
              Calçado
            </Link>

            <Link href="/fato-treino" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors whitespace-nowrap">
              Fato de Treino
            </Link>

            <Link href="/suporte" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors whitespace-nowrap">
              Suporte
            </Link>

            <Link href="/admin/encomendas" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors whitespace-nowrap">
              Admin
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/carrinho" className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              <i className="ri-shopping-cart-line text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
