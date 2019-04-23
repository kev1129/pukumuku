<template>
  <vuetify-audio :file="cdMp3" :ended="audioFinish"></vuetify-audio>
</template>

<script>
import VuetifyAudio from 'vuetify-audio';

export default {
  props: {
    cdMp3: String
  },
  components: {
    'vuetify-audio': VuetifyAudio
  },
  // If you want to use ended callback add below code
  methods: {
    audioFinish () {
      console.log('You see this means audio finish.');
    }
  },
}
</script>
