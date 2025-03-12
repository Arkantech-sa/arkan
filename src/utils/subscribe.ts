
import axios from "axios";
import Cookies from "js-cookie";

const locale = Cookies.get("NEXT_LOCALE");
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.arkantech.sa";

export const apiSubscribe = axios.create({
    baseURL: API_URL,
    headers: {
        "Accept-Language": locale,
        "Content-Type": "application/json",
    },
});

// Function to subscribe to newsletter

export async function subscribeNewsletter(email: string) {
    if (!email) {
        throw new Error("Invalid email address");
    }

    try {
        const response = await apiSubscribe.post('/api/subscriptions', { email });
        return response.data;
    } catch (error) {
        // Handle axios errors
        if (axios.isAxiosError(error)) {
            // Get the error message from the API response
            const errorMessage = error.response?.data?.message || 
                                (error.response?.data?.errors?.email && error.response?.data?.errors?.email[0]) || 
                                "Failed to subscribe";
            
            throw new Error(errorMessage);
        }
        
        // Handle other errors
        throw error;
    }
}

// Dynamic language header
apiSubscribe.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = Cookies.get("NEXT_LOCALE");
    return config;
});