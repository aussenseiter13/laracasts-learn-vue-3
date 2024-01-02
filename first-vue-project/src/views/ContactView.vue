<script setup>
import { useCounterStore } from '@/stores/CounterStore'

let counter = useCounterStore()
</script>

<template>
    <div class="about">
        <h1>Contact Page {{ counter.count }}</h1>
        <br />
        <button @click="counter.decrement()">Decrese</button>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
