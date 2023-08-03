<template>
  <div class="flex flex-col gap-3 py-2 max-h-fit ">
    <Task v-for="task in tasks" :task="task" @click="emit('selectTask', task)"></Task>
  </div>
</template>

<script setup lang="ts">
import type { Task as TaskType } from '@types'
import Task from './Task.vue'
interface props {
  tasks: TaskType[]
}
//PROPS & EMITS
const props = defineProps<props>()
const emit = defineEmits(['selectTask'])
//COMPOSABLES

//VARIABLES

//LOADINGS

//FUNCTIONS

//COMPUTED & WATCHERS

//LIFE CYCLE HOOKS
</script>

<style scoped></style>
