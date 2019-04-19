import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBXNBSdd6GSdbFKpomvYVhl9fYMHr22D8k',
    libraries: 'places', 
  },
})