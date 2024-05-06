import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicioView from '../views/ServicioView.vue'
import GestionView from '../views/GestionView.vue'
import LogisticaView from '../views/LogisticaView.vue'
import ContactoView from '../views/ContactoView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicio',
    name: 'servicio',
    component: ServicioView
  },
  {
    path: '/gestion',
    name: 'gestion',
    component: GestionView
  },
  {
    path: '/logistica',
    name: 'logistica',
    component: LogisticaView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
