import { Storage } from "@ionic/storage";

export const persistIonicStorage = {
    async getItem(key) {
        const store = new Storage();
        await store.create();
        return await store.get(key);
    },
    async setItem(key, value) {
        const store = new Storage();
        await store.create();
        return await store.set(key, value);
    },
    async removeItem(key) {
        const store = new Storage();
        await store.create();
        return await store.remove(key);
    },
}