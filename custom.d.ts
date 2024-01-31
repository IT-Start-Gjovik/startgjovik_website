export {}; // Ensure this file is treated as a module

declare global {
    interface Window {
        Mazemap: any; // Use `any` or a more specific type if you have the type definitions
    }
}
