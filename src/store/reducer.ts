import { assoc } from 'imtbl';
import { filterProducts, uniqueValues } from '../utils/array-helpers';
import actions from './actions';
import { State, Action } from './types';

const initialState: State = {
  status: 'initial',
  products: [],
  categories: [],
  filteredProducts: [],
  searchTerm: '',
  selectedCategories: [],
  selectedProduct: null,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case actions.SET_STATUS: {
      return assoc(state, 'status', action.payload);
    };

    case actions.SET_PRODUCTS: {
      const { payload: fetchedProducts } = action;
      const allCategories = fetchedProducts.map((item) => item.category);

      return assoc(
        state,
        'status', 'ready',
        'products', fetchedProducts,
        'categories', uniqueValues(allCategories),
      );
    };

    case actions.TOGGLE_CATEGORY: {
      const { payload: category } = action;
      const { selectedCategories, products, searchTerm } = state;
      const isSelected = state.selectedCategories.indexOf(category) !== -1;

      const newSelected = isSelected
        ? selectedCategories.filter((item) => item !== category)
        : selectedCategories.concat(category);

      if (searchTerm.length === 0) {
        return assoc(
          state,
          'filteredProducts', [],
          'selectedProduct', null,
        );
      }

      const newFiltered = filterProducts({
        array: products,
        categories: newSelected,
        term: searchTerm,
      });

      return assoc(
        state,
        'selectedCategories', newSelected,
        'filteredProducts', newFiltered,
        'selectedProduct', null,
      );
    };

    case actions.SET_TERM: {
      const { payload: term } = action;

      if (term.length === 0) {
        return assoc(
          state,
          'searchTerm', term,
          'filteredProducts', [],
          'selectedProduct', null,
        );
      }

      const { selectedCategories, products } = state;

      const newFiltered = filterProducts({
        array: products,
        categories: selectedCategories,
        term,
      });

      return assoc(
        state,
        'searchTerm', term,
        'filteredProducts', newFiltered,
        'selectedProduct', null,
      );
    };

    case actions.SET_SELECTED_PRODUCT: {
      const { payload: selectedIndex } = action;

      return assoc(
        state,
        'selectedProduct', selectedIndex,
      )
    }

    default: {
      return state;
    };
  };
};

export default reducer;
