<template>
  <div
    class="mx-3 bg-blue-card rounded-md p-3 px-4 font-roboto flex flex-col gap-4 border border-blue-card hover:cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300"
  >
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-400">#1234</span>
      <span class="text-sm text-gray-400">Ahmed Tirhmert</span>
    </div>
    <div>
      <p>Task Description</p>
    </div>
    <div class="flex items-center justify-between">
      <Tag text="Medium" color="yellow" />
      <span class="text-xs text-gray-400 font-roboto-mono tracking-tighter">2 Days Ago</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from './Tag.vue'
</script>

<style scoped></style>
