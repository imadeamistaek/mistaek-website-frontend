import { writable } from 'svelte/store';

// Store to hold fetched posts
export const postsStore = writable([]);