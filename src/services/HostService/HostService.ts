export const getApiHost = (): string | undefined => {
    return import.meta.env.VITE_API_HOST;
}