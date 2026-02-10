import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Package, Users, Settings, LogOut, Gem, Layers, Megaphone } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'لوحة التحكم', path: '/' },
    { icon: <Layers size={20} />, label: 'الفئات', path: '/categories' }, // Categories moved up
    { icon: <Package size={20} />, label: 'المنتجات', path: '/products' },
    { icon: <ShoppingBag size={20} />, label: 'الطلبات', path: '/orders' },
    { icon: <Users size={20} />, label: 'العملاء', path: '/customers' },
    { icon: <Megaphone size={20} />, label: 'التسويق', path: '/marketing' },
    { icon: <Settings size={20} />, label: 'الإعدادات', path: '/settings' },
  ];

  return (
    <aside className="fixed right-0 top-0 h-full w-64 bg-white border-l border-gray-100 text-gray-600 flex flex-col z-50 transition-all duration-300">
      <div className="p-6 flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[#0e4b3e] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#0e4b3e]/20">
          <Gem size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[#0e4b3e]">متجر النخبة</h1>
          <p className="text-xs text-gray-400">إدارة المتجر</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-[#0e4b3e] text-white shadow-md shadow-[#0e4b3e]/20'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[#0e4b3e]'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium"
        >
          <LogOut size={20} />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;