import { createStore } from "../store/store"

export const createState = <T>(initialValue: T, actions: { [key: string]: (state: T, payload: { value: any }) => T }) => {
    const store = createStore(initialValue)

    const dispatch = <ActionName extends keyof typeof actions>(action: ActionName, payload?: any) => {
        store.set(actions[action](store.get(), { value: payload ?? null }))
    }

    return { get: store.get, subscribe: store.subscribe, dispatch }
}