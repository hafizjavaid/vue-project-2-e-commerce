import Vue from "vue";
import Vuex from "vuex";
import { storeProducts, detailProduct } from "./data.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    product: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },

    SET_DETAILPAGE(state, product) {
      state.product = product;
      // state.modalProduct = product;
    },
    SET_TOCART(state, product) {
      state.cart = [...state.cart, product];
    },
    SET_MODAL(state, product) {
      state.modalProduct = product;
      // state.modalOpen = true;
    },
    SET_MODALO(state) {
      state.modalOpen = true;
    },
    CLOSE(state) {
      state.modalOpen = false;
    },
    ADD_TOTALS(state) {
      let subTotal = 0;
      state.cart.map(item => (subTotal += item.total));
      const tempTax = subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      state.cartSubTotal = subTotal;
      state.cartTax = tax;
      state.cartTotal = total;
    },
    CLEAR_CART(state) {
      state.cart = [];

      this.commit("ADD_TOTALS");
    },
    REMOVE_ITEM(state, id) {
      let tempProducts = [...state.products];
      let tempCart = [...state.cart];

      tempCart = tempCart.filter(item => item.id !== id);
      const Indexof = tempProducts.find(item => item.id === id);
      const index = tempProducts.indexOf(Indexof);
      let removeProduct = tempProducts[index];
      removeProduct.inCart = false;
      removeProduct.count = 0;
      removeProduct.total = 0;
      state.cart = [...tempCart];
      this.commit("SET_PRODUCTS", tempProducts);
      this.commit("ADD_TOTALS");
    },
    INCREMENT(state, id) {
      let tempCart = [...state.cart];
      const Indexof = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(Indexof);
      const product = tempCart[index];
      product.count += 1;
      product.total = product.count * product.price;
      state.cart = [...tempCart];
      this.commit("ADD_TOTALS");
    },
    DECREMENT(state, id) {
      let tempCart = [...state.cart];
      const Indexof = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(Indexof);
      const product = tempCart[index];
      product.count -= 1;
      if (product.count === 0) {
        this.commit("REMOVE_ITEM", id);
      } else {
        product.total = product.count * product.price;
        state.cart = [...tempCart];
        this.commit("ADD_TOTALS");
      }
    }
  },
  actions: {
    setActualProduct: ({ commit }) => {
      let tempProducts = [];
      storeProducts.forEach(item => {
        const singleItem = { ...item };
        tempProducts = [...tempProducts, singleItem];
      });
      commit("SET_PRODUCTS", tempProducts);
    },
    handleDetail: ({ commit }, id) => {
      const product = storeProducts.find(item => item.id === id);
      commit("SET_DETAILPAGE", product);
    },
    addToCart: ({ commit }, id) => {
      let tempProducts = storeProducts;
      const Indexof = storeProducts.find(item => item.id === id);
      const index = tempProducts.indexOf(Indexof);
      const product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;
      commit("SET_PRODUCTS", tempProducts);
      commit("SET_TOCART", product);
      commit("ADD_TOTALS");
    },
    openModal: ({ commit }, id) => {
      const product = storeProducts.find(item => item.id === id);
      commit("SET_MODAL", product);
      commit("SET_MODALO");
    },
    closeModal: ({ commit }) => {
      commit("CLOSE");
    },
    decrement: ({ commit }, id) => {
      commit("DECREMENT", id);
    },
    increment: ({ commit }, id) => {
      commit("INCREMENT", id);
    },
    removeItem: ({ commit }, id) => {
      commit("REMOVE_ITEM", id);
    },
    clearCart({ commit, dispatch }) {
      commit("CLEAR_CART");
      dispatch("setActualProduct");
      // commit("SET_PRODUCTS", tempProducts);
      // commit("ADD_TOTALS");
    }
  },
  getters: {
    getProducts: state => {
      return state.products;
    },
    getDetailProduct: state => {
      return state.product;
    },
    getModalProduct: state => {
      return state.modalProduct;
    },
    getModalOpen: state => {
      return state.modalOpen;
    },
    getCart: state => {
      return state.cart;
    },
    getSubTotal: state => {
      return state.cartSubTotal;
    },
    getTotal: state => {
      return state.cartTotal;
    },
    getTax: state => {
      return state.cartTax;
    }
  }
});
