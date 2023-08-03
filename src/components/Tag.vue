<template>
  <span
    class="uppercase bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
    :class="{
      'bg-blue-900 text-blue-200': color === 'blue',
      'bg-red-900 text-red-300': color === 'red',
      'bg-yellow-900 text-yellow-300': color === 'yellow'
    }"
    >{{ props.text }}</span
  >
</template>

<script setup lang="ts">
interface props {
  text?: string
}
//PROPS & EMITS
const props = defineProps<props>()

//COMPOSABLES

//VARIABLES

//LOADINGS

//FUNCTIONS

//COMPUTED & WATCHERS
const color = computed(() => {
  switch (props.text) {
    case 'low':
      return 'blue'
    case 'medium':
      return 'yellow'
    case 'high':
      return 'red'

    default:
      return 'blue'
  }
})
//LIFE CYCLE HOOKS
</script>

<style scoped></style>
