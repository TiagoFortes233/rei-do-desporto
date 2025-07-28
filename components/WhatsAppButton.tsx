'use client';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '351912345678';
    const message = 'Olá! Preciso de ajuda com a minha compra.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors z-40 cursor-pointer"
      title="Contactar via WhatsApp"
    >
      <i className="ri-whatsapp-fill text-xl"></i>
    </button>
  );
}