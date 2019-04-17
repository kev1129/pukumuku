<template>
  <a v-bind:href="button_link" class="btn">
     {{button_Text}}
  </a>
</template>

<script>
export default {
  name:'BaseButton',
  props: {
    button_link: String,
    button_text: String
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  color: #000;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 12px 32px;
  letter-spacing: 0.1rem;
  text-decoration: none;
  transition: all 0.3s;
}
.btn:hover {
  color: #fff;
  background-color: #000;
  transition: all 0.3s;
}
</style>
