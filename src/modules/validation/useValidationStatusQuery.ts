import { useSuspense } from "src/hooks";
import { ValidationStatuses } from "src/types";

const validationStatusQueryKey = "validation status";

export const useValidationStatusQuery = () => {
  const { data, refetch } = useSuspense<{ status: ValidationStatuses }>(
    validationStatusQueryKey,
    "/api/validation/status"
  );

  return { status: data?.status, refetch };
};
