import { useQuery } from "@tanstack/react-query";
import { useDeepsConsumer } from "helpers";

interface Products {
  id: string;
}

export const useProductsQuery = (category?: string) => {
  const { productsServicesFactory: factory } = useDeepsConsumer();

  const { data, status, refetch } = useQuery<Products[]>(
    factory.getAllProducts(category),
  );

  return { data, status, refetch };
};
