<template>
  <div id="app">

    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
    
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  components: { ProductListOne, ProductListTwo },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

