<template>
    <!-- Top Navbar starts -->
    <div class="d-md-none d-block">
        <div class="d-flex justify-content-between p-2 w-100 position-fixed bg-light"
            style="top:0px;height:8%; z-index:12;">
            <div class="input-group mb-3" style="width:70%">
                <router-link to="/CategoryPage" class="text-decoration-none text-dark">
                    <i class="bi bi-arrow-left fs-3"></i>
                </router-link>
                <span class="d-flex align-items-center ms-2" style="font-weight: 600;">New in</span>
            </div>
            <div class="d-flex text-center justify-content-evenly" style="width:30%">
                <router-link to="/SearchPage" class="text-decoration-none text-dark">
                    <i class="bi bi-search fs-3"></i>
                </router-link>
                <i class="bi bi-heart fs-3"></i>
                <i class="bi bi-bag fs-3"></i>
            </div>
        </div>
        <!-- Top Navbar ends -->

        <!-- filters starts -->
        <div class="d-flex w-100 justify-content-evenly bg-light align-items-center position-fixed"
            style="z-index:1;top:55px;height:50px">
            <div class="">
                <a class="text-decoration-none text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Sort
                </a>
                <ul class="dropdown-menu w-100">
                    <li><a class="dropdown-item" href="#">Recommend</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Price: Low to High</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Price: High to Low</a></li>
                    <div class="mt-4 me-2 d-flex gap-2" style="justify-content: flex-end;">
                        <button class="btn btn-outline-dark rounded-0 ">Clear</button>
                        <button class="btn bg-dark text-white rounded-0 ">Apply</button>
                    </div>
                </ul>
            </div>
            <div class="">
                <a class="text-decoration-none text-dark dropdown-toggle" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Category
                </a>
                <ul class="dropdown-menu w-100">
                    <div class="d-flex flex-wrap gap-2 ms-2 me-2">
                        <button class="btn btn-outline-success rounded-0">tank tops</button>
                        <button class="btn btn-outline-success rounded-0">Dresses</button>
                        <button class="btn btn-outline-success rounded-0">Pants</button>
                        <button class="btn btn-outline-success rounded-0">Blouses</button>
                        <button class="btn btn-outline-success rounded-0">Panties</button>
                        <button class="btn btn-outline-success rounded-0">Tshirts</button>
                        <button class="btn btn-outline-success rounded-0">Sweaters</button>
                        <button class="btn btn-outline-success rounded-0">Shorts</button>
                    </div>

                    <div class="mt-4 me-2 d-flex gap-2" style="justify-content: flex-end;">
                        <button class="btn btn-outline-dark rounded-0 ">Clear</button>
                        <button class="btn bg-dark text-white rounded-0 ">Apply</button>
                    </div>
                </ul>
            </div>
            <div class="">
                <a class="text-decoration-none text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Price Range
                </a>
                <ul class="dropdown-menu w-100">
                    <div>
                        <div class="d-flex mt-4">
                            <input type="number" placeholder="Min" class="form-control-sm text-center">--
                            <input type="number" placeholder="Max" class="form-control-sm text-center">
                        </div>
                        <div class="mt-4 me-2 d-flex gap-2" style="justify-content: flex-end;">
                            <button class="btn btn-outline-dark rounded-0 ">Clear</button>
                            <button class="btn bg-dark text-white rounded-0 ">Apply</button>
                        </div>
                    </div>
                </ul>
            </div>
            <div class="">
                <a class="text-decoration-none text-dark dropdown-toggles " data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom" role="button" aria-expanded="false">
                    Filters <i class="bi bi-sliders"></i>
                </a>
                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel" style="height:450px">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">Filters </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="accordion accordion-flush" id="accordionFlushExample" style="padding-bottom: 40px;">
                            <!-- category -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Category
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">
                                        <button class="btn btn-outline-success rounded-0">tank tops</button>
                                        <button class="btn btn-outline-success rounded-0">Dresses</button>
                                        <button class="btn btn-outline-success rounded-0">Pants</button>
                                        <button class="btn btn-outline-success rounded-0">Blouses</button>
                                        <button class="btn btn-outline-success rounded-0">Panties</button>
                                        <button class="btn btn-outline-success rounded-0">Tshirts</button>
                                        <button class="btn btn-outline-success rounded-0">Sweaters</button>
                                        <button class="btn btn-outline-success rounded-0">Shorts</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Price Range -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Price Range
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <div class="d-flex w-100">
                                            <input type="number" placeholder="Min" class="form-control-sm w-50">--
                                            <input type="number" placeholder="Max" class="form-control-sm w-50">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Color -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Color
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: yellowgreen;"></button>
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: orangered;"></button>
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: red;"></button>
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: palevioletred;"></button>
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: purple;"></button>
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: black;"></button>
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: blue;"></button>
                                        <button class="rounded-circle"
                                            style="width: 25px; height: 25px; background: gold;"></button>
                                    </div>
                                </div>
                            </div>
                            <!-- Size -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Size
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">
                                        <button class="btn btn-outline-success rounded-0">One-Size</button>
                                        <button class="btn btn-outline-success rounded-0">XS</button>
                                        <button class="btn btn-outline-success rounded-0">S</button>
                                        <button class="btn btn-outline-success rounded-0">M</button>
                                        <button class="btn btn-outline-success rounded-0">L</button>
                                        <button class="btn btn-outline-success rounded-0">XL</button>
                                        <button class="btn btn-outline-success rounded-0">2XL</button>
                                        <button class="btn btn-outline-success rounded-0">3XL</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Pattern -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Pattern
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">
                                        <button class="btn btn-outline-success rounded-0">Colorful</button>
                                        <button class="btn btn-outline-success rounded-0">Solid</button>
                                        <button class="btn btn-outline-success rounded-0">Floral</button>
                                        <button class="btn btn-outline-success rounded-0">Leopard Print</button>
                                        <button class="btn btn-outline-success rounded-0">Geometric</button>
                                        <button class="btn btn-outline-success rounded-0">Art</button>
                                        <button class="btn btn-outline-success rounded-0">Alphabet</button>
                                        <button class="btn btn-outline-success rounded-0">Cartoon</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Length -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Length
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">
                                        <button class="btn btn-outline-success rounded-0">Crop</button>
                                        <button class="btn btn-outline-success rounded-0">Long</button>
                                        <button class="btn btn-outline-success rounded-0">Above Ankle Length</button>
                                        <button class="btn btn-outline-success rounded-0">Short</button>
                                        <button class="btn btn-outline-success rounded-0">Regular</button>
                                        <button class="btn btn-outline-success rounded-0">Hip</button>
                                        <button class="btn btn-outline-success rounded-0">Capris</button>
                                        <button class="btn btn-outline-success rounded-0">Maxi</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Style -->
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed fw-bold" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                                        aria-expanded="false" aria-controls="flush-collapseThree">
                                        Style
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body d-flex gap-4 flex-wrap">
                                        <button class="btn btn-outline-success rounded-0">Causal</button>
                                        <button class="btn btn-outline-success rounded-0">Sexy</button>
                                        <button class="btn btn-outline-success rounded-0">Elegant</button>
                                        <button class="btn btn-outline-success rounded-0">Vacation</button>
                                        <button class="btn btn-outline-success rounded-0">Minimalist</button>
                                        <button class="btn btn-outline-success rounded-0">Sporty</button>
                                        <button class="btn btn-outline-success rounded-0">Girl</button>
                                        <button class="btn btn-outline-success rounded-0">Glamorous</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="position-fixed bg-white w-100" style="bottom:0px;">
                            <div class="d-flex justify-content-evenly gap-1">
                                <button class="btn btn-outline-dark rounded-0 w-25">Clear</button>
                                <button class="btn bg-dark text-white rounded-0 w-25">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- filters ends -->
    </div>






    <!-- Main content ends -->
    <div class="container" style="padding-bottom:80px;padding-top:115px">
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
            <div class="col " v-for="(product, index) in products" :key="index">
                <div class="card show-on-hover">
                    <router-link :to="'/ProductPage/' + product.id">
                        <!-- <div @click="showProduct(product)" class="position-relative"> -->
                        <!-- <img src="../../../public/img/icons/cardimg.png" class="card-img-top" alt="" style="min-height:250px;"> -->
                        <img :src="product.images[0]" class="card-img-top" alt="" style="min-height:100px;">

                        <!-- <img :src="`${publicPath}${product.image}`" class="card-img-top" alt=""
                                                style="min-height:100px;height: 280px;object-fit: fill;"> -->
                        <!-- </div> -->
                    </router-link>
                    <!-- <div @click="showProduct(product)" class=" position-absolute w-100 soh-div">
                                    <div class="d-flex justify-content-between align-items-start"
                                        style="max-height:200px; overflow-y:scroll;">
                                        <CatelogColors :colors="product.colors"></CatelogColors>
                                        <CatelogSize :sizes="product.sizes"></CatelogSize>
                                    </div>
                    </div>
                    <div @click="showProduct(product)" class="card-body px-1">
                        <p class="text-center fs-5 mb-1 fw-bold"> {{ product.name }}</p>
                        <p class="text-center m-0">{{ product.info }}</p>
                    </div> -->
                    <div class="card-footer p-0">
                        <div class="btn-group w-100 rounded-bottom overflow-hidden" style="opacity: .85;">
                            <button class="btn bg-outline-dark rounded-0">
                                <i class="bi bi-heart"></i>
                            </button>
                            <button class="btn bg-outline-dark rounded-0">
                                <i class="bi bi-cart-plus-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Main content ends -->
</template>
<script>
// import CatelogSize from '../Catelog/CatelogSize.vue';
// import CatelogColors from '../Catelog/CatelogColors.vue';
// import router from '../../router';

export default {
    name: "CatelogPage",
    computed: {
        products() {
            return this.$store.getters.getProducts
        },
    },
    methods: {
        // showProduct(product) {
        //     return this.$store.dispatch('selectProduct', product).then(
        //         () => {
        //             router.push('/ProductPage/' + product.id)
        //         }
        //     )
        // }   
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components: {
        // CatelogSize,
        // CatelogColors,
    }
}
</script>
<style scoped>
.show-on-hover .soh-div {
    /* display: none; */
    opacity: .75;
}

.show-on-hover:hover .soh-div {
    /* display: block; */
    opacity: 1;
}

.accordion-button:focus {
    box-shadow: none;
}

.nav-bottom {
    display: none !important;
}

</style>
    
    <!-- 
    passing prop via route
    
    <div class="card show-on-hover">
        <router-link :to="{ name: 'ProductPage', params: { product: product } }" class="text-decoration-none text-dark position-relative">
            <img :src="`${publicPath}${product.img}`" class="card-img-top" alt="" style="min-height:250px;">
        </router-link>
        <router-link :to="{ name: 'ProductPage', params: { product: product } }" class="text-decoration-none text-dark position-absolute w-100 soh-div">
            <div class="d-flex justify-content-between align-items-start"
                style="max-height:300px; overflow-y:scroll;">
                <CardColors :colors="product.colors"></CardColors>
                <CardSize :sizes="product.sizes"></CardSize>
            </div>
        </router-link>
        <router-link to="/ProductPage" class="text-decoration-none text-dark card-body px-1">
            <p class="text-center fs-5 mb-1 fw-bold"> {{ product.name }}</p>
            <p class="text-center m-0">{{product.info}}</p>
        </router-link>
        <div class="card-footer p-0">
            <div class="btn-group w-100 rounded-bottom overflow-hidden" style="opacity: .85;">
                <button class="btn bg-outline-dark rounded-0">
                    <i class="bi bi-heart"></i>
                </button>
                <button class="btn bg-outline-dark rounded-0">
                    <i class="bi bi-cart-plus-fill"></i>
                </button>
            </div>
        </div>
    </div> -->