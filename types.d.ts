export type Status = 'to do' | 'in progress' | 'in testing' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export interface Task {
  id: string
  description: string
  user: string
  priority: string
  issueDate: string
  status: Status
}

export interface NewTask {
  description: string
  user: string
  priority: Priority
  issueDate: string
  status: Status
}
