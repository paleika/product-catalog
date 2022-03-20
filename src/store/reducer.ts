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
        'status', 'fetched',
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

      const newFiltered = filterProducts({
        array: products,
        categories: newSelected,
        term: searchTerm,
      });

      return assoc(
        state,
        'selectedCategories', newSelected,
        'filteredProducts', newFiltered,
      );
    };

    case actions.SET_TERM: {
      const { payload: term } = action;

      if (term.length === 0) {
        return assoc(
          state,
          'searchTerm', term,
          'filteredProducts', [],
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
      );
    };

    default: {
      return state;
    };
  };
};

export default reducer;
