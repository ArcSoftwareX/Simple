import { createStore } from './store'

// Atomic store simply holds the value
export const atom = <T>(initialValue: T) => {  
    const store = createStore(initialValue)

    return store
}