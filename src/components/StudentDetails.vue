<!-- Components/StudentDetails.vue -->
<template>
  <div>
    <p>Nombre: {{ student.name }}</p>
    <p>Email: {{ student.email }}</p>
    <p>Grupo: {{ student.group }}</p>
    <router-link to="/List">Volver a la lista</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useStudentsStore } from '@/stores/StudentsStore'

const route = useRoute()
const studentsStore = useStudentsStore()

const studentId = parseInt(route.params.id)
const student = studentsStore.currentStudent

studentsStore.getStudent(studentId)
</script>
