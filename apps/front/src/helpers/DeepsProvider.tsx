import { ProductsServicesFactory } from "modules/products";
import { ReactNode, createContext, useContext } from "react";

interface IProps {
  children: ReactNode;
  productsServicesFactory: ProductsServicesFactory;
}

const DepsContext = createContext<Omit<IProps, "children"> | undefined>(
  undefined,
);

export const DeepsProvider = ({ children, ...services }: IProps) => {
  return (
    <DepsContext.Provider value={services}>{children}</DepsContext.Provider>
  );
};

export const useDeepsConsumer = () => {
  const context = useContext(DepsContext);
  if (context === undefined) {
    throw new Error("useDeepsConsumer must be used within a DepsContext");
  }

  return context;
};

export const withDeeps = () => {
  // TODO
};
