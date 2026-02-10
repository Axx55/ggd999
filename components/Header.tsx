import React from 'react';
import { Bell, Search, Moon, User } from 'lucide-react';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="bg-white p-4 rounded-xl shadow-sm mb-6 flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">أهلاً بك، مدير المتجر</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="بحث هنا..."
            className="pl-4 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 w-64"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
          <Moon size={20} />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 mr-2 pr-4 border-r border-gray-200">
          <div className="text-left hidden sm:block">
            <p className="text-sm font-bold text-gray-800">أحمد المدير</p>
            <p className="text-xs text-gray-500">admin@store.com</p>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <User size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;