<template>
  <GmapMap
    :center="{lat:35.682181, lng:139.669296}"
    :zoom="17"
    map-type-id="terrain"
    :style="{width: mapWidth + 'px',height: mapHeight + 'px'}"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
export default {
  props: {
    mapWidth: Number,
    mapHeight: Number
  },
  data() {
    return {
      markers: [
        {position: {lat:35.682181, lng:139.669296}},
      ]
    };
  },
};
</script>
