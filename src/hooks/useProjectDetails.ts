import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

const fetchProjectDetails = async (id: string) => {
  const { data } = await api.get(`/api/projects/${id}`);
    return data.data;
};

export const useProjectDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: () => (id ? fetchProjectDetails(id) : null),
    enabled: !!id, // Only run query if `id` is available
  });
};
