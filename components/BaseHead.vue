<template>
  <div class="head">
    <v-img src="img/store_light.jpg" class="head_img">
      <v-img src="img/title_red.png" class="head_title"></v-img>
    </v-img>
  </div>
</template>

<style lang="scss" scoped>
.head_img {
  display: block;
  position: relative;
}
.head_title {
  position: absolute;
  top: 65%;
  left: 75%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  width: 30%;
}
</style>
