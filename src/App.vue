<template>
  <main class="w-screen">
    <section class="h-screen pt-16 container px-1 md:mx-auto">
      <TasksBoard></TasksBoard>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Modal } from 'flowbite'
import TasksBoard from './components/TasksBoard.vue'
const isOpen = ref(false)
const modal = new Modal(document.getElementById('defaultModal'))
</script>

<style scoped></style>
