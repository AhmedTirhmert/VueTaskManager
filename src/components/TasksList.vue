<template>
  <div class="flex flex-col gap-3 py-2 max-h-fit overflow-auto">
    <Task v-for="i in 3"></Task>
  </div>
</template>

<script setup lang="ts">
import Task from './Task.vue'
</script>

<style scoped></style>
