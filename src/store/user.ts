import { writable } from 'svelte/store';

// 初期値はnullなどに設定しても良い
export const userId = writable<string | null>(null);