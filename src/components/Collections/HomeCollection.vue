<template>
    <div style="padding-bottom: 80px;">
        <div class="banner" style="background-color: #F7F8F3;">
            <div class="container">
                <div class="row">
                <div class="col-8 d-flex flex-column justify-content-center text-center align-items-center">
                    <h3 class="mt-4">In focus: Blouses</h3>
                    <p>Psst... They go with everything!</p>
                    <button class="btn btn-white text-dark border border-1 w-50" style="border-radius: 20px;">Shop Now</button>
                </div>
                <div class="col-4">  
                    <img src="../../../public/img/banners/banner1.jpg" style="width:100%;" alt=""> 
                </div>
                </div>
            </div>
        </div>
        <div class="container px-4 mt-3">
            <div class="row row-cols-3 gx-2">
                <div class="col" v-for="(collection , index) in collections" :key="index">
                    <div class="card rounded-0">
                        <img :src="collection.img" alt="" style="width: 100%;">
                    </div>
                    <p>₹{{ collection.price}}</p>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeCollection',
    computed: {
        collections() {
            return this.$store.getters.getCollections
        }
    },
}
</script>
<style>
    
</style>