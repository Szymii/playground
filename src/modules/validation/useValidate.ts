import { useToast } from "@chakra-ui/react";
import { ValidationStatuses } from "src/types";
import { useValidationStatusQuery } from "./useValidationStatusQuery";

export const useValidate = () => {
  const toast = useToast();
  const { refetch } = useValidationStatusQuery();

  const validate = () => {
    const interval = setInterval(async () => {
      const { data } = await refetch();
      if (data?.status === ValidationStatuses.VERIFIED) {
        toast({
          title: `Your account has been verified`,
          status: "success",
          isClosable: true,
        });
        clearInterval(interval);
      }
      if (data?.status === ValidationStatuses.ERROR) {
        toast({
          title: `Verification error`,
          status: "error",
          isClosable: true,
        });
        clearInterval(interval);
      }
    }, 5000);
  };

  return [validate];
};
