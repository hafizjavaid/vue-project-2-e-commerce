<template>
  <div id="app">
    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <router-view></router-view>
        </div>
        <Modal></Modal>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Product from "./components/Product.vue";
// import Details from "./components/Details.vue";
// import Cart from "./components/Cart.vue";
// import Default from "./components/Default.vue";
import Modal from "./components/Modal.vue";
export default {
  components: {
    Navbar,
    Modal
    // Product,
    // Details,
    // Cart,
    // Default
  }
};
</script>

<style>
:root {
  --mainBlue: #2a2a72;
  --lightBlue: #009ffd;
  --mainWhit: #f3f3f3;
  --mainDark: #232528;
  --mainYellow: #ffa400;
}
body {
  background: var(--mainWhit) !important;
  color: #232528 !important;
}
.text-title {
  letter-spacing: 0.3rem;
  text-transform: uppercase;
}
.text-blue {
  color: #2a2a72;
}
</style>
