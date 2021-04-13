import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

export const store = new vuex.Store({
    state:{
        "products": [
            {'name':"Product 1","price":40},
            {'name':"Product 2","price":50},
            {'name':"Product 3","price":60},
            {'name':"Product 4","price":70},
          ]
    }
})

