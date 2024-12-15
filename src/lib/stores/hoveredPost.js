// src/lib/store.js
import { writable } from 'svelte/store';

export const hoveredPost = writable(null); // Holds the post data