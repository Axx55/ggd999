import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import AddProduct from './pages/AddProduct';
import Categories from './pages/Categories'; // Imported
import Login from './pages/Login';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Determine page title based on path
  let title = 'مرحباً، مدير المتجر';
  if (location.pathname === '/orders') title = 'إدارة الطلبات';
  if (location.pathname === '/settings') title = 'إعدادات الحساب';
  if (location.pathname === '/products') title = 'إدارة المنتجات';
  if (location.pathname === '/categories') title = 'إدارة الفئات';

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <main className="flex-1 mr-64 p-8 transition-all duration-300">
        <Header title={title} />
        {children}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />
        
        <Route path="/orders" element={
          <Layout>
            <Orders />
          </Layout>
        } />
        
        <Route path="/settings" element={
          <Layout>
            <Settings />
          </Layout>
        } />
        
        <Route path="/products" element={
          <Layout>
            <AddProduct />
          </Layout>
        } />
        
        {/* Added Categories Route */}
        <Route path="/categories" element={
          <Layout>
            <Categories />
          </Layout>
        } />
        
        {/* Fallback routes */}
        <Route path="/customers" element={<Layout><div className="flex items-center justify-center h-full text-gray-400">صفحة العملاء (قيد التطوير)</div></Layout>} />
        <Route path="/marketing" element={<Layout><div className="flex items-center justify-center h-full text-gray-400">صفحة التسويق (قيد التطوير)</div></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;