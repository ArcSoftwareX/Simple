import { it, expect, describe, bench } from 'vitest'
import { atom } from '../dist'

describe('Getting/Setting store value', () => {
    const store = atom(0)

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