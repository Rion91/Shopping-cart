<template>
  <div>
    <Master>
      <header>
        <!-- Background image -->
        <div
            class="p-5 text-center bg-image"
            style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');height: 718px;">
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">Hello</h1>
                <h4 class="mb-3">Welcome to Dream Shop</h4>
                <router-link class="btn btn-outline-light btn-lg" to="/products" role="button">Go to Products list</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- Background image -->
      </header>
    </Master>
  </div>
</template>

<script>
import Master from "@/views/Master";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {Master},
}
</script>

<style scoped>

</style>
