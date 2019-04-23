<template>
  <v-tabs fixed-tabs>
    <v-tab>
      {{ tabTitle }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: {
    tabTitle: String,
    tabId: Number
  }
}
</script>