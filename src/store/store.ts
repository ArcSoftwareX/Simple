import { Callback } from "../types"

export const createStore = <T>(initialValue: T) => {
    let value = initialValue
    const callbacks: Callback<T>[] = []

    const store = {
        get() {
            return value
        },
        set(newValue: T) {
            value = newValue
            this.notify()
        },
        subscribe(callback: Callback<T>): () => void {
            const current = callbacks.length
            callbacks.push(callback)
            return () => callbacks.splice(current, 1)
        },
        notify() {
            if (callbacks.length === 0) return
            callbacks.forEach(callback => callback(value))
        }
    }

    return store
}