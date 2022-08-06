import { computed, makeObservable, observable } from 'mobx';

import { filterProducts, uniqueValues } from '../utils/array-helpers';

import { AppStatus } from './types';
import { ProductShape } from '../types/products';

class Store {
  public status: AppStatus = 'initial';

  public products: ProductShape[] = [];

  public searchTerm: string = '';

  public selectedCategories: string[] = [];

  public selectedProduct: number | null = null;

  constructor() {
    makeObservable(this, {
      status: observable,
      products: observable,
      searchTerm: observable,
      selectedCategories: observable,
      selectedProduct: observable,
      filteredProducts: computed,
      filteredLength: computed,
      categories: computed,
    });
  }

  get filteredProducts() {
    return filterProducts({
      array: this.products,
      categories: this.selectedCategories,
      term: this.searchTerm
    });
  }

  get filteredLength() {
    const filteredProducts = filterProducts({
      array: this.products,
      categories: this.selectedCategories,
      term: this.searchTerm
    });
    return filteredProducts.length;
  }

  get categories() {
    return uniqueValues(this.products.map((item) => item.category));
  }

  public setProducts = (payload: ProductShape[]) => {
    this.products = payload;
    this.status = 'ready';
  }

  public toggleCategory = (category: string) => {
    const isSelected = this.selectedCategories.indexOf(category) !== -1;
    this.selectedCategories = isSelected
      ? this.selectedCategories.filter((item) => item !== category)
      : this.selectedCategories.concat(category);
  }

  public setTerm = (term: string) => {
    this.searchTerm = term;
    this.selectedProduct = null;
  }

  public setSelectedProduct = (index: number) => {
    this.selectedProduct = (this.selectedProduct === index)
      ? null
      : index;
  }
}

const store = new Store();

export default store;
export { Store };
