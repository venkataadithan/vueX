<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
        <li v-for="product in products">{{ product.name }},{{ product.price }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-list-two',
  props: ['products'],
  data () {
    return {
      
    }
  }
}
</script>

