<template>
  <div class="mx-5 pt-16 text-white flex flex-col h-full min-h-screen py-14">
    <NewTaskPanel :is-open="isNewTaskPanel" @hide="isNewTaskPanel = false" />
    <div class="mb-10 flex align-middle justify-between items-center">
      <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">Vue Task Manager</h1>
      <button
        @click="() => (isNewTaskPanel = true)"
        type="button"
        class="text-white bg-blue-primary hover:bg-white hover:text-blue-primary focus:outline-none transition-all duration-300 focus:ring-gray-100 text-sm md:text-md font-roboto-mono font-bold rounded-md px-10 py-2 text-center inline-flex items-center mr-2 mb-2"
      >
        Create
      </button>
    </div>
    <div
      class="grid grid-cols-1 gap-5 items-center justify-between xl:grid-cols-4 md:grid-cols-2 flex-1"
    >
      <TasksColumn title="to do" :tasks="[]" />
      <TasksColumn title="in progress" :tasks="[]" />
      <TasksColumn title="in testing" :tasks="[]" />
      <TasksColumn title="Done" :tasks="[]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TasksColumn from './TasksColumn.vue'
import NewTaskPanel from './NewTaskPanel.vue'
const isNewTaskPanel = ref(false)
</script>

<style scoped></style>
