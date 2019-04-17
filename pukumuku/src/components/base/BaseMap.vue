<template>
  <GmapMap
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    <GmapMarker
      :position="position"
      :title="title"
      :clickable="true"
      :draggable="true"
    />
  </GmapMap>
</template>

<script>
export default {
  name: 'BaseMap',
  data () {
    return {
      center: {lat: 35.6820438, lng: 139.66721},
      zoom: 17,
      position: {lat: 35.6820438, lng: 139.66721},
      title: 'パン工房プクムク'
    }
  },
  mounted () {
  // At this point, the child GmapMap has been mounted, but
  // its map has not been initialized.
  // Therefore we need to write mapRef.$mapPromise.then(() => ...)

  this.$refs.mapRef.$mapPromise.then((map) => {
    map.panTo({lat: 35.6820438, lng: 139.66721})
  })
  }
}
</script>
