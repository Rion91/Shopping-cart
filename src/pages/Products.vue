<template>
  <Master>
    <Loader v-show="isLoad"/>

    <div>
      <div v-show="!isLoad" class="container">
        <div class="row">

          <div class="col-md-4" v-for="p in products" :key="p.id">
            <div class="card p-3 m-3" style="background-color: #d8d8d7">

              <img :src="p.image">

              <div class="card-body">
                <h5 class="card-title">{{ p.name }}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <div class="card-footer">
                  <span>Price: <small>{{ p.price }}</small></span>
                  <a @click="addToCart(p)" class="btn btn-dark float-end">Add to cart</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Master>
</template>

<script>
import Master from '../views/Master'
import Loader from '../components/Loader'
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  components: {Master, Loader},
  data() {
    return {
      isLoad: true,
      products: [],
    };
  },
  methods: {
    addToCart: function (p) {
      var cart = this.$root.cart;

      var isCart = cart.find((c) => {
        return c.id === p.id;
      })

      if (isCart) {
        isCart.qty++
      } else {
        cart.push({...p, qty: 1});

      }

    }
  },

  created() {
    axios.get(`http://localhost:3000/products`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.products = response.data;
          this.isLoad = false
        })
        .catch(e => {
          this.errors.push(e)
        })
  }
}
</script>
