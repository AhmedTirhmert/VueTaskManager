<template>
  <div class="mx-5 pt-16 text-white flex flex-col h-full min-h-screen py-14">
    <NewTaskPanel :is-open="isNewTaskPanelOpen" @hide="isNewTaskPanelOpen = false" />
    <EditTaskPanel
      :is-open="isEditTaskPanelOpen"
      @hide="isEditTaskPanelOpen = false"
      :task="selectedTask"
    />
    <div class="mb-10 flex align-middle justify-between items-center">
      <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">Vue Task Manager</h1>
      <button
        @click="() => (isNewTaskPanelOpen = true)"
        type="button"
        class="text-white bg-blue-primary hover:bg-white hover:text-blue-primary focus:outline-none transition-all duration-300 focus:ring-gray-100 text-sm md:text-md font-roboto-mono font-bold rounded-md px-10 py-2 text-center inline-flex items-center mr-2 mb-2"
      >
        Create
      </button>
    </div>
    <div
      class="grid grid-cols-1 gap-5 items-center justify-between xl:grid-cols-4 md:grid-cols-2 flex-1"
    >
      <TasksColumn title="to do" :tasks="store.getters._todoTasks" @task="taskHasBeenSelected" />
      <TasksColumn
        title="in progress"
        :tasks="store.getters._inProgressTasks"
        @task="taskHasBeenSelected"
      />
      <TasksColumn
        title="in testing"
        :tasks="store.getters._inTestingTasks"
        @task="taskHasBeenSelected"
      />
      <TasksColumn title="Done" :tasks="store.getters._doneTasks" @task="taskHasBeenSelected" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TasksColumn from './TasksColumn.vue'
import NewTaskPanel from './NewTaskPanel.vue'
import EditTaskPanel from './EditTaskPanel.vue'
import { Task } from '@types'
import { useStore } from 'vuex'
import { key } from '@store'
//PROPS & EMITS

//COMPOSABLES
const store = useStore(key)
//VARIABLES
const isNewTaskPanelOpen = ref(false)
const isEditTaskPanelOpen = ref(false)
const selectedTask = ref<Task>()

//LOADINGS

//FUNCTIONS
const taskHasBeenSelected = (task: Task) => {
  selectedTask.value = task
  isEditTaskPanelOpen.value = true
}

//COMPUTED & WATCHERS

//LIFE CYCLE HOOKS
onMounted(() => {
  store.dispatch('loadTasks')
})
</script>

<style scoped></style>
