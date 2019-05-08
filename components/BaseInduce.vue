<template>
  <nuxt-link
    :to="link"
    class="induce"
  >
    <span class="induce_text">
      <i class="fas fa-angle-right induce_icon"></i>{{ text }}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
.induce {
  position: relative;
  display: inline-block;
  color: #1B1B1B;
  text-decoration: none;
  .induce_text {
    font-family: 'Sawarabi Gothic';
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0;
    .induce_icon {
      margin-right: 8px;
    }
  }
}
.induce:hover {
  cursor: pointer;
  text-decoration: none;
}
.induce::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 3px;
  background: #000;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform .3s;
}
.induce:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>