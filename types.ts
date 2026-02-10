export interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: 'completed' | 'pending' | 'shipping' | 'cancelled';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sku: string;
  image: string;
  status: 'active' | 'low_stock' | 'out_of_stock';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  image: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color?: string;
  subValue?: string;
}