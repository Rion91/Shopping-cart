<template>
  <div>
    <!-- NavBar -->
    <Nav />
    <!--    content-->
    <slot/>
  </div>

</template>

<script>
import Nav from './Nav'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Master.vue",
  components: {Nav},

}
</script>

