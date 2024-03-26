<template>
  <div>
    <router-link :to="{ name: 'Creates' }" class="button is-success mt-5"
      >Add New</router-link
    >

    
    <div class="fixed-grid has-3-cols">
      <div class="grid">
        <div class="cell" v-for="item in items" :key="item.product_id">
          <div class="card">
            <div class="card-header">
              <p class="card-header-title has-text-centered">{{ item.product_name }}</p>
            </div>
            <div class="card-content">
              <div class="content has-text-centered">
                {{ item.product_price }}
              </div>
            </div>
            <footer class="card-footer">
              <router-link :to="{ name: 'Edit', params: { id: item.product_id }}"
                class="card-footer-item"
              >
                Edit
              </router-link>
              <button class="card-footer-item has-text-danger" @click=deleteProduct(item.product_id)>
                Delete
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>


   
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getProducts();
  },
 
  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>