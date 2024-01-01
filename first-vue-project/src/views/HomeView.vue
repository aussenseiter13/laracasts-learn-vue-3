<script setup>
import Quiz from '@/components/Quiz.vue'
import { state } from '@/stores/quizStore.js'
</script>

<template>
    <main>
        <h1>{{ state.name }}</h1>
        <Quiz></Quiz>
    </main>
</template>
