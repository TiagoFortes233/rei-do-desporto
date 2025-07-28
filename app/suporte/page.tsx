
'use client';

import Header from '@/components/Header';
import FeedbackSlider from '@/components/FeedbackSlider';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState } from 'react';
import { sendSupportEmail } from '@/lib/emailConfig';

const faqData = [
  {
    id: 1,
    question: "Como posso saber se uma camisola é original?",
    answer: "Todas as nossas camisolas são 100% originais e vêm com etiquetas de autenticidade. Trabalhamos apenas com fornecedores oficiais das marcas."
  },
  {
    id: 2,
    question: "Qual é o prazo de entrega?",
    answer: "O prazo de entrega é de 24-48h para Portugal continental. Para ilhas, o prazo pode ser de 3-5 dias úteis."
  },
  {
    id: 3,
    question: "Posso trocar uma camisola se não me servir?",
    answer: "Sim! Tem 30 dias para efetuar trocas. A camisola deve estar em perfeitas condições com as etiquetas originais."
  },
  {
    id: 4,
    question: "Quais são os métodos de pagamento disponíveis?",
    answer: "Aceitamos cartões de crédito/débito (Visa, Mastercard), PayPal, MB Way e transferência bancária."
  },
  {
    id: 5,
    question: "Como posso rastrear o meu pedido?",
    answer: "Após o envio, receberá um email com o código de rastreamento. Pode acompanhar o estado da encomenda na nossa página de rastreamento."
  },
  {
    id: 6,
    question: "Existe um tamanho específico para crianças?",
    answer: "Sim! Temos tamanhos desde criança (6-16 anos) até adulto (XS-XXXL). Consulte a nossa tabela de tamanhos."
  },
  {
    id: 7,
    question: "Fazem personalização das camisolas?",
    answer: "Sim! Oferecemos personalização com nome e número por um custo adicional de €15. O prazo de entrega aumenta para 3-5 dias."
  },
  {
    id: 8,
    question: "Qual é a política de devoluções?",
    answer: "Tem 30 dias para devolução. O produto deve estar em perfeitas condições. O valor é reembolsado no prazo de 5-7 dias úteis."
  }
];

export default function Suporte() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendSupportEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Responderemos em breve.'
        });
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Erro ao enviar mensagem. Tente novamente.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Centro de Suporte</h1>
          <p className="text-xl">Estamos aqui para ajudar! Encontre respostas às suas dúvidas ou contacte-nos diretamente.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq) => (
            <div key={faq.id} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <i className={`ri-arrow-${openFaq === faq.id ? 'up' : 'down'}-s-line text-gray-600`}></i>
              </button>
              {openFaq === faq.id && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contacte-nos</h2>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-md ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                <div className="flex items-center">
                  <i className={`ri-${submitStatus.type === 'success' ? 'check' : 'error-warning'}-line mr-2`}></i>
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            <form id="suporte-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
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
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  maxLength={500}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva a sua questão ou problema..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.mensagem.length}/500
                </div>
              </div>
              <button
                type="submit"
                disabled={formData.mensagem.length > 500 || isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="ri-mail-send-line mr-2"></i>
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>

            {/* Configuration Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-md">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                <i className="ri-information-line mr-2"></i>
                Configuração de Email
              </h3>
              <p className="text-sm text-blue-700">
                Para configurar o envio automático de emails, consulte o ficheiro{' '}
                <code className="bg-blue-100 px-1 rounded mx-1">/lib/emailConfig.ts</code> com as instruções detalhadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <p className="text-gray-300">+351 912 345 678</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">suporte@reidodesporto.pt</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Horário</h3>
              <p className="text-gray-300">24/7 Suporte Online</p>
            </div>
          </div>
        </div>
      </section>

      <FeedbackSlider />
      <WhatsAppButton />
    </div>
  );
}
