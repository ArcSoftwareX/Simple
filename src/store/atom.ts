import { createStore } from './store'

export const atom = <T>(initialValue: T) => {  
    const store = createStore(initialValue)

    return store
}