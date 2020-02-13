<template>
  <nav class="navbar navbar-expand-sm px-sm-5" style="background:#2a2a72;">
    <router-link to="/">
      <img :src="require('../img/logo.png')" alt />
    </router-link>
    <ul class="navbar-nav align-items-center">
      <li class="nav-item ml-5">
        <a href="/" class="nav-link">Products</a>
      </li>
    </ul>
    <router-link to="/cart" class="ml-auto">
      <button>
        <span class="mr-2">
          <i class="fas fa-cart-plus"></i>
        </span>
        my cart
      </button>
    </router-link>
  </nav>
</template>

<script>
export default {
  // data() {
  //   return {
  //     navImage: "../img/logo.png"
  //   };
  // }
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
body {
  color: #232528 !important;
}
nav {
  color: #232528 !important;
}
nav .nav-link {
  color: var(--mainWhit) !important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
button {
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  outline: none;
  transition: all 0.5s ease-in;
}
button:hover {
  background: var(--lightBlue);
  color: var(--mainBlue);
}
</style>