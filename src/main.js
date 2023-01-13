import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import './styles/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(pinia).mount('#app')
