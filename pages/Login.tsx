import React, { useState } from 'react';
import { Phone, Lock, User, ArrowLeft, ArrowRight, Store, MapPin, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [step, setStep] = useState(1); // 1: Personal Info, 2: Store Info

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister && step === 1) {
      setStep(2);
    } else {
      // Login or Final Register Step
      navigate('/');
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setStep(1);
  };

  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Shapes */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#0e4b3e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl z-10 border border-gray-100 transition-all duration-300">
        <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#0e4b3e] rounded-2xl mx-auto flex items-center justify-center text-[#d4af37] mb-4 shadow-lg shadow-[#0e4b3e]/20">
                {isRegister && step === 2 ? <Store size={32} /> : <Lock size={32} />}
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {isRegister 
                  ? (step === 1 ? 'إنشاء حساب جديد' : 'بيانات المتجر') 
                  : 'تسجيل الدخول'}
            </h1>
            <p className="text-gray-500 text-sm">
                {isRegister 
                  ? (step === 1 ? 'سجل بياناتك الشخصية للمتابعة' : 'أكمل إعداد متجرك الإلكتروني') 
                  : 'مرحباً بعودتك، يرجى إدخال بياناتك'}
            </p>
        </div>

        {/* Register Steps Indicator */}
        {isRegister && (
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`h-2 w-2 rounded-full transition-colors ${step === 1 ? 'bg-[#0e4b3e] w-8' : 'bg-gray-200'}`}></div>
            <div className={`h-2 w-2 rounded-full transition-colors ${step === 2 ? 'bg-[#0e4b3e] w-8' : 'bg-gray-200'}`}></div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1: Login OR Register Personal Info */}
            {(!isRegister || step === 1) && (
              <>
                {isRegister && (
                <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <input 
                        type="text" 
                        required
                        placeholder="الاسم الكامل" 
                        className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all outline-none"
                    />
                    <User className="absolute top-3.5 right-4 text-gray-400 group-focus-within:text-[#0e4b3e] transition-colors" size={20} />
                </div>
                )}

                <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-75">
                    <input 
                        type="tel" 
                        required
                        placeholder="رقم الهاتف" 
                        dir="ltr"
                        className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all outline-none text-right placeholder:text-right"
                    />
                    <Phone className="absolute top-3.5 right-4 text-gray-400 group-focus-within:text-[#0e4b3e] transition-colors" size={20} />
                </div>

                <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                    <input 
                        type="password" 
                        required
                        placeholder="كلمة المرور" 
                        dir="ltr"
                        className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all outline-none text-right placeholder:text-right"
                    />
                    <Lock className="absolute top-3.5 right-4 text-gray-400 group-focus-within:text-[#0e4b3e] transition-colors" size={20} />
                </div>
              </>
            )}

            {/* Step 2: Register Store Info */}
            {isRegister && step === 2 && (
              <>
                <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <input 
                        type="text" 
                        required
                        placeholder="اسم المتجر" 
                        className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all outline-none"
                    />
                    <Store className="absolute top-3.5 right-4 text-gray-400 group-focus-within:text-[#0e4b3e] transition-colors" size={20} />
                </div>

                <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-75">
                    <input 
                        type="text" 
                        required
                        placeholder="المدينة / العنوان" 
                        className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all outline-none"
                    />
                    <MapPin className="absolute top-3.5 right-4 text-gray-400 group-focus-within:text-[#0e4b3e] transition-colors" size={20} />
                </div>
                
                <div className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                   <select className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#0e4b3e]/20 focus:border-[#0e4b3e] transition-all outline-none text-gray-500 appearance-none">
                     <option value="" disabled selected>نشاط المتجر</option>
                     <option value="fashion">أزياء وموضة</option>
                     <option value="electronics">إلكترونيات</option>
                     <option value="jewelry">مجوهرات وإكسسوارات</option>
                     <option value="food">أغذية ومشروبات</option>
                   </select>
                   <div className="absolute top-3.5 right-4 text-gray-400">
                     <Store size={20} />
                   </div>
                </div>
              </>
            )}

            {!isRegister && (
                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input type="checkbox" className="accent-[#0e4b3e] w-4 h-4 rounded border-gray-300" />
                        <span className="text-gray-500">تذكرني</span>
                    </label>
                    <button type="button" className="text-[#0e4b3e] font-medium hover:underline">نسيت كلمة المرور؟</button>
                </div>
            )}

            <div className="flex gap-3 pt-2">
              {isRegister && step === 2 && (
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="w-14 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  <ArrowRight size={20} />
                </button>
              )}
              
              <button 
                  type="submit" 
                  className="flex-1 bg-[#0e4b3e] text-white py-3.5 rounded-xl font-bold hover:bg-[#0a382e] transition-all transform active:scale-[0.98] shadow-lg shadow-[#0e4b3e]/20 flex items-center justify-center gap-2"
              >
                  {isRegister 
                    ? (step === 1 ? 'التالي' : 'إتمام التسجيل') 
                    : 'تسجيل الدخول'}
                  {isRegister && step === 2 ? <Check size={18} /> : <ArrowLeft size={18} />}
              </button>
            </div>
        </form>

        {/* Separator & Google - Only on Login or Step 1 */}
        {(!isRegister || step === 1) && (
          <>
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">أو الاستمرار باستخدام</span>
                </div>
            </div>

            <button 
                type="button"
                className="w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 group"
            >
                <GoogleIcon />
                <span className="group-hover:text-gray-900">حساب Google</span>
            </button>
          </>
        )}

        <p className="mt-8 text-center text-sm text-gray-500">
            {isRegister ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}
            {' '}
            <button 
                onClick={toggleMode} 
                className="font-bold text-[#0e4b3e] hover:underline"
            >
                {isRegister ? 'سجل دخولك الآن' : 'أنشئ حساباً جديداً'}
            </button>
        </p>
      </div>
      
      <div className="absolute bottom-6 text-xs text-gray-400">
        © 2023 متجر النخبة. جميع الحقوق محفوظة
      </div>
    </div>
  );
};

export default Login;