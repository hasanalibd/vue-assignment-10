<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'

let isloading = ref(true)
let products = reactive({})

onBeforeMount(async () => {
    let res = await axios.get("https://dummyjson.com/products")
    products = res.data.products;
    isloading.value = false;
    console.log(products);
})


</script>

<template>
    <div class="container mx-auto">
        <div v-if="isloading" class="flex justify-center items-center mt-20">
            <span className="loading loading-ring loading-lg"></span>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-3">
            <div class="card bg-base-100 shadow-xl" v-for="product in products" :key="product.id">
                <figure class="px-10 pt-10">
                    <img :src="product.images[0]" alt="Shoes" class="rounded-xl h-48"  />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ product.title }}</h2>
                    <p><b>Price: </b>{{ product.price }}</p>
                    <p><small><b>Rating: </b>{{ product.rating }}</small></p>
                    <div class="card-actions">
                        <RouterLink class="btn btn-primary" :to="`/product/${product.id}`">View Detail</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>