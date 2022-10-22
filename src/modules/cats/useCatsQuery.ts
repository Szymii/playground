import { useSuspense } from "src/hooks";

type RowCat = Array<{ _id: string }>;

export const useCatsQuery = (category: string) => {
  const url = `https://cataas.com//api/cats?tags=${category}&skip=0&limit=3`;
  const { data: rowCats } = useSuspense<RowCat>(`cat-${category}`, url);

  const cats = rowCats?.map((cat) => {
    return { ...cat, id: cat._id };
  });

  return cats;
};
