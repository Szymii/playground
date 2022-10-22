import { useQuery } from "@tanstack/react-query";

async function fetchData(url: string) {
  const res = await fetch(url);

  return res.json();
}

export const useSuspense = <T>(key: string, url: string) => {
  const { data, status, refetch } = useQuery<T>([key], () => fetchData(url), {
    suspense: true,
  });

  return { data, status, refetch };
};
