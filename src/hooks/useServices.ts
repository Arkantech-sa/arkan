"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

/* Fetch Services */
const fetchServices = async () => {
    const { data } = await api.get("/api/services");
    return data.data; 
};

/* Hook for Fetching Services */
export const useServices = (initialData?: any[]) => {
    return useQuery({
        queryKey: ["services"],
        queryFn: fetchServices,
        initialData,
    });
};
