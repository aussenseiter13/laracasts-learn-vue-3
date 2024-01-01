<script setup>
import QuizLevelOne from '@/components/QuizLevelOne.vue'
import { provide, ref } from 'vue'

let props = defineProps({ quiz: Object })

provide('quiz', props.quiz)
</script>

<template>
    <QuizLevelOne :quiz="quiz"></QuizLevelOne>
</template>
