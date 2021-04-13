<template>
  <div id="product-list-one">
    <h2>Proudct List One</h2>
    <ul>
        <li v-for="product in products">{{ product.name }},{{ product.price }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-list-one',
  props: ['products'],
  data () {
    return {
      
    }
  }
}
</script>

