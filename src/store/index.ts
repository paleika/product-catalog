import { action, computed, makeObservable, observable } from 'mobx';

import { enrichWithId, filterProducts, uniqueValues } from '../utils/array-helpers';

import { AppStatus } from './types';
import { FetchedProductShape, ProductShape } from '../types/products';

class PCStore {
  public status: AppStatus = 'initial';

  public products: ProductShape[] = [];

  public searchTerm: string = '';

  public selectedCategories: string[] = [];

  public selectedProductId: string = '';

  constructor() {
    makeObservable(this, {
      status: observable,
      products: observable,
      searchTerm: observable,
      selectedCategories: observable,
      selectedProductId: observable,
      filteredProducts: computed,
      categories: computed,
      setSelectedProductId: action,
      toggleCategory: action,
      setTerm: action,
      setProducts: action,
    });
  }

  get filteredProducts() {
    return filterProducts({
      array: this.products,
      categories: this.selectedCategories,
      term: this.searchTerm
    });
  }

  get categories() {
    return uniqueValues(this.products.map((item) => item.category));
  }


  public setProducts = (payload: FetchedProductShape[]) => {
    const productsWithIds = enrichWithId(payload);
    this.products = productsWithIds;
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
    this.selectedProductId = '';
  }

  public setSelectedProductId = (id: string) => {
    this.selectedProductId = (this.selectedProductId === id) ? '' : id;
  }

  public getProductById = (id: string) => {
    return this.products.find((item) => item.id === id);
  }

  public updateProductById = (id: string, newProduct: ProductShape) => {
    const productIndexById = this.products.findIndex((product) => product.id === id);
    if (productIndexById > -1) {
      this.products[productIndexById] = newProduct;
    }
  }
}

const store = new PCStore();

export default store;
export { PCStore };
