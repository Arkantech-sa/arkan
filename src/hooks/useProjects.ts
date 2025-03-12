"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/api";

/* Fetch projects */
const fetchProjects = async () => {
    const { data } = await api.get("/api/projects");
    return data.data; 
};

/* Hook for Fetching projects */
export const useProjects = (initialData?: any[]) => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        initialData,
    });
};
