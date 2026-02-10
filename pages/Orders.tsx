import React from 'react';
import { Eye, Printer } from 'lucide-react';
import { Order } from '../types';

const orders: Order[] = [
  { id: 'ORD-7742', customer: 'محمد أحمد', date: '12 أكتوبر 2023', total: '1,250', status: 'completed' },
  { id: 'ORD-7741', customer: 'سارة خالد', date: '12 أكتوبر 2023', total: '450', status: 'pending' },
  { id: 'ORD-7740', customer: 'فهد العتيبي', date: '11 أكتوبر 2023', total: '890', status: 'shipping' },
  { id: 'ORD-7739', customer: 'نورة السالم', date: '10 أكتوبر 2023', total: '2,100', status: 'completed' },
  { id: 'ORD-7738', customer: 'عبدالله عمر', date: '09 أكتوبر 2023', total: '150', status: 'cancelled' },
];

const statusStyles = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  shipping: 'bg-blue-100 text-blue-700',
  cancelled: 'bg-red-100 text-red-700',
};

const statusLabels = {
  completed: 'مكتمل',
  pending: 'قيد التنفيذ',
  shipping: 'تم الشحن',
  cancelled: 'ملغي',
};

const Orders = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-bold text-lg text-gray-800">أحدث الطلبات</h3>
        <div className="flex gap-2">
           <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"><Printer size={20}/></button>
           <button className="text-sm text-[#0e4b3e] font-bold">عرض الكل</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="py-4 px-6 text-right font-medium">رقم الطلب</th>
              <th className="py-4 px-6 text-right font-medium">العميل</th>
              <th className="py-4 px-6 text-right font-medium">التاريخ</th>
              <th className="py-4 px-6 text-right font-medium">المبلغ</th>
              <th className="py-4 px-6 text-center font-medium">الحالة</th>
              <th className="py-4 px-6 text-center font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 text-gray-800 font-medium">#{order.id}</td>
                <td className="py-4 px-6 text-gray-600">{order.customer}</td>
                <td className="py-4 px-6 text-gray-500 text-sm">{order.date}</td>
                <td className="py-4 px-6 text-gray-800 font-bold">{order.total} ر.س</td>
                <td className="py-4 px-6 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyles[order.status]}`}>
                    {statusLabels[order.status]}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <button className="p-2 text-gray-400 hover:text-[#0e4b3e] hover:bg-green-50 rounded-full transition-colors">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;