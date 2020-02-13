<template>
<div v-if="getModalOpen" class="cot">
 <div class="container">
     <div class="row">
         <div id="modal" class="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
             <h5>item added to the cart</h5>
             <img :src="getDetailProduct.img" alt=""
             class="img-fluid">
             <h5>{{getDetailProduct.title}}</h5>
             <h5 class="text-muted">
                 price : $ {{getDetailProduct.price}}
             </h5>
             <router-link to="/">
             <button @click="close">continue Shopping</button>
             </router-link>
             <router-link to="/cart">
             <button @click="close">go to cart</button>
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
     'getDetailProduct',
     'getModalOpen'
   ])
  },
    methods: {
   close(){
     this.$store.dispatch("closeModal")
   },
  
},
}
</script>

<style scoped>
.cot
{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(43, 36, 36, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;


}
.container #modal
{
    background: #fff;
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