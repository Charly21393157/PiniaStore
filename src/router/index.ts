import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import StudentsListView from '@/views/StudentsListView.vue'
import StudentDetailsView from '@/views/StudentDetailsView.vue'
import AddStudentView from '@/views/AddStudentView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    },
    {
      path: '/List',
      name: 'List',
      component: StudentsListView
    },
    {
      path: '/Student/:id',
      name: 'Student',
      component: StudentDetailsView
    },
    {
      path: '/Add',
      name: 'Add',
      component: AddStudentView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
