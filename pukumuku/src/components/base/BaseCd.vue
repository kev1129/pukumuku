<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="500"
    >
      <v-img
        :aspect-ratio="1"
        :src="image_url"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal"
            style="height: 100%;"
          >
            {{ cd_title }}
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
    name: 'BaseCd',
    props: {
        cd_title: String,
        image_url: String
    }
}
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
  color: #000;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
}
</style>