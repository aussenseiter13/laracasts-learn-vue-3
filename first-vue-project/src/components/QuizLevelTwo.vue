<script setup>
import { inject } from 'vue'

let quiz = inject('quiz')
</script>

<template>
    <p>{{ quiz.name }}</p>
</template>
