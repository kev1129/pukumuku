<template>
  <v-btn @click="$vuetify.goTo(selector, options)" flat>Back To Top</v-btn>
</template>

<script>
import * as easings from 'vuetify/es5/util/easing-patterns'
export default {
  data () {
    return {
      selector: '#top',
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
    }
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  }
}
</script>