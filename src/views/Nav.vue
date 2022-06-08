<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #4f4e4e">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Toggle button -->
        <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Navbar brand -->
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
                src="../assets/img/shop.png"
                height="50"
                alt="Shopping-card"
                loading="lazy"
            />
          </a>
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to='/'>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to='/products'>Products</router-link>
            </li>
<!--            <li class="nav-item">-->
<!--              <router-link class="nav-link" to='/cart'>-->
<!--                <i class="fas fa-shopping-cart">-->
<!--                  <small class="badge badge-danger" style="font-size: 9px">{{ cart.length }}</small>-->
<!--                </i>-->
<!--              </router-link>-->
<!--            </li>-->
          </ul>
          <!-- Left links -->

        </div>
        <div class="d-flex align-items-center">
          <!-- Icon -->
          <router-link class="nav-link" to='/cart'>
            <i class="fas fa-shopping-cart" style="color: #a7a3a3">
              <small class="badge badge-danger" style="font-size: 9px">{{ cart.length }}</small>
            </i>
          </router-link>
        </div>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
  data() {
    return {
      cart: [],
    }
  },
  created() {
    this.cart = this.$root.cart;
  }
}
</script>

