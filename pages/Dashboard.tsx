import React from 'react';
import { Package, AlertTriangle, DollarSign, ShoppingCart, TrendingUp, Archive, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'يناير', sales: 4000 },
  { name: 'فبراير', sales: 3000 },
  { name: 'مارس', sales: 2000 },
  { name: 'أبريل', sales: 2780 },
  { name: 'مايو', sales: 1890 },
  { name: 'يونيو', sales: 2390 },
];

const pieData = [
  { name: 'خواتم', value: 400 },
  { name: 'سلاسل', value: 300 },
  { name: 'أساور', value: 300 },
  { name: 'أقراط', value: 200 },
];

const COLORS = ['#0e4b3e', '#d4af37', '#10b981', '#f59e0b'];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">إجمالي قطع المخزون</p>
            <h3 className="text-3xl font-bold text-gray-800">3,450</h3>
          </div>
          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
            <Archive size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">قيمة المخزون</p>
            <h3 className="text-3xl font-bold text-gray-800">245,000</h3>
            <span className="text-xs text-gray-400">ر.س</span>
          </div>
          <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between border-l-4 border-l-red-400">
          <div>
            <p className="text-gray-500 text-sm mb-1">منتجات نفدت</p>
            <h3 className="text-3xl font-bold text-red-500">5</h3>
          </div>
          <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500">
            <ShoppingCart size={24} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between border-l-4 border-l-orange-400">
          <div>
            <p className="text-gray-500 text-sm mb-1">تنبيهات منخفضة</p>
            <h3 className="text-3xl font-bold text-orange-500">12</h3>
          </div>
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
            <AlertTriangle size={24} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts Section */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">تنبيهات المخزون</h3>
            <button className="text-sm text-[#0e4b3e] hover:underline">عرض الكل</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-red-50 p-3 rounded-xl border border-red-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-2xl">💍</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-sm">طقم الماس ملكي فاخر</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full">نفدت الكمية</span>
                  <span className="text-xs text-red-600">المتبقي: 0 قطعة</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-yellow-50 p-3 rounded-xl border border-yellow-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-2xl">👑</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-sm">تاج ذهبي مرصع بالأحجار</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">قاربت على النفاذ</span>
                  <span className="text-xs text-yellow-600">المتبقي: 3 قطع</span>
                </div>
              </div>
            </div>

             <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-2xl">📿</div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-sm">سبحة كريستال سوداء</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">أقل من 50%</span>
                  <span className="text-xs text-gray-500">المتبقي: 45 قطعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">اتجاهات المبيعات الشهرية</h3>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm outline-none">
              <option>آخر 6 أشهر</option>
              <option>هذا العام</option>
            </select>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4af37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="sales" stroke="#d4af37" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <h3 className="font-bold text-lg text-gray-800 mb-6">فئات المنتجات الأكثر مبيعاً</h3>
           <div className="h-64 relative flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-3xl font-bold text-gray-800">42%</span>
               <span className="text-xs text-gray-500">خواتم</span>
             </div>
           </div>
           <div className="flex justify-center gap-4 mt-4 flex-wrap">
             {pieData.map((entry, index) => (
               <div key={index} className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                 <span className="text-xs text-gray-600">{entry.name}</span>
               </div>
             ))}
           </div>
        </div>

        {/* Recent Products */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-800">المنتجات المضافة حديثاً</h3>
            <button className="text-sm text-[#0e4b3e] hover:underline">عرض كل المنتجات</button>
          </div>
          <div className="space-y-4">
             {[
               { name: 'قلادة الزمرد الأخضر', price: '1,200', category: 'قسم العقود', img: '💎' },
               { name: 'ساعة كلاسيك ذهبية', price: '3,500', category: 'قسم الساعات', img: '⌚' },
               { name: 'نظارة شمسية فاخرة', price: '850', category: 'الإكسسوارات', img: '🕶️' }
             ].map((product, idx) => (
               <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                      {product.img}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{product.name}</h4>
                      <p className="text-xs text-gray-500">{product.category}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-[#0e4b3e]">{product.price} ر.س</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;