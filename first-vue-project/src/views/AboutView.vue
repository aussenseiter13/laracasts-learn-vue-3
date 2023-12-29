<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>

<template>
  <div>
    <p>
      <button @click="flash('Error', 'About Works!', 'error')">Click me</button>
    </p>
  </div>
</template>
