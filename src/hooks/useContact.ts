"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "../utils/api";

/* Fetch Available Services */
const fetchServices = async () => {
  const { data } = await api.get("/api/services");
  return data.data;
};

export const useServices = () => {
  return useQuery({ queryKey: ["services"], queryFn: fetchServices });
};

export const useContactForm = () => {
  return useMutation({
    mutationFn: async (formData: any) => {
      const { data } = await api.post("/api/contact-us", formData);
      return data;
    },
  });
};