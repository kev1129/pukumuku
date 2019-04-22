<template>
  <vuetify-audio :file="file" :ended="audioFinish"></vuetify-audio>
</template>

<script>
import VuetifyAudio from 'vuetify-audio';

export default {
  data() {
    return {
      file: 'http://www.noiseaddicts.com/samples_1w72b820/290.mp3',
      // file: require('../assets/mp3/2.mp3')
    };
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
