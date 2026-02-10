import React from 'react';
import { Plus, Search, Edit2, Trash2, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const categoriesData = [
  { id: '#001', name: 'حقائب يد', description: 'تشكيلة واسعة من الحقائب النسائية', status: 'active', image: '👜' },
  { id: '#002', name: 'مجوهرات', description: 'قلادات وأقراط فاخرة', status: 'active', image: '📿' },
  { id: '#003', name: 'أوشحة', description: 'أوشحة حريرية وصوفية', status: 'draft', image: '🧣' },
  { id: '#004', name: 'ساعات', description: 'ساعات كلاسيكية ورياضية', status: 'active', image: '⌚' },
];

const Categories = () => {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">إدارة الفئات</h2>
        <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
          <Plus size={20} />
          <span>إضافة فئة جديدة</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f8fafc] border-b border-gray-100">
              <tr>
                <th className="py-4 px-6 text-right text-gray-500 font-medium text-sm">الرقم التسلسلي</th>
                <th className="py-4 px-6 text-right text-gray-500 font-medium text-sm">صورة الفئة</th>
                <th className="py-4 px-6 text-right text-gray-500 font-medium text-sm">اسم الفئة</th>
                <th className="py-4 px-6 text-right text-gray-500 font-medium text-sm">الوصف</th>
                <th className="py-4 px-6 text-center text-gray-500 font-medium text-sm">الحالة</th>
                <th className="py-4 px-6 text-center text-gray-500 font-medium text-sm">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {categoriesData.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 px-6 text-gray-400 font-medium">{category.id}</td>
                  <td className="py-4 px-6">
                    <div className="w-12 h-12 bg-[#f1f5f9] rounded-xl flex items-center justify-center text-2xl border border-gray-200">
                      {category.image}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-gray-800">{category.name}</td>
                  <td className="py-4 px-6 text-gray-500 text-sm">{category.description}</td>
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        category.status === 'active'
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {category.status === 'active' ? 'نشط' : 'مسودة'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2 opacity-100 transition-opacity">
                      <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                       <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-500">عرض 1-4 من أصل 12 فئة</span>
            <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 disabled:opacity-50 text-sm">السابق</button>
                <button className="w-8 h-8 flex items-center justify-center bg-[#3b82f6] text-white rounded-lg text-sm font-bold shadow-md shadow-blue-500/20">1</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-600 rounded-lg text-sm">2</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 text-gray-600 rounded-lg text-sm">3</button>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm">التالي</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;