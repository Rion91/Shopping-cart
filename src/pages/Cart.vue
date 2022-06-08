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
<!--          Todo api data pass-->
          <tr>
            <!--v-for="(p.i) in cart" :key="i"-->
            <td>Name</td>
            <td>
              <img src="https://picsum.photos/300/300?random=4" width="10%" alt="">
            </td>
            <td>
              <span>
                <button @click="addQty(p)" class="btn btn-success btn-rounded">+</button>
              </span><br>
              <span>
                <button @click="reduceQty(p)" class="btn btn-danger btn-rounded">-</button>
              </span>
            </td>
            <td>2</td>
            <!--{{ p.Qty }}-->
            <td>$100</td>
            <!--{{ p.price }}-->
            <td>$200</td>
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
  methods:{
    addQty(p){
      p.qty++;
    },
    reduceQty(p){
      p.qty--;
    }
  }
}
</script>
