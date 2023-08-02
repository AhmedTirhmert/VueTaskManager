<template>
  <div class="mx-5 flex flex-col gap-5 items-center justify-between md:bg-slate-300 md:flex-row">
    <ToDoTasks></ToDoTasks>
    <InProgressTasks></InProgressTasks>
    <InTestingTasks></InTestingTasks>
    <DoneTasks></DoneTasks>
  </div>
</template>

<script setup lang="ts">
import ToDoTasks from './ToDoTasks.vue'
import InProgressTasks from './InProgressTasks.vue'
import InTestingTasks from './InTestingTasks.vue'
import DoneTasks from './DoneTasks.vue'
</script>

<style scoped></style>
