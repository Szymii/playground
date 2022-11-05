import { useToast, UseToastOptions } from "@chakra-ui/react";
import { useCallback } from "react";

export const useCToast = (opt: UseToastOptions) => {
  const toast = useToast();

  function toaster(options?: UseToastOptions) {
    options ? toast({ ...options }) : toast({ ...opt });
  }

  return useCallback(toaster, []);
};
