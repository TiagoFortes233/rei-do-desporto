'use client';

import Header from '@/components/Header';
import { useState } from 'react';

const mockOrders = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-15',
    customerName: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '+351 912 345 678',
    items: [
      { name: 'Camisola SL Benfica 2024', size: 'M', quantity: 1, price: 79.99 },
      { name: 'Personalização (SILVA 10)', quantity: 1, price: 20.00 }
    ],
    total: 99.99,
    status: 'pendente',
    paymentMethod: 'MBWay',
    address: 'Rua das Flores, 123, 1000-001 Lisboa'
  },
  {
    id: 'ORD-2024-002',
    date: '2024-01-15',
    customerName: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+351 918 765 432',
    items: [
      { name: 'Camisola Lakers #23 LeBron', size: 'L', quantity: 1, price: 89.99 },
      { name: 'Badge Champions League', quantity: 1, price: 20.00 }
    ],
    total: 109.99,
    status: 'processando',
    paymentMethod: 'Cartão de Crédito',
    address: 'Av. da Liberdade, 456, 4000-001 Porto'
  },
  {
    id: 'ORD-2024-003',
    date: '2024-01-14',
    customerName: 'Carlos Pereira',
    email: 'carlos.pereira@email.com',
    phone: '+351 924 567 890',
    items: [
      { name: 'Camisola Real Madrid 2024', size: 'XL', quantity: 2, price: 89.99 }
    ],
    total: 179.98,
    status: 'enviado',
    paymentMethod: 'Transferência',
    address: 'Rua Central, 789, 3000-001 Coimbra',
    trackingCode: 'PT123456789'
  },
  {
    id: 'ORD-2024-004',
    date: '2024-01-14',
    customerName: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '+351 933 456 789',
    items: [
      { name: 'Chuteiras Nike Phantom', size: '42', quantity: 1, price: 149.99 }
    ],
    total: 149.99,
    status: 'entregue',
    paymentMethod: 'MBWay',
    address: 'Rua do Comércio, 321, 2000-001 Santarém'
  }
];

export default function AdminEncomendas() {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState('todas');

  const statusColors = {
    pendente: 'bg-yellow-100 text-yellow-800',
    processando: 'bg-blue-100 text-blue-800',
    enviado: 'bg-green-100 text-green-800',
    entregue: 'bg-gray-100 text-gray-800',
    cancelado: 'bg-red-100 text-red-800'
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = filterStatus === 'todas' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Gestão de Encomendas</h1>
          <p className="text-blue-100 mt-2">Acompanhe todas as encomendas dos seus clientes</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por Status:
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="todas">Todas as Encomendas</option>
                <option value="pendente">Pendentes</option>
                <option value="processando">Processando</option>
                <option value="enviado">Enviadas</option>
                <option value="entregue">Entregues</option>
                <option value="cancelado">Canceladas</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-4 ml-auto">
              <div className="text-sm text-gray-600">
                Total: <span className="font-semibold">{filteredOrders.length}</span> encomendas
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-download-line mr-2"></i>
                Exportar
              </button>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Encomenda
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">{order.paymentMethod}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString('pt-PT')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      €{order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[order.status as keyof typeof statusColors]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-blue-600 hover:text-blue-700 cursor-pointer"
                        >
                          <i className="ri-eye-line"></i>
                        </button>
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="text-sm border border-gray-300 rounded px-2 py-1 pr-8"
                        >
                          <option value="pendente">Pendente</option>
                          <option value="processando">Processando</option>
                          <option value="enviado">Enviado</option>
                          <option value="entregue">Entregue</option>
                          <option value="cancelado">Cancelado</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Detalhes da Encomenda {selectedOrder.id}
                </h2>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {/* Customer Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Informações do Cliente</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Nome:</p>
                    <p className="font-medium">{selectedOrder.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email:</p>
                    <p className="font-medium">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telefone:</p>
                    <p className="font-medium">{selectedOrder.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Método de Pagamento:</p>
                    <p className="font-medium">{selectedOrder.paymentMethod}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">Morada de Entrega:</p>
                  <p className="font-medium">{selectedOrder.address}</p>
                </div>
                {selectedOrder.trackingCode && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">Código de Rastreamento:</p>
                    <p className="font-medium text-blue-600">{selectedOrder.trackingCode}</p>
                  </div>
                )}
              </div>

              {/* Items */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Itens da Encomenda</h3>
                <div className="space-y-3">
                  {selectedOrder.items.map((item: any, index: number) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        {item.size && <p className="text-sm text-gray-600">Tamanho: {item.size}</p>}
                        <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                      </div>
                      <p className="font-medium">€{item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span>€{selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-mail-line mr-2"></i>
                  Enviar Email
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-printer-line mr-2"></i>
                  Imprimir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}