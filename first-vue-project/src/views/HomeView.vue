<script setup>
import Quiz from '@/components/Quiz.vue'
</script>

<template>
    <main>
        <Quiz :quiz="{ name: 'My First Quiz', questions: [] }"></Quiz>
    </main>
</template>
