export interface EmiPlan {
  id: string;
  tenure: number;
  monthlyEmi: number;
  interestRate: number;
  totalPayable: number;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: string;
  emiPlans: EmiPlan[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  variants: ProductVariant[];
  emiPlans: EmiPlan[];
}