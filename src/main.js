import './assets/main.css'
import './assets/styles/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faSun, 
  faCarrot, 
  faSpa, 
  faBed, 
  faWalking, 
  faNotesMedical, 
  faSyncAlt, 
  faAllergies, 
  faBone, 
  faBars, 
  faTimes,
  faInfoCircle,
  faUsers,
  faClipboardList,
  faUserMd,
  faChartLine,
  faHeartbeat
} from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(
  faSun, 
  faCarrot, 
  faSpa, 
  faBed, 
  faWalking, 
  faNotesMedical, 
  faSyncAlt, 
  faAllergies, 
  faBone,
  faCalendarCheck,
  faBars,
  faTimes,
  faInfoCircle,
  faUsers,
  faClipboardList,
  faUserMd,
  faChartLine,
  faHeartbeat
)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
