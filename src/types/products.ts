interface ProductShape {
  id: string;
  productName: string;
  tags: string[];
  category: string;
  manufacturerUrl: string;
  description: string[];
  option1: string | null;
  option2: string | null;
}

type FetchedProductShape = Omit<ProductShape, "id">;

export type {
  FetchedProductShape,
  ProductShape,
}
