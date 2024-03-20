<!-- Components/StudentList.vue -->
<template>
  <div>
    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} - {{ student.email }} - {{ student.group }}
        <button @click="deleteStudent(student.id)">Eliminar</button>
        <router-link :to="{ name: 'Student', params: { id: student.id } }"
          >Ver Detalles</router-link
        >
      </li>
    </ul>
    <router-link to="/Add">Agregar Estudiante</router-link>
  </div>
</template>

<script setup>
import { useStudentsStore } from '@/stores/StudentsStore'

const studentsStore = useStudentsStore()
const students = studentsStore.students

const deleteStudent = async (studentId) => {
  await studentsStore.deleteStudent(studentId)
  window.alert('Alumno Eliminado.')
}
</script>
