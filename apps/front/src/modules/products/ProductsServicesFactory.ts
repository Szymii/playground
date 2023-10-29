type RowCat = Array<{ _id: string }>;

const get = async (category?: string) => {
  const res = await fetch(
    `https://cataas.com/api/cats?tags=${category}&skip=0&limit=3`,
  );

  const rowCats: RowCat = await res.json();

  const cats = rowCats?.map((cat) => {
    return { id: cat._id };
  });

  return cats;
};

export class ProductsServicesFactory {
  private getter = get;
  constructor(fetcher?: () => Promise<{ id: string }[]>) {
    if (fetcher) {
      this.getter = fetcher;
    }
  }

  getAllProducts(category?: string) {
    return {
      queryKey: ["products", category || ""],
      queryFn: async () => this.getter(category),
    };
  }
}
