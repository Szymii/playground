import { QueryClient, useQuery } from "@tanstack/react-query";

type RowCats = Array<{ _id: string }>;

const getImages = async (category?: string): Promise<unknown> => {
  const res = await fetch(
    `https://cataas.com/api/cats?tags=${
      category ? category : "blep"
    }&skip=0&limit=3`,
  );

  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  return res.json();
};

const imagesQuery = (category?: string) => ({
  queryKey: ["catImg", category],
  queryFn: async () => getImages(category),
});

export const imagesLoader =
  (queryClient: QueryClient, category?: string) => async () => {
    const query = imagesQuery(category);

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export const useImagesQuery = (category?: string) => {
  const { data } = useQuery(imagesQuery(category));

  if (!data) {
    throw new Error(`no Cats`);
  }

  const rowCats = data as RowCats;

  const cats = rowCats?.map((cat) => {
    return { ...cat, id: cat._id };
  });

  return cats;
};
