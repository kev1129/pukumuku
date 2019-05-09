<template>
  <vuetify-audio :file="file" :ended="audioFinish"></vuetify-audio>
</template>

<script>
import VuetifyAudio from 'vuetify-audio'

export default {
  props: {
    file: String
  },
  components: {
    VuetifyAudio
  },
  // If you want to use ended callback add below code
  methods: {
    audioFinish () {
      console.log('You see this means audio finish.');
    }
  },
}
</script>
