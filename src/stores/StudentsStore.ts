// stores/StudentsStore.ts
import { defineStore } from 'pinia'
import type IStudent from '@/interfaces/IStudent'
import {
  fetchStudents,
  fetchStudent,
  createStudent,
  deleteStudent
} from '@/services/StudentService'

export const useStudentsStore = defineStore('students', {
  state: () => ({
    students: [] as IStudent[],
    currentStudent: {} as IStudent
  }),

  actions: {
    async getStudents() {
      this.students = await fetchStudents()
    },

    async getStudent(studentId: number) {
      this.currentStudent = await fetchStudent(studentId)
    },

    async createStudent(studentData: IStudent) {
      await createStudent(studentData)
      await this.getStudents()
    },

    async deleteStudent(studentId: number) {
      await deleteStudent(studentId)
      await this.getStudents()
    }
  }
})
