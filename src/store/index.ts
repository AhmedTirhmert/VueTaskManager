import type { InjectionKey } from 'vue'
import type { Task } from '../../types'
import type { ActionContext } from 'vuex/types/index.js'
import { api } from '@/plugins/axios'
import { createStore, Store } from 'vuex'
interface State {
  tasks: Task[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    tasks: []
  },
  mutations: {
    SET_TASKS(state: State, tasks: Task[]) {
      state.tasks = tasks
    },
    ADD_TASK(state: State, task: Task) {
      state.tasks.push(task)
    },
    UPDATE_TASK(state: State, updatedTask: Task) {
      const index = state.tasks.findIndex((t: Task) => t.id === updatedTask.id)
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask)
      }
    },
    DELETE_TASK(state: State, taskId: string) {
      state.tasks = state.tasks.filter((task: Task) => task.id !== taskId)
    }
  },
  actions: {
    async loadTasks({ commit }: ActionContext<State, State>) {
      try {
        const { data } = await api.get('/tasks')
        commit('SET_TASKS', data)
      } catch (error) {
        console.log(error)
      }
    },
    async createTask({ commit }: ActionContext<State, State>, newTask: Task) {
      try {
        const response = await api.post('/tasks', newTask)
        console.log(response)
        commit('ADD_TASK', newTask)
      } catch (error) {
        console.log(error)
      }
    },
    async updateTask({ commit }: ActionContext<State, State>, updatedTask: Task) {
      try {
        const response = await api.put(`/tasks/${updatedTask.id}`, updatedTask)
        console.log(response)
        commit('UPDATE_TASK', updatedTask)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTask({ commit }: ActionContext<State, State>, taskId: number) {
      try {
        const response = await api.delete(`/tasks/${taskId}`)
        console.log(response)
        commit('DELETE_TASK', taskId)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    _allTasks(state: State) {
      return state.tasks
    },

    _TaskById: (state: State) => (taskId: string) => {
      return state.tasks.find((task) => task.id === taskId)
    },

    _todoTasks(state: State) {
      return state.tasks.filter((task: Task) => task.status === 'to do')
    },
    _inProgressTasks(state: State) {
      return state.tasks.filter((task: Task) => task.status === 'in progress')
    },
    _inTestingTasks(state: State) {
      return state.tasks.filter((task: Task) => task.status === 'in testing')
    },
    _doneTasks(state: State) {
      return state.tasks.filter((task: Task) => task.status === 'done')
    }
  }
})
