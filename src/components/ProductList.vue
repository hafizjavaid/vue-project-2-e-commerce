<template>
  <div class="py-5">
    <div class="container">
      <Title :name="name" :title="title"></Title>
      <div class="row">
        <Product v-for="product in getProducts" :key="product.id" :product="product"></Product>
      </div>
      <!-- <h1>{{getProducts[0]}}HELLO</h1> -->
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
import Title from "./Title.vue";
// import { dataa } from "../data.js";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "Our",
      title: "products"
    };
  },
  components: {
    Product,
    Title
  },

  computed: {
    ...mapGetters(["getProducts"]),
    ...mapActions(["setActualProduct"])
  },
  created() {
    this.$store.dispatch("setActualProduct");
  }
};
</script>

<style>
h1 {
  color: #000;
}
</style>