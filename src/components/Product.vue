<template>
  <div class="col-9 mx-auto col-md-6 col-lg-3 my-3 product-wrapper">
    <div class="card">
      <div class="img-container p-5" @click="handleDetail(product.id)">
        <router-link to="/details">
          <img :src="product.img" alt="Product" class="card-img-top" />
        </router-link>
        <button
          class="cart-btn"
          @click="addToCart(product.id)"
          :disabled="product.inCart ? true : false"
        >
          <p v-if="product.inCart" class="text-capitalize mb-0" disabled>In Cart</p>
          <i v-else class="fas fa-cart-plus"></i>
        </button>
      </div>
      <!-- card footer -->
      <div class="card-footer d-flex justify-content-between">
        <p class="align-self-center mb-0">{{product.title}}</p>
        <h5 class="text-blue font-italic mb-0">
          <span class="mr-1">$</span>
          {{product.price}}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  props: ["product"],
  methods: {
    handleDetail(id) {
      this.$store.dispatch("handleDetail", id);
    },
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
      this.$store.dispatch("openModal", id);
    }
  }
};
</script>

<style scoped>
.card {
  border: transparent;
  transition: all 1s linear;
}
.card-footer {
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}
.product-wrapper:hover .card {
  border: 0.04rem solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
}
.product-wrapper:hover .card-footer {
  background: rgb(247, 247, 247);
}
.img-container {
  position: relative;
  overflow: hidden;
}
.card-img-top {
  transition: all 1s ease-in;
}
.img-container:hover .card-img-top {
  transform: scale(1.2);
}
.cart-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: var(--lightBlue);
  border: none;
  color: var(--mainWhit);
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  transform: translate(100%, 100%);
  transition: all 1s ease-in;
}
.img-container:hover .cart-btn {
  transform: translate(0, 0);
}
</style>