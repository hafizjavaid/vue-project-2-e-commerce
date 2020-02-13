<template>
  <div class="row my-2 text-capitalize text-center">
    <div class="col-10 mx-auto col-lg-2">
      <img :src="cartItem.img" alt class="img-fluid mine-img" />
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <span class="d-lg-none">product :</span>
      {{cartItem.title}}
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <span class="d-lg-none">price :</span>
      {{cartItem.price}}
    </div>
    <div class="col-10 mx-auto col-lg-2 my-lg-0">
      <div class="d-flex justify-content-center">
        <span class="btn btn-black mx-1" @click="decrement(cartItem.id)">-</span>
        <span class="btn btn-black mx-1">{{cartItem.count}}</span>
        <span class="btn btn-black mx-1" @click="increment(cartItem.id)">+</span>
      </div>
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <div class="cart-icon" @click="removeItem(cartItem.id)">
        <i class="fas fa-trash"></i>
      </div>
    </div>
    <div class="col-10 mx-auto col-lg-2">
      <strong>item total : $ {{cartItem.total}}</strong>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartItem"],
  methods: {
    decrement(id) {
      this.$store.dispatch("decrement", id);
    },
    increment(id) {
      this.$store.dispatch("increment", id);
    },
    removeItem(id) {
      this.$store.dispatch("removeItem", id);
    }
  }
};
</script>

<style scoped>
:root {
  --mainBlue: #2a2a72;
  --lightBlue: #009ffd;
  --mainWhit: #f3f3f3;
  --mainDark: #232528;
  --mainYellow: #ffa400;
}
.mine-img {
  width: 5rem;
  height: 5rem;
}
.btn-black {
  background: transparent;
  text-transform: capitalize;
  font-size: 0.8rem !important;
  color: #232528;
  border-radius: 0 !important;
  border: 0.1rem solid #232528;
}
.btn-black:hover {
  background: #232528;
  color: #f3f3f3;
}
.cart-icon {
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffa400;
}
</style>