import { createApp } from 'vue'
import App from './App.vue'
import  { createRouter, createMemoryHistory } from 'vue-router'


import ProductList from './components/ProductList.vue'
import Edit from "./components/EditProduct.vue";
import Create from "./components/AddProduct.vue";


const routes = [
  {
    name: 'Index',
    path: '/',
    component: ProductList
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Creates',
    path: '/create',
    component: Create
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

