"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { subscribeNewsletter } from "../utils/subscribe";
import toast from "react-hot-toast";
// import toast from 'react-hot-toast';

export function useSubscribeNewsletter() {
    const [email, setEmail] = useState("");
    
    const mutation = useMutation({
        mutationFn: (email: string) => subscribeNewsletter(email),
        onSuccess: () => {
            setEmail(""); // Clear the input on success
        }
    });
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        
        toast.promise(
            new Promise((resolve, reject) => {
                mutation.mutate(email, {
                    onSuccess: (data) => resolve(data),
                    onError: (error) => reject(error)
                });
            }),
            {
                loading: 'Subscribing...',
                success: 'Successfully subscribed to newsletter!',
                error: (err) => `${err.message || 'Failed to subscribe'}`
            }
        );
    };
    
    return {
        email,
        setEmail,
        handleSubmit,
        isLoading: mutation.isPending,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
    };
}