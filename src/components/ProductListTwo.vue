<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
        <li v-for="product in saleProducts">{{ product.name }}, ${{ product.price }} </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
export default {
    name: 'product-list-two',
    computed: {
      products(){
        return this.$store.state.products;
      },
      saleProducts() {
        return this.$store.getters.saleProducts;
      }
    },
    methods: {
      reducePrice() {
        this.$store.commit('reducePrice');
      }
    }
}
</script>

