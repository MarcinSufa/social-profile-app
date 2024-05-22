import { createRouter, createWebHistory } from 'vue-router'

import UserInformationPage from '@/pages/UserInformation.vue'
import UserInfoForm from '@/pages/UserInfoForm.vue'

const routes = [
  {
    path: '/user-profile/',
    component: UserInformationPage,
    meta: {
      title: 'User Profile',
    },
  },
  {
    path: '/user-information-form/',
    component: UserInfoForm,
    meta: {
      title: 'User Form'
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
