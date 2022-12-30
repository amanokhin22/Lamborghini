import {ModelsList, NewsList} from "../types/types";
import {modelsList, newsList} from "./mockData";

const AUTH_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

const GET_ALL_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEyt/data';

export const newsApi = {
    async getAll(): Promise<NewsList[]> {
        try {
            const response = await fetch(GET_ALL_URL, {
                headers: {
                    Authorization: 'Bearer ' + AUTH_TOKEN
                }
            })
            if (response.status >= 200 && response.status <= 300) {
                return await response.json();
            }
            return newsList
        } catch (e) {
            return newsList
        }
    },
};

export const modelsApi = {
    async getAll(): Promise<ModelsList[]> {
        try {
            const response = await fetch(GET_ALL_URL, {
                headers: {
                    Authorization: 'Bearer ' + AUTH_TOKEN
                }
            })
            if (response.status >= 200 && response.status <= 300) {
                return await response.json();
            }
            return modelsList
        } catch (e) {
            return modelsList
        }
    },
};
