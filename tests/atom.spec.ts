import { it, expect, describe } from 'vitest'
import { createAtom } from '../src'

describe('createAtomic store functionality test', () => {
    const store = createAtom(0)

    it('Call set + get', () => {
        store.set(5)
        expect(store.get()).toBe(5)
    })

    it('Call set + subscribe', () => {
        const unsub = store.subscribe(val => {
            expect(val).toBe(10)
        })
        store.set(10)
        unsub()
    })
})