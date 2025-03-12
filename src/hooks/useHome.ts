"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

/* Fetch home data (sections, cards, etc.) */

// Banner
const fetchBannerData = async () => {
    const { data } = await api.get("/api/banner");
    return data.data;
};
const fetchAboutData = async () => {
    const { data } = await api.get("/api/about-us");
    return data.data;
};
const fetchServicesData = async () => {
    const { data } = await api.get("/api/services");
    return data.data;
};

const fetchProjects = async () => {
    const { data } = await api.get("/api/projects");
    return data.data; 
};


export const useBanner = () => {
    return useQuery({ queryKey: ["banner"], queryFn: fetchBannerData });
};

export const useAbout = () => {
    return useQuery({ queryKey: ["about"], queryFn: fetchAboutData });
};

export const useServices = () => {
    return useQuery({ queryKey: ["services"], queryFn: fetchServicesData });
};


export const useProjects = (initialData?: any[]) => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        initialData,
    });
};