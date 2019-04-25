<template>
  <div class="box">
     <img src="img/instagram.png" class="img">
     <img src="img/instagram-icon.png" class="insta">
  </div>
</template>

<style lang="scss">
.box {
  position: relative;
  .img {
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  .insta {
    position: absolute;
    width: 9.5%;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin:0;
    padding:0;
  }
}
</style>
