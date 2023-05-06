export type Callback<T> = (value: T) => void
export type Store<T> = {
    get(): T;
    set(newValue: T): void;
    subscribe(callback: Callback<T>): () => void;
    $notify(): void;
}
export type Factory<T> = (store: Store<T>) => T