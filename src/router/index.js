import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../views/DashboardPage.vue'
import UserAuthentication from '@/views/UserAuthentication.vue'
import Messages from '@/views/MessagesPage.vue'
import Settings from '@/views/SettingsPage.vue'
import Profile from '@/views/ProfilePage.vue'
import Overview from '@/views/OverviewPage.vue'



Vue.use(Router)

const routes = [
 {
  path: '',
  component: Dashboard,
  children: [
    {
      path: '',
      name:'overview',
      component: Overview
    },
    {
      path: 'messages',
      name:'messages',
      component: Messages
    },
    {
      path: 'profile',
      name:'profile',
      component: Profile    },
    {
      path: 'settings',
      name:'settings',
      component:Settings    }
  ]
  },
  {
    path: '/auth',
    name: 'authentication',
    component:UserAuthentication
  },
  
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
