import { describe, it, expect } from "vitest";
import { kv } from "../src";

describe('Key-value store functionality test', () => {
    const store = kv({ test: true })
    
    it('Call getKey or setKey', () => {
        store.setKey('test', false)
        expect(store.getKey('test')).toBe(false)
    })
})