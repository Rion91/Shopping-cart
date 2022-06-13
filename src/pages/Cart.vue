<template>
  <Master>
    <div style="color: white">
      <div class="container">
        <div class="table table-striped text-center">
          <thead>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>+ -</td>
            <td>Qty</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="p in cart" :key="p.id">

            <td>{{ p.name }}</td>
            <td>
              <img :src="p.image" width="20%" alt="" >
            </td>
            <td>
              <span>
                <button @click="addQty(p)" id="btn" class="btn btn-success btn-rounded" style="opacity: 50%;">+</button>
              </span><br>
              <span>
                <button @click="reduceQty(p)" id="btn" class="btn btn-danger btn-rounded" style="opacity: 50%;">-</button>
              </span>
            </td>
            <td>{{ p.qty }}</td>
            <!--{{ p.Qty }}-->
            <td>{{ p.price }}</td>
            <!--{{ p.price }}-->
            <td>{{ p.qty * p.price }}</td>
            <!--{{ qty * price}}-->
          </tr>
          </tbody>


        </div>
      </div>
    </div>
  </Master>
</template>

<script>
import Master from '../views/Master'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cart",
  components: {Master},

  data: function () {
    return {
      cart: [],
    }
  },
  created() {
    this.cart = this.$root.cart;
  },
  methods: {
    addQty(p) {
      p.qty++;
    },
    reduceQty(p) {
      p.qty--;
    }
  }
}
</script>
<style>
  #btn:hover{
    opacity: 100% !important;
  }
</style>
