<template>
  <div
    class="relative mx-3 bg-blue-card rounded-md font-roboto border border-blue-card hover:cursor-pointer hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300"
  >
    <div class="task flex flex-col gap-4 relative p-3 px-4">
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-400 uppercase">#{{ task.id }}</span>
        <span class="text-sm text-gray-400 capitalize">{{ task.user }}</span>
      </div>
      <div>
        <p>{{ task.description }}</p>
      </div>
      <div class="flex items-center justify-between">
        <Tag :text="task.priority" />
        <span class="text-xs text-gray-400 font-roboto-mono tracking-tighter">{{
          useTimeAgo(task.issueDate).value
        }}</span>
      </div>
      <div
        class="delete opacity-0 pointer-events-none bg-zinc-300 p-0.5 rounded-full cursor-pointer"
        @click.stop="isDeleleState = true"
      >
        <trash class="fill-red-600" />
      </div>
    </div>
    <div
      class="transition-all delay-75 duration-100 bg-blue-primary rounded-md absolute opacity-0 pointer-events-none top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2"
      :class="{ 'opacity-100 pointer-events-auto': isDeleleState }"
      @click.stop=""
    >
      Are you sure?
      <div>
        <button
          class="text-white bg-red-600 hover:bg-white hover:text-red-600 focus:outline-none transition-all duration-300 focus:ring-gray-100 text-sm md:text-md font-roboto-mono font-bold rounded-md px-3 py-1 text-center inline-flex items-center mr-2 mb-2"
          @click="deleteTask"
        >
          <span v-if="isDeleting"><Spinner /></span>
          <span v-else>Delete</span>
        </button>
        <button
          class="text-white bg-zinc-500 hover:bg-white hover:text-zinc hover:text-zinc-500 focus:outline-none transition-all duration-300 focus:ring-gray-100 text-sm md:text-md font-roboto-mono font-bold rounded-md px-3 py-1 text-center inline-flex items-center mr-2 mb-2"
          @click="isDeleleState = false"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Task } from '@types'
import Tag from './Tag.vue'
import { useTimeAgo } from '@vueuse/core'
import trash from './icons/trash.vue'
import { useStore } from 'vuex'
import { key } from '@store'
import Spinner from './partials/Spinner.vue'

interface props {
  task: Task
}
//PROPS & EMITS
const props = defineProps<props>()
//COMPOSABLES
const store = useStore(key)
//VARIABLES
const isDeleleState = ref(false)
const isDeleting = ref(false)
//LOADINGS

//FUNCTIONS
const deleteTask = async () => {
  try {
    isDeleting.value = true
    await store.dispatch('deleteTask', props.task.id)
  } catch (error) {
  } finally {
    isDeleting.value = false
  }
}
//COMPUTED & WATCHERS

//LIFE CYCLE HOOKS
</script>

<style lang="scss" scoped>
.delete {
  position: absolute;
  top: -10px;
  right: -10px;
}
.task {
  &:hover {
    .delete {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
