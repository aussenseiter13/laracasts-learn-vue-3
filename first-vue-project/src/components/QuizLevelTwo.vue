<script setup>
import { state } from '@/stores/quizStore'
</script>

<template>
    <p>{{ state.name }}</p>
    <button @click="state.name = 'LUDILOO'">Change Quiz Name</button>
</template>
