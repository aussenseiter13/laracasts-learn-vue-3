<script setup>
import TabableTextarea from '@/components/TabableTextarea.vue'
import { ref } from 'vue'

let comment = ref('test comment')
</script>

<template>
    <main>
        <form action="">
            <TabableTextarea v-model="comment" style="width: 100%; height: 300px"></TabableTextarea>
        </form>
    </main>
</template>
