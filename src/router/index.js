import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartPage from '../components/CartPage.vue'
import HomePage from '../components/HomePage.vue'
import ProductPage from '../components/ProductPage.vue'

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
    path: '/cart', 
    name: 'cart', 
    component: CartPage
  },
  {
    path: '/homepage', 
    name: 'homepage', 
    component: HomePage
  },
  {
    path: '/product', 
    name: 'product', 
    component: ProductPage, 
    props(route) {
      return {
        title: route.params.title, 
        price: Number(route.params.price), 
        img_src: route.params.img_src,
        description: route.params.description,
        author: route.params.author,
        publisher: route.params.publisher,
        finishing: route.params.finishing, 
        year: Number(route.params.year), 
        language: route.params.language, 
        pages: route.params.pages, 
        id: Number(route.params.id), 
      };
    },
    /* {
      book: {
        title: "Undefined", 
        price: 0.0, 
        img_src: "Undefined",
        description: "Undefined",
        author: "Undefined",
        publisher: "Undefined",
        finishing: "Undefined", 
        year: 0, 
        language: "Undefined", 
        pages: 0, 
        id: 0, 
      }
    }, */
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router