import { QueryClient, useQuery } from "@tanstack/react-query";

interface Picture {
  download_url: string;
}

const getPic = async (): Promise<Picture> => {
  const res = await fetch(
    `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/info`,
  );

  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  return res.json();
};

const picQuery = () => ({
  queryKey: ["pic"],
  queryFn: async () => getPic(),
});

export const picLoader = (queryClient: QueryClient) => async () => {
  const query = picQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const usePicQuery = () => {
  const { data } = useQuery(picQuery());

  if (!data) {
    throw new Error(`no Data`);
  }

  return data;
};
