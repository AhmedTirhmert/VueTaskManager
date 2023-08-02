<template>
  <span
    class="uppercase bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded "
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
