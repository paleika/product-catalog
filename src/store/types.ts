import { ProductShape } from "../types/products";

type AppStatus =
  | 'initial'
  | 'ready'
  | 'error';

interface State {
  status: AppStatus;
  products: ProductShape[];
  categories: string[];
  filteredProducts: ProductShape[];
  searchTerm: string;
  selectedCategories: string[];
  selectedProduct: number | null;
}

export type {
  AppStatus,
  State,
};
