import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import myConfig from '../formkit.config'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faUser, faCakeCandles, faUserPen, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faUser, faCakeCandles, faUserPen, faPhone, faEnvelope )



const head = createHead()
const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(plugin, defaultConfig(myConfig))
app.use(router)
app.use(head)

app.mount('#app')
