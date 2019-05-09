<template>
  <v-layout v-resize="onResize" column align-center justify-center>
    <v-subheader>Window Size</v-subheader>
    {{ windowSize }}
    <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
  </v-layout>
</template>

<script>
import BaseMap from '~/components/BaseMap.vue'

  export default {
      components: {
          BaseMap
      },
    data: () => ({
      windowSize: {
        x: 0,
        y: 0
      }
    }),

    mounted () {
      this.onResize()
    },

    methods: {
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      }
    }
  }
</script>