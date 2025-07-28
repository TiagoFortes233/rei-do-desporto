'use client';

import Header from '@/components/Header';
import ProductSlider from '@/components/ProductSlider';
import FeedbackSlider from '@/components/FeedbackSlider';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20sports%20merchandise%20store%20background%20with%20soccer%20jerseys%2C%20NBA%20uniforms%2C%20and%20Formula%201%20racing%20shirts%20displayed%20in%20a%20premium%20retail%20environment%2C%20professional%20photography%20with%20dynamic%20lighting%20and%20vibrant%20colors&width=1200&height=400&seq=herobanner&orientation=landscape')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Rei do Desporto</h1>
            <p className="text-xl mb-6">As melhores camisolas oficiais de futebol, NBA e F1. Qualidade garantida e entrega rápida em todo o país.</p>
            <Link href="/produtos" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Explorar Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Products Slider */}
      <section className="container mx-auto px-4 py-12">
        <ProductSlider />
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Categorias</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/futebol" className="group cursor-pointer">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Football%20soccer%20jerseys%20collection%20with%20various%20team%20colors%20and%20logos%20arranged%20in%20a%20modern%20sports%20store%20display%2C%20premium%20retail%20photography%20with%20bright%20lighting%20and%20clean%20background&width=400&height=300&seq=futebol&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Futebol</h3>
                <p className="text-gray-600">Camisolas oficiais das melhores ligas europeias</p>
              </div>
            </div>
          </Link>

          <Link href="/nba" className="group cursor-pointer">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=NBA%20basketball%20jerseys%20collection%20with%20famous%20team%20uniforms%20like%20Lakers%2C%20Warriors%2C%20Bulls%20displayed%20in%20professional%20sports%20merchandise%20store%2C%20high%20quality%20retail%20photography&width=400&height=300&seq=nba&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">NBA</h3>
                <p className="text-gray-600">Uniformes originais das equipas mais famosas</p>
              </div>
            </div>
          </Link>

          <Link href="/f1" className="group cursor-pointer">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Formula%201%20team%20shirts%20and%20racing%20merchandise%20with%20Red%20Bull%2C%20Ferrari%2C%20Mercedes%20logos%20displayed%20in%20premium%20motorsport%20store%2C%20professional%20product%20photography%20with%20racing%20theme&width=400&height=300&seq=f1&orientation=landscape')`
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">Fórmula 1</h3>
                <p className="text-gray-600">Merchandising oficial das 20 equipas do grid</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Entrega em 24-48h em todo o país</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Produtos oficiais com garantia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Atendimento sempre disponível</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-refresh-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trocas Fáceis</h3>
              <p className="text-gray-600">30 dias para troca sem complicações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Rei do Desporto</h3>
              <p className="text-gray-400">A sua loja de confiança para camisolas oficiais de desporto.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2">
                <li><Link href="/futebol" className="text-gray-400 hover:text-white">Futebol</Link></li>
                <li><Link href="/nba" className="text-gray-400 hover:text-white">NBA</Link></li>
                <li><Link href="/f1" className="text-gray-400 hover:text-white">Fórmula 1</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2">
                <li><Link href="/suporte" className="text-gray-400 hover:text-white">Centro de Ajuda</Link></li>
                <li><Link href="/contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
                <li><Link href="/trocas" className="text-gray-400 hover:text-white">Trocas e Devoluções</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Métodos de Pagamento</h4>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <i className="ri-visa-line text-white"></i>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <i className="ri-mastercard-line text-white"></i>
                </div>
                <div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center">
                  <i className="ri-paypal-line text-white"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rei do Desporto. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <FeedbackSlider />
      <WhatsAppButton />
    </div>
  );
}