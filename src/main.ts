import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import '@/styles/main.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from '@/store'
import screen from '@/utils/screen-variables'

const app = createApp(App)
app.use(ElementPlus)
app.use(router).use(store).mount('#app')
app.use(store)

app.config.globalProperties.$screen = screen

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(require.context('@/assets/icons/', true, /\.svg$/))
