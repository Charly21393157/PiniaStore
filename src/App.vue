<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav>
      <h1>DASHBOARD</h1>
      <h4>Este Sistema funciona agregando un Estudiante</h4>
      <ul>
        <li><Router-link to="/">Inicio</Router-link></li>
        <li><Router-link to="/List">Lista de Estudiantes</Router-link></li>
        <li><Router-link to="/Add">Agregar Estudiante</Router-link></li>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
}

nav {
  background-color: #333;
  color: white;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
}

nav ul li a {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  background-color: #555;
}
</style>
