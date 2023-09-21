<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios'

const route = useRoute()

const id = route.params.id
const activeImage = ref(0);
let isloading = ref(true);
let product = reactive({});

async function productShow (){
    let res = await axios.get(`https://dummyjson.com/products/${id}`)
    product = res.data;
    isloading.value = false;
    console.log(product);
    activeImage.value = product.images[0]
}

productShow()


</script>

<template>
    <div class="container mx-auto">
        <div v-if="isloading" class="flex justify-center items-center mt-20">
            <span className="loading loading-ring loading-lg"></span>
        </div>

        <div class="flex justify-center mt-3">
            <div class="card lg:card-side bg-base-100 shadow-xl lg:w-5/6 lg:flex p-10">
            <figure>
                <img :src="product.images[0]" class="lg:h-96" alt="Album"/>
            </figure>
            <div class="card-body">
                <h2 class="text-5xl font-bold">{{ product.title }}</h2><hr>
                <div class="flex justify-center">
                    <p class="text-green-700">Stock Available: {{ product.stock }}</p>
                    <p><b>Rating: </b>{{ product.rating }}</p>
                </div><hr>
                <p class="text-2xl font-medium"><span class="text-xl font-medium">Price: </span> {{ product.price }}$</p>
                <p><span class="text-xl font-medium">Brand Name: </span> {{ product.brand }}</p>
                <p><span class="text-xl font-medium">Category: </span> {{ product.category }}</p> <hr>
                <p><span class="text-xl font-medium">Descriptin: </span><br> {{ product.description }}</p> <hr>
                <br>
                <div data-v-65826b86="" class="flex justify-items-start gap-3"><button data-v-65826b86="" class="bg-green-700 bg-opacity-40 hover:bg-[#8ec641] font-semibold px-6 py-2 flex rounded mt-1.5 text-green-800 hover:text-white transition-all duration-300"><svg data-v-65826b86="" class="ov-icon font-bold" aria-hidden="true" width="23.04" height="23.04" viewBox="-1.6 -1.6 19.2 19.2" fill="currentColor" style="font-size: 1.44em;"><path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z"></path></svg><span data-v-65826b86="" class="pl-0.5">Add to Cart</span></button><button data-v-65826b86="" class="bg-green-700 flex bg-opacity-40 hover:bg-[#8ec641] font-semibold px-6 py-2 rounded mt-1.5 text-green-800 hover:text-white transition-all duration-300"><svg data-v-65826b86="" class="ov-icon font-bold" aria-hidden="true" width="23.04" height="23.04" viewBox="0 0 32 32" fill="currentColor" style="font-size: 1.44em;"><path d="M16 3c-2.746 0-5 2.254-5 5v1H6.062L6 9.938l-1 18L4.937 29h22.125L27 27.937l-1-18L25.937 9H21V8c0-2.746-2.254-5-5-5zm0 2a3 3 0 013 3v1h-6V8a3 3 0 013-3zm-8.063 6H11v3h2v-3h6v3h2v-3h3.063l.875 16H7.063z"></path></svg><span data-v-65826b86="" class="pl-0.5">Buy Now</span></button></div>
            </div>
        </div>
        </div>
    </div>
</template>