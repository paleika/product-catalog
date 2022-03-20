import { ProductShape } from "../types/products";

type AppStatus =
  | 'initial'
  | 'fetched'
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

type SetStatusAction = {
  type: 'SET_STATUS';
  payload: AppStatus;
}

type SetProductsAction = {
  type: 'SET_PRODUCTS';
  payload: ProductShape[];
}

type ToggleCategoryAction = {
  type: 'TOGGLE_CATEGORY';
  payload: string;
}

type SetTermAction = {
  type: 'SET_TERM';
  payload: string;
}

type Action =
  | SetProductsAction
  | SetStatusAction
  | SetTermAction
  | ToggleCategoryAction;

export type {
  Action,
  State,
};
