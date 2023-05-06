import { createStore } from './store'

export const createAtom = <T>(initialValue: T) => {  
    const store = createStore(initialValue)

    return store
}