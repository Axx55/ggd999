import React from 'react';
import { Upload, X, Save, CloudUpload } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
  return (
    <div className="max-w-6xl mx-auto pb-12">
      {/* Breadcrumb & Title */}
      <div className="flex flex-col gap-1 mb-8">
         <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link to="/products" className="hover:text-[#0e4b3e]">المنتجات</Link>
            <span>/</span>
            <span className="text-[#0e4b3e]">إضافة منتج جديد</span>
         </div>
         <h1 className="text-3xl font-bold text-gray-800">إضافة وتعديل المنتجات</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Product Images (In RTL this is visually on the Right, but logically secondary) 
            Wait, screenshot shows Images on the LEFT side of the screen? No, standard RTL puts sidebar Right, Content starts Right.
            Screenshot 1: "Add/Edit Product". 
            The Layout is: Left Box (Images), Right Box (Info).
            In CSS Grid (LTR default): Column 1 is Left, Column 2 is Right.
            In RTL: Column 1 is Right, Column 2 is Left.
            
            Let's match the screenshot visual:
            Image Card is on the LEFT. Info Card is on the RIGHT.
            In RTL, `lg:grid-cols-3`.
            We want Info to be the first 2 columns (Right side), Images to be the last column (Left side).
            Let's structure it so content flows naturally.
        */}
        
        {/* Images Section - Visually Left in Screenshot, so in RTL layout it should be the last element or configured via order? 
            Actually, let's look at the screenshot again.
            The screenshot is LTR or RTL? The text is Arabic "صور المنتج" on the top right of the card.
            The Image Card is on the Left of the screen. The Info Card is on the Right.
            In RTL mode `dir="rtl"`, the first element in DOM appears on the Right.
            So: 
            1. Info Card (Right)
            2. Image Card (Left)
        */}

        {/* Product Info - Right Side */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-8 border-b border-gray-50 pb-4">
              <span className="font-bold text-xl text-gray-800">📄 معلومات المنتج</span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">اسم المنتج</label>
                <input
                  type="text"
                  placeholder="مثال: ساعة يد فاخرة ذهبية"
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all"
                />
                <p className="text-xs text-gray-400 text-left font-mono">Product Name</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">الوصف</label>
                <textarea
                  rows={6}
                  placeholder="صف المنتج بالتفصيل، مثل المواد والميزات..."
                  className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all resize-none"
                ></textarea>
                <p className="text-xs text-gray-400 text-left font-mono">Description</p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                 <div className="space-y-2">
                   <label className="block text-sm font-bold text-gray-700">السعر</label>
                   <div className="relative">
                     <input type="number" placeholder="0.00" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:border-[#0e4b3e] focus:outline-none text-left pl-12" />
                     <span className="absolute left-4 top-4 text-gray-400 font-bold">د.إ</span>
                   </div>
                   <p className="text-xs text-gray-400 text-left font-mono">Price</p>
                 </div>

                 <div className="space-y-2">
                   <label className="block text-sm font-bold text-gray-700">الكمية المتوفرة</label>
                   <div className="flex items-center border border-gray-200 rounded-xl bg-white overflow-hidden h-[58px]">
                     <button className="px-4 h-full text-gray-500 hover:bg-gray-50 border-l border-gray-200">-</button>
                     <input type="number" defaultValue="1" className="w-full bg-transparent text-center focus:outline-none font-bold text-gray-800" />
                     <button className="px-4 h-full text-gray-500 hover:bg-gray-50 border-r border-gray-200">+</button>
                   </div>
                   <p className="text-xs text-gray-400 text-left font-mono">Quantity</p>
                 </div>
              </div>
              
              <div className="space-y-2 pt-2">
                 <label className="block text-sm font-bold text-gray-700">الفئة</label>
                 <select className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:border-[#0e4b3e] focus:outline-none appearance-none cursor-pointer">
                   <option>ساعات</option>
                   <option>مجوهرات</option>
                   <option>إكسسوارات</option>
                 </select>
                 <p className="text-xs text-gray-400 text-left font-mono">Category</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Images - Left Side (Visually) */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit">
            <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-4">
                <span className="font-bold text-xl text-gray-800">🖼️ صور المنتج</span>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:border-[#0e4b3e] transition-all mb-6 bg-gray-50/50 min-h-[200px]">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0e4b3e] mb-4 shadow-sm">
                <CloudUpload size={28} />
                </div>
                <p className="font-bold text-gray-700">اسحب الصور هنا أو انقر للتحميل</p>
                <p className="text-xs text-gray-400 mt-2 font-mono">Upload Images</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="aspect-square bg-white rounded-xl border border-gray-200 flex items-center justify-center relative group p-2 shadow-sm">
                    <span className="text-3xl">🐹</span>
                    <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all shadow-md transform scale-90 hover:scale-100">
                        <X size={12} />
                    </button>
                </div>
                <div className="aspect-square bg-[#f8f5f2] rounded-xl border border-gray-200 flex items-center justify-center p-2 shadow-sm">
                    <span className="text-3xl">💍</span>
                </div>
                <div className="aspect-square bg-[#f0f9f4] rounded-xl border border-gray-200 flex items-center justify-center p-2 shadow-sm">
                    <span className="text-3xl">🌿</span>
                </div>
            </div>
            </div>

            {/* Actions Buttons - Placed under images or spanning full width? 
                Screenshot shows them floating or fixed at bottom? 
                Let's put them here for mobile, or span full width at bottom.
                In the design, they look like a separate section.
            */}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex gap-4 mt-8 lg:w-2/3">
           <button className="w-1/3 bg-[#e2e8f0] text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-300 transition-colors flex flex-col items-center justify-center gap-1">
             <span className="text-lg">إلغاء</span>
             <span className="text-xs font-normal opacity-60 font-mono">Cancel</span>
           </button>
           <button className="w-2/3 bg-[#115e59] text-white py-4 rounded-xl font-bold hover:bg-[#0f514d] transition-colors flex flex-col items-center justify-center gap-1 shadow-lg shadow-teal-900/20">
             <span className="text-lg">حفظ المنتج</span>
             <span className="text-xs font-normal opacity-60 font-mono">Save Product</span>
           </button>
        </div>
    </div>
  );
};

export default AddProduct;