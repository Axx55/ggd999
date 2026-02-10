import React from 'react';
import { User, MapPin, Clock, Camera } from 'lucide-react';

const Settings = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {/* Basic Info */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex items-center gap-2 mb-6 text-yellow-600">
            <User size={24} />
            <h3 className="font-bold text-lg text-gray-800">البيانات الأساسية</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">الاسم الكامل</label>
              <input type="text" defaultValue="سارة أحمد علي" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">رقم الهاتف</label>
              <input type="text" defaultValue="+966 50 123 4567" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-left" dir="ltr" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">البريد الإلكتروني</label>
              <input type="email" defaultValue="sara.admin@accessory-store.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-left" dir="ltr" />
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-[#d4af37] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#b5952f] transition-colors">
              حفظ التغييرات
            </button>
          </div>
        </div>

        {/* Store Data */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex items-center gap-2 mb-6 text-yellow-600">
            <MapPin size={24} />
            <h3 className="font-bold text-lg text-gray-800">بيانات المتجر</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">اسم المتجر</label>
              <input type="text" defaultValue="إكسسوارات الأناقة" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">الموقع الجغرافي</label>
              <div className="relative">
                 <input type="text" defaultValue="الرياض، المملكة العربية السعودية" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg pl-10" />
                 <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">ساعات العمل</label>
              <div className="grid grid-cols-2 gap-4">
                 <div className="relative">
                   <input type="text" defaultValue="السبت - الخميس" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg pl-10" />
                   <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                 </div>
                 <div className="relative">
                   <input type="text" defaultValue="09:00 ص - 11:00 م" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg pl-10" dir="ltr" />
                   <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                 </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="border border-[#d4af37] text-[#d4af37] px-6 py-2 rounded-lg font-bold hover:bg-[#d4af37] hover:text-white transition-colors">
              تحديث بيانات المتجر
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center relative overflow-hidden">
          <div className="relative inline-block mb-4">
             <div className="w-32 h-32 rounded-full bg-gray-100 border-4 border-white shadow-lg mx-auto flex items-center justify-center overflow-hidden">
               <img src="https://picsum.photos/200" alt="Profile" className="w-full h-full object-cover" />
             </div>
             <button className="absolute bottom-1 right-1 bg-[#d4af37] text-white p-2 rounded-full hover:bg-[#b5952f] shadow-md">
               <Camera size={18} />
             </button>
          </div>
          <h2 className="text-xl font-bold text-gray-800">سارة أحمد</h2>
          <p className="text-sm text-gray-500 mb-6">مدير المتجر العام</p>

          <div className="space-y-3 text-sm border-t border-gray-100 pt-6">
            <div className="flex justify-between">
              <span className="text-gray-500">تاريخ الانضمام:</span>
              <span className="font-bold text-gray-800">12 أكتوبر 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">الحالة:</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">نشط</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;