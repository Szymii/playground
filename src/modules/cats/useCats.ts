import { useSuspense } from "../../hooks";
type Cat = Array<{ id: string }>;

export const useCats = (category: string) => {
  const url = `https://cataas.com//api/cats?tags=${category}&skip=0&limit=3`;
  const { data: cats } = useSuspense<Cat>(`cat-${category}`, url);

  return cats;
};
