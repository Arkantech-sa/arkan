import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

const fetchServiceDetails = async (id: string) => {
  const { data } = await api.get(`/api/services/${id}`);
    return data.data;
};

export const useServiceDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["services", id],
    queryFn: () => (id ? fetchServiceDetails(id) : null),
    enabled: !!id, // Only run query if `id` is available
  });
};
