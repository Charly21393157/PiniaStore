<!-- Components/AddStudent.vue -->
<template>
  <div>
    <form @submit.prevent="addStudent">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="newStudent.name" required /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="newStudent.email" required /><br />
      <label for="group">Grupo:</label>
      <input type="text" id="group" v-model="newStudent.group" required /><br />
      <button type="submit">Agregar Estudiante</button>
    </form>
    <router-link to="/List">Volver a la lista</router-link>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStudentsStore } from '@/stores/StudentsStore'

const studentsStore = useStudentsStore()
const newStudent = reactive({
  name: '',
  email: '',
  group: ''
})

const addStudent = async () => {
  await studentsStore.createStudent(newStudent)
  newStudent.name = ''
  newStudent.email = ''
  newStudent.group = ''
  window.alert('Alumno Registrado Correctamente.')
  await studentsStore.getStudents()
}
</script>
