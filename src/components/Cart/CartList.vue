<template>
  <div class="container-fluid">
    <CartItem v-for="cartItem in getCart" :key="cartItem.id" :cartItem="cartItem"></CartItem>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(["getCart"])
  }
};
</script>

<style>
</style>