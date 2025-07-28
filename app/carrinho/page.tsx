'use client';

import Header from '@/components/Header';
import FeedbackSlider from '@/components/FeedbackSlider';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState } from 'react';
import Link from 'next/link';

const initialCartItems = [
  {
    id: 1,
    name: "Camisola SL Benfica 2024",
    price: 79.99,
    quantity: 1,
    size: "M",
    image: "https://readdy.ai/api/search-image?query=SL%20Benfica%20red%20home%20jersey%202024%20official%20soccer%20shirt%20with%20eagle%20logo%20on%20clean%20white%20background%2C%20high%20quality%20sports%20merchandise%20photography%2C%20professional%20product%20shot%20with%20soft%20lighting&width=200&height=200&seq=benfica2024cart&orientation=squarish"
  },
  {
    id: 2,
    name: "Camisola Lakers #23 LeBron",
    price: 89.99,
    quantity: 2,
    size: "L",
    image: "https://readdy.ai/api/search-image?query=Los%20Angeles%20Lakers%20purple%20and%20gold%20basketball%20jersey%20number%2023%20LeBron%20James%20official%20NBA%20uniform%20on%20clean%20white%20background%2C%20premium%20sports%20apparel%20photography%2C%20professional%20product%20display&width=200&height=200&seq=lakers23cart&orientation=squarish"
  },
  {
    id: 3,
    name: "Camisola Red Bull Racing F1",
    price: 69.99,
    quantity: 1,
    size: "S",
    image: "https://readdy.ai/api/search-image?query=Red%20Bull%20Racing%20Formula%201%20team%20shirt%20dark%20blue%20with%20red%20bull%20logo%20official%20F1%20merchandise%20on%20clean%20white%20background%2C%20motorsport%20apparel%20photography%2C%20professional%20product%20shot&width=200&height=200&seq=redbullf1cart&orientation=squarish"
  }
];

export default function Carrinho() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'desconto10') {
      setDiscount(10);
      alert('Cupão aplicado! 10% de desconto');
    } else if (couponCode.toLowerCase() === 'bemvindo') {
      setDiscount(15);
      alert('Cupão aplicado! 15% de desconto');
    } else {
      alert('Cupão inválido');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * (discount / 100);
  const shipping = subtotal > 100 ? 0 : 5.99;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Carrinho de Compras</h1>
          <p className="text-blue-100 mt-2">{cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'} no carrinho</p>
        </div>
      </section>

      {cartItems.length === 0 ? (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <i className="ri-shopping-cart-line text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Carrinho Vazio</h2>
            <p className="text-gray-600 mb-8">Não tem produtos no seu carrinho. Explore a nossa loja e adicione os seus produtos favoritos!</p>
            <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Continuar Compras
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold">Itens no Carrinho</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm">Tamanho: {item.size}</p>
                        <p className="text-blue-600 font-bold">€{item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer"
                        >
                          <i className="ri-add-line"></i>
                        </button>
                      </div>
                      <button
                        onClick={() => updateQuantity(item.id, 0)}
                        className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                      >
                        <i className="ri-delete-bin-line text-lg"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Resumo do Pedido</h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                    Código de Desconto
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Inserir código"
                    />
                    <button
                      onClick={applyCoupon}
                      className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">€{subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto ({discount}%):</span>
                      <span>-€{discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envio:</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'Grátis' : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>€{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Métodos de Pagamento</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-md border border-green-200">
                      <i className="ri-smartphone-line text-green-600"></i>
                      <span className="text-sm text-green-700 font-medium">MBWay</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 rounded-md border border-blue-200">
                      <i className="ri-bank-line text-blue-600"></i>
                      <span className="text-sm text-blue-700 font-medium">Transferência</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-2 bg-yellow-50 rounded-md border border-yellow-200">
                      <i className="ri-hand-coin-line text-yellow-600"></i>
                      <span className="text-sm text-yellow-700 font-medium">Dinheiro</span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout" className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-center block cursor-pointer whitespace-nowrap">
                  Finalizar Compra
                </Link>

                <Link href="/" className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors text-center block mt-3 cursor-pointer whitespace-nowrap">
                  Continuar Compras
                </Link>
              </div>

              {/* Security Info */}
              <div className="bg-green-50 rounded-lg p-4 mt-6">
                <div className="flex items-center space-x-2">
                  <i className="ri-shield-check-line text-green-600"></i>
                  <span className="text-sm text-green-800 font-medium">Compra Segura</span>
                </div>
                <p className="text-sm text-green-700 mt-1">Os seus dados estão protegidos com encriptação SSL</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <FeedbackSlider />
      <WhatsAppButton />
    </div>
  );
}
