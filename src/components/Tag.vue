<template>
  <span
    class="uppercase bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
    :class="{
      'bg-blue-900 text-blue-300': props.color == 'blue',
      'bg-red-900 text-red-300': props.color == 'red',
      'bg-yellow-900 text-yellow-300': props.color == 'yellow'
    }"
    >{{ props.text }}</span
  >
</template>

<script setup lang="ts">
interface props {
  color: string
  text: string
}

const props = defineProps<props>()
</script>

<style scoped></style>
