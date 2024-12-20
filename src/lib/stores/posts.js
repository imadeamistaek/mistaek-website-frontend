// src/lib/stores/posts.js
import { writable } from 'svelte/store';

export const postsStore = writable({
  latestPost: null,
  otherPosts: [],
});