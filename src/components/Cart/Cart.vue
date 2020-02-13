<template>
  <div>
    <section v-if="getCart.length > 0">
      <Title :name="name" :title="title"></Title>
      <CartCol></CartCol>
      <CartList></CartList>
      <CartTotal></CartTotal>
    </section>
    <section v-else>
      <div class="container-fluid text-center d-none d-lg-block">
        <div class="row">
          <div class="col-10 mx-auto text-center text-title">
            <h1>your cart is currently empty</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Title from "../Title.vue";
import CartCol from "./CartColumns.vue";
import CartList from "./CartList.vue";
import CartTotal from "./CartTotal.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "your",
      title: "cart"
    };
  },
  components: {
    Title,
    CartCol,
    CartList,
    CartTotal
  },
  computed: {
    ...mapGetters(["getCart"])
  }
};
</script>

<style>
</style>