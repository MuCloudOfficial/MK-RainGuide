import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Overview from './views/Overview.vue'
import DataViewer from './views/DataViewer.vue'

const routes = [
  { path: '/', name: 'Overview', component: Overview },
  { path: '/dataviewer', name: 'DataViewer', component: DataViewer },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')
