<template>
 <div class="container py-5">
 <div class="row">
   <div class="col-10 mx-auto text-center text-slanted text-blue my-5">
     <h1>{{getDetailProduct.title}}</h1>
   </div>
 </div>
 <div class="row">
   <div class="col-10 mx-auto col-md-6 my-3">
   <img :src="getDetailProduct.img" alt="Image" class="img-fluid">
   </div>
   <div class="col-10 mx-auto col-md-6 my-3 text-capital">
<h2>Model : {{getDetailProduct.title}}</h2>
<h4 class="text-title text-uppercase text-muted mt-3 mb-2">
  Mode By : <span class="text-uppercase">
    {{getDetailProduct.company}}
  </span>
</h4>
<h4 class="text-blue">
  <strong>
    Price : <span>$</span>
    {{getDetailProduct.price}}
  </strong>
</h4>
<p class="text-capitalize font-weight-bold mt-3 mb-0">
  some info about product
</p>
<p class="text-muted lead">
  {{getDetailProduct.info}}
</p>
<div>
  <router-link to="/">
   <button>
       
     Back to home
      </button>
      <button v-if="getDetailProduct.inCart">In Cart</button>
         <button v-else   @click="addToCart(getDetailProduct.id)">Add to cart</button>
  </router-link>
</div>
   </div>
 </div>
 </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
   ...mapGetters([
     'getDetailProduct'
   ])
  },
  methods:{

   addToCart(id){
     this.$store.dispatch("addToCart",id);
     this.$store.dispatch("openModal",id);
   }
  }
};
</script>

<style scoped>
.col-10  button {
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