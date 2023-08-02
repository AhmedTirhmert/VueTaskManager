export interface Task {
  id: string
  assignedTo: string
  description: string
  priority: string
  date: string
}
export type Status = 'to do' | 'in progress' | 'in testing' | 'done'
export type Priority = 'low' | 'medium' | 'high'

export interface NewTask {
  description: string
  user: string
  priority: Priority
  issueDate: string
  status: Status
}
