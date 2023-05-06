import { createStore } from "./store"

export const createKV = <T>(initialValue: T) => {
    if ((typeof initialValue !== 'object' || initialValue === null) && process.env.NODE_ENV !== 'production') throw new Error('Key-value store is only for objects, but you provided: ' + (initialValue !== null ? typeof initialValue : 'null'))
    
    const store = createStore(initialValue)

    return {
        ...store,
        setKey<Key extends keyof T>(key: Key, newVal: T[Key]) {
            const value = { ...store.get() }
            value[key] = newVal
            store.set(value)
        },
        getKey<Key extends keyof T>(key: Key) {
            return store.get()[key]
        }
    }
}