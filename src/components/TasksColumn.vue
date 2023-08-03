<template>
  <div
    class="h-full bg-blue-column min-w-full flex flex-col rounded-md  px-2 pb-3 text-white"
  >
    <span class="m-3 mt-4 font-bold text-gray-300 uppercase">{{ props.title }}</span>
    <TasksList :tasks="tasks" @select-task="taskSelected" />
  </div>
</template>

<script setup lang="ts">
import TasksList from './TasksList.vue'
import { Task } from '@types'
interface props {
  title: string
  tasks: Task[]
}

//PROPS & EMITS
const props = defineProps<props>()
const emit = defineEmits(['task'])
//COMPOSABLES

//VARIABLES

//LOADINGS

//FUNCTIONS
const taskSelected = (task: string) => {
  emit('task', task)
}
//COMPUTED & WATCHERS

//LIFE CYCLE HOOKS
</script>

<style scoped></style>
