import { Item } from "./types";

export const useLocalStorage = () => {
    const setItem = (key: string, value: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            console.log(window.localStorage);
        } catch (error) {
            console.log(error);
        }        
    }

    const getItem = (key: string) => {
        try {
            const item = window.localStorage.getItem(key)
            if (item) return JSON.parse(item)
        } catch (error) {
            console.log(error);
        }
    }

    const removeItem = (key: string) => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }

    const getItems = () => {
            let items:Item[] = [],
                keys = Object.keys(localStorage);

            for (let i = 0; i < keys.length; i++) {
                let item:Item = {
                    name: keys[i],
                    value: keys[i] ? localStorage.getItem(keys[i]) : null
                }
                items.push(item);
            }
            return items;
    }

    return {setItem, getItem, removeItem, getItems};
};