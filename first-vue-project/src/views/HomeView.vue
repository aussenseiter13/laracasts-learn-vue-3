<script setup>
import { ref, watch } from 'vue'
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food')
</script>

<template>
    <main>
        <p>What is your favourite food?</p>
        <input type="text" v-model="food" @input="write" />
    </main>
</template>
