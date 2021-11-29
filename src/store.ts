import { readable, writable } from 'svelte/store';
import { browser } from "$app/env";
import { persist, localStorage, indexedDBStorage, cookieStorage } from '@macfja/svelte-persistent-store';

// export const id = persist(writable(makeid(16)),cookieStorage(),'id');



function makeid(length):string {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}