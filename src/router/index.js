import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import loginView from '../views/LoginView.vue';
import registerView from '../views/RegisterView.vue';
import chatView from '../views/ChatView.vue';
import hospitalView from '../views/HospitalsView.vue'
import PharmacyView from '../views/PharmacyView.vue'
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/',
      name:'login',
      component:loginView
    },
   
    {
      path:'/register',
      name:'register',
      component: registerView
    },
   {
     path:'/chat',
    name:'chat',
    component:chatView
  },
  {
    path:'/hospitals',
    name:'hospitals',
    component:hospitalView
  },
  {
    path:'/pharmacys',
    name:'pharmacys',
    component:PharmacyView
  }
    // ... other routes
  ],
});

export default router;
