<template>
  <div
    class="panel-backdrop opacity-0 pointer-events-none w-full h-screen absolute top-0 left-0 bg-zinc-900/70 overflow-hidden z-10"
    :class="{ 'show-backdrop': isOpen }"
    @click="emit('hide')"
  >
    <div
      class="panel fixed right-0 top-0 h-screen bg-blue-panel shadow-zinc-500/50 w-full md:w-1/4 transition-all delay-100 duration-300 p-5 py-8 flex flex-col align-middle gap-14"
      :class="{ 'show-panel': isOpen }"
      @click.stop=""
    >
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-3xl">Create Task</h2>
        <close @click="emit('hide')" />
      </div>

      <form
        @submit.prevent="createTask"
        @reset="closePanel"
        class="flex flex-col gap-5 flex-1 justify-between"
      >
        <div class="flex flex-col gap-5">
          <div>
            <label for="status" class="block mb-2 text-sm font-medium text-gray-300">Status:</label>
            <select
              required
              v-model="newTask.status"
              id="status"
              class="text-gray-100 bg-blue-card rounded-lg border border-blue-card/50 focus:ring-blue-primary/70 focus:border-blue-primary/70 block w-full px-2.5"
            >
              <option value="to do">To Do</option>
              <option value="in progress">In Progress</option>
              <option value="in testing">In Testing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
            <label for="taskDescription" class="block mb-2 text-sm font-medium text-gray-300"
              >Task Description:</label
            >
            <textarea
              required
              v-model="newTask.description"
              id="taskDescription"
              rows="6"
              class="block p-2.5 w-full max-h-60 text-sm text-gray-100 bg-blue-card rounded-lg border border-blue-card/50 focus:ring-blue-primary/70 focus:border-blue-primary/70"
              placeholder="Enter task description ... "
            ></textarea>
          </div>

          <div>
            <label for="users" class="block mb-2 text-sm font-medium text-gray-300"
              >Assign To:</label
            >
            <select
              required
              v-model="newTask.user"
              id="users"
              class="text-gray-100 bg-blue-card rounded-lg border border-blue-card/50 focus:ring-blue-primary/70 focus:border-blue-primary/70 block w-full px-2.5"
            >
              <option selected value="" disabled>Select User</option>
              <option value="jhon doe">Jhon Doe</option>
              <option value="ahmed tirhmert">Ahmed Tirhmert</option>
            </select>
          </div>
          <div>
            <label for="priority" class="block mb-2 text-sm font-medium text-gray-300"
              >Priority:</label
            >
            <select
              required
              v-model="newTask.priority"
              id="priority"
              class="text-gray-100 bg-blue-card rounded-lg border border-blue-card/50 focus:ring-blue-primary/70 focus:border-blue-primary/70 block w-full px-2.5"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label for="issueDate" class="block mb-2 text-sm font-medium text-gray-300"
              >Issue Date:</label
            >
            <input
              required
              v-model="newTask.issueDate"
              id="issueDate"
              type="datetime-local"
              :max="new Date().toISOString().split('T')[0]"
              class="block p-2.5 w-full text-sm text-gray-100 bg-blue-card rounded-lg border border-blue-card/50 focus:ring-blue-primary/70 focus:border-blue-primary/70"
            />
          </div>
        </div>
        <div class="flex">
          <button
            type="submit"
            class="w-1/2 text-white block transition-colors delay-100 bg-blue-primary hover:bg-blue-primary/75 disabled:bg-slate-600/80 disabled:cursor-progress focus:ring-0 font-medium rounded-md text-sm px-5 py-2 mr-2 mb-2"
            :disabled="isSaving"
          >
            <span v-if="isSaving"><Spinner /> Saving...</span>
            <span v-else>Save</span></button
          ><button
            type="reset"
            class="w-1/2 text-white block bg-rose-500 hover:bg-rose-500/75 transition-colors delay-100 focus:ring-0 font-medium rounded-md text-sm px-5 py-2 mr-2 mb-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Close from './icons/close.vue'
import Spinner from './partials/Spinner.vue'
import { NewTask } from '@types'
import { useStore } from 'vuex'
import { key } from '@store'
import { generateTaskId } from '../utils/index'
interface props {
  isOpen: boolean
}

//PROPS & EMITS
const emit = defineEmits(['hide'])
const props = withDefaults(defineProps<props>(), {
  isOpen: false
})

//COMPOSABLES
const store = useStore(key)
//VARIABLES
const newTask = ref<NewTask>({
  description: '',
  user: '',
  priority: 'medium',
  issueDate: new Date().toISOString().substring(0, 10),
  status: 'to do'
})

//LOADINGS
const isSaving = ref<boolean>(false)

//FUNCTIONS
const closePanel = () => {
  emit('hide')
  resetTaskObject()
}
const resetTaskObject = () => {
  newTask.value = {
    description: '',
    user: '',
    priority: 'medium',
    issueDate: new Date().toISOString().substring(0, 10),
    status: 'to do'
  }
}
const createTask = async () => {
  try {
    isSaving.value = true
    await store.dispatch('createTask', { id: generateTaskId(), ...newTask.value })
    resetTaskObject()
    emit('hide')
  } catch (error) {
    console.log(error)
  } finally {
    isSaving.value = false
  }
}
//COMPUTED & WATCHERS
watch(
  () => props.isOpen,
  () => document.getElementsByTagName('body')[0].classList.toggle('overflow-hidden')
)

//LIFE CYCLE HOOKS
</script>

<style scoped>
.panel {
  transition: all 0.3s ease-in-out;
  transform: translateX(100%);
}
.show-backdrop {
  opacity: 100%;
  pointer-events: all;
}
.show-panel {
  transform: translateX(0%);
}
</style>
