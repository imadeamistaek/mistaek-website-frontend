import { writable } from 'svelte/store';

export const loading = writable(false); // Tracks whether the loader is active
export const loaderVariant = writable("initial"); // Tracks the loader variant
