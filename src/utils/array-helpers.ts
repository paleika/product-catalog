import { ProductShape } from "../types/products";

interface FilterProductsArgs {
  array: ProductShape[];
  categories: string[];
  term: string;
}

const uniqueValues = (source: string[]): string[] => {
  return source.filter((value, index, array) => array.indexOf(value) === index);
};

const checkSearchTerm = (product: ProductShape, regexp: RegExp) => {
  const isNameIncludes = regexp.test(product.productName);
  if (isNameIncludes) {
    return true;
  }

  const tagsIncludes = product.tags.filter((tag) => regexp.test(tag));

  return tagsIncludes.length === 0 ? false : true;
};

const filterProducts = ({ array, categories, term }: FilterProductsArgs) => {
  const categorizedArray = categories.length === 0
    ? array
    : array.filter((item) => categories.indexOf(item.category) !== -1);

  const termRegexp = new RegExp(term, "i");

  return categorizedArray.filter((item) => checkSearchTerm(item, termRegexp));
};

export {
  filterProducts,
  uniqueValues,
}
