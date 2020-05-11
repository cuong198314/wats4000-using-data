import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus' 
import CM from '@/views/CM'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },

{
    path: '/',
    name: 'CM',
    component: CM
  }

]

const router = new VueRouter({
  routes
})

export default router
