'use client';

import Header from '@/components/Header';
import FeedbackSlider from '@/components/FeedbackSlider';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      alert('Login realizado com sucesso!');
    } else {
      // Handle registration
      if (formData.password !== formData.confirmPassword) {
        alert('As passwords não coincidem!');
        return;
      }
      alert('Conta criada com sucesso!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Toggle Buttons */}
            <div className="flex">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-6 text-center font-medium transition-colors cursor-pointer ${
                  isLogin 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Iniciar Sessão
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-6 text-center font-medium transition-colors cursor-pointer ${
                  !isLogin 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Criar Conta
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required={!isLogin}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      required={!isLogin}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isLogin ? 'Iniciar Sessão' : 'Criar Conta'}
                </button>
              </form>

              {isLogin && (
                <div className="mt-4 text-center">
                  <Link href="/recuperar-password" className="text-blue-600 hover:text-blue-700 text-sm">
                    Esqueceu-se da password?
                  </Link>
                </div>
              )}

              {/* Social Login */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou continue com</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                    <i className="ri-google-fill"></i>
                    <span>Google</span>
                  </button>
                  <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                    <i className="ri-facebook-fill"></i>
                    <span>Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Benefícios de ter conta</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-check-line text-green-500"></i>
                <span className="text-sm text-gray-700">Acompanhe os seus pedidos</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-check-line text-green-500"></i>
                <span className="text-sm text-gray-700">Guarde os seus produtos favoritos</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-check-line text-green-500"></i>
                <span className="text-sm text-gray-700">Checkout mais rápido</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-check-line text-green-500"></i>
                <span className="text-sm text-gray-700">Ofertas exclusivas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedbackSlider />
      <WhatsAppButton />
    </div>
  );
}