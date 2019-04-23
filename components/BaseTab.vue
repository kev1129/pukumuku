<template>
  <v-tabs fixed-tabs>
    <v-tab
      v-on:click="selectedGenre"
    >
      {{ tabTitle }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: {
    tabMenu: String,
    id: Number
  },
  methods: {
    selectedGenre: function() {
      this.$emit('selected-genre', id)
    }
  }
}
</script>
