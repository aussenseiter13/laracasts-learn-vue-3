import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            this.count < 10 ? this.count++ : this.count
        },
        decrement() {
            this.count <= 0 ? (this.count = 0) : (this.count -= 1)
        }
    },
    getters: {
        remaining() {
            return 10 - this.count
        }
    }
})
