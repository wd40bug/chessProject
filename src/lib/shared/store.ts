import {browser} from '$app/env';
import {writable} from 'svelte/store';

const defaultValue = String(Math.floor(Math.random() * 10000000000000000));
const initialValue:string = browser? window.localStorage.getItem('UserID') ?? defaultValue : defaultValue;

export const ID = writable<string>(initialValue);

ID.subscribe((value) => {
	if(browser){
		window.localStorage.setItem('UserID',value);
	}
})

export {ID as default};