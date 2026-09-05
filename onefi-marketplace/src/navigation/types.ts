import { Product } from "../types/products";

export type RootStackParamList = {
  Marketplace: undefined;
  ProductDetails: {
    product: Product;
  };
  OrderSummary: { 
    product: Product;
    selectedVariant: any;
    selectedEmiPlan: any; };
  OrderSuccess: {
    orderId?: string;
};
};