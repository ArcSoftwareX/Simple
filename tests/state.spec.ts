import { it, expect, describe } from 'vitest'
import { createState } from '../src'

describe('State', () => {
    const state = createState({ count: 0 }, {
        increment: (state) => {
            return { count: state.count + 1 }
        },
        set: (_, payload) => {
            return { count: payload.value }
        }
    })

    it('Call dispatch + subscribe', () => {
        const unsub = state.subscribe(val => expect(val.count).toBe(1))
        state.dispatch('increment')
        unsub()
    })

    it('Call dispatch with payload + subscribe', () => {
        const unsub = state.subscribe(val => expect(val.count).toBe(10))
        state.dispatch('set', 10)
        unsub()
    })
})