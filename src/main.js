import { createApp } from 'vue'
import App from '@/App.vue'
import routes from './routes'
import '@assets/index.css'

createApp(App)
  .use(routes)
  .mount('#app')
