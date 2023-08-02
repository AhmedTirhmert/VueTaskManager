<template>
  <div
    class="h-full bg-blue-column min-w-full flex flex-col rounded-md overflow-hidden px-2 pb-3 text-white "
  >
    <span class="m-3 mt-4 font-bold text-gray-300 uppercase">{{ props.title }}</span>
    <TasksList />
  </div>
</template>

<script setup lang="ts">
import TasksList from './TasksList.vue'
import { Task } from '@types'
interface props {
  title: string
  tasks: Task[]
}
const props = defineProps<props>()
</script>

<style scoped></style>
