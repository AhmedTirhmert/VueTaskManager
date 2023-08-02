<template>
  <div
    class="bg-blue-column min-w-full flex flex-col rounded-md overflow-hidden px-2 pb-3 text-white"
  >
    <span class="p-2 font-bold text-gray-300 uppercase">To Do</span>
    <TasksList />
  </div>
</template>

<script setup lang="ts">
import TasksList from './TasksList.vue'
</script>

<style scoped></style>
