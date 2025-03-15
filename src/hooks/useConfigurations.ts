import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

/* Fetch configurations */
const fetchConfigurations = async () => {
  const { data } = await api.get("/api/configurations");
  return data.data;
};

/* Hook for Fetching configurations */
export const useConfigurations = (initialData?: any[]) => {
  return useQuery({
    queryKey: ["configurations"],
    queryFn: fetchConfigurations,
    initialData,
  });
};
