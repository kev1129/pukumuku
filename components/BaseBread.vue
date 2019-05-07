<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="white"
      flat
    >
      <v-img
        :aspect-ratio="1"
        :src="breadUrl"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out red v-card--reveal white--text"
            style="height: 100%;"
          >
            <h2 class="name">{{ breadName }}</h2>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    breadName: String,
    breadUrl: String,
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
}
.name {
  display: block;
  text-align: center;
  font-size: 2rem;
}
</style>