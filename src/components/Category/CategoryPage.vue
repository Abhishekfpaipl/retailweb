<template>
    <!-- Mobile Version starts -->
    <div class="d-md-none d-block w-100 d-flex position-relative" style="height:80%;padding-top: 70px; ">
        <div class="w-25 position-fixed " style="height:100vh; overflow-y:scroll; padding-bottom:150px;">
            <div id="list-example" class="list-group text-center">
                <CategoryLinks v-for="(category, index) in categories" :key="index" :category="category"></CategoryLinks>
            </div>
        </div>
        <div class="w-75 position-absolute" style="right:0px;padding-bottom:150px; ">
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example"
                tabindex="0">
                <CategoryProducts v-for="(category, index) in categories" :key="index" :category="category">
                </CategoryProducts>
            </div>
        </div>

    </div>
    <!-- Mobile Version ends -->

    <!-- Desktop Version starts -->
    
    <DesktopNav></DesktopNav>
    <i class="bi bi-google-play"></i>
    
    <div class="d-md-block d-none px-4" style="padding-top: 80px;">
        <div>
            <nav class="bg-light text-center">Sale Ends in 1 Day</nav>
        </div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">
                        <a href="#">Home</a>
                    </router-link>
                </li>

                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Womens Western Wear</li>
            </ol>
        </nav>

        <p>Womens Western Wear</p>

        <!-- <p>{{ labelValue }}</p> -->

        <div class="row">
            <div class="col-3 border border-1">
                <div class="accordion accordion-flush mb-3" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button bg-warning collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapseOne">
                                Sort By :
                            </button>
                        </h2>
                        <div id="flush-collapse1" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p class="dropdown-item" href="#">Recommend</p>
                                <p class="dropdown-item" href="#">What's New</p>
                                <p class="dropdown-item" href="#">Popularity</p>
                                <p class="dropdown-item" href="#">Better Discount</p>
                                <p class="dropdown-item" href="#">Price: High To Low</p>
                                <p class="dropdown-item" href="#">Price: Low To High </p>
                                <p class="dropdown-item" href="#">Customer Rating </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="d-flex justify-content-between mb-3">
                    <h5 class="text-uppercase">Filters</h5>
                    <button class="btn text-uppercase p-0" style="color: hotpink;">Clear All</button>
                </div>
                <hr />

                <div class="d-flex justify-content-between">
                    <p class="text-start">Categories</p>
                    <i class="bi bi-search"></i>
                </div>



                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <div v-for="(category, index) in categories" :key="index" class="accordion-header">
                            <button class="accordion-button collapsed py-2" style="background: #d5d2d2;" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseOne' + category.id" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                {{ category.name }}
                            </button>

                            <div :id="'flush-collapseOne' + category.id" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div v-for="(item, index) in category.child" :key="index">
                                    <div class="row">
                                        <div class="text-start" v-for="(a, key) in item" :key="key">
                                            <div class="form-check pt-2 mb-1">
                                                <input class="form-check-input" type="checkbox"
                                                    :id="'flexCheckChecked' + a.id" />
                                                <label class="form-check-label" :for="'flexCheckChecked' + a.id">
                                                    {{ a.name }}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CategoryFilter></CategoryFilter>
                <BrandFilter></BrandFilter>
                <PriceFilter></PriceFilter>
                <ColorFilter></ColorFilter>
                <DiscountFilter></DiscountFilter>
            </div>
            <div class="col-9">
                <div class="col-12 bg-success">
                    hello
                </div>
                <div class="row">
                    <!-- <p> Result: {{ result }}</p> -->
                    <div>
                        <!-- <p>Updated Num1: {{ updatedNum1 }}</p> -->
                    </div>
                    <CatelogPage></CatelogPage>
                </div>
            </div>
        </div>

        <FooterBar></FooterBar>
    </div>



    <!-- Desktop Version ends -->
</template>
<script>
import { mapState } from 'vuex';
import CategoryFilter from './DesktopFilters/CategoryFilter.vue';
import BrandFilter from './DesktopFilters/BrandFilter.vue';
import ColorFilter from './DesktopFilters/ColorFilter.vue';
import DiscountFilter from './DesktopFilters/DiscountFilter.vue';
import PriceFilter from './DesktopFilters/PriceFilter.vue';
import CategoryProducts from '../Category/CategoryProducts.vue'
import CategoryLinks from '../Category/CategoryLinks.vue'
import CatelogPage from '../Catelog/CatelogPage.vue';
import FooterBar from '../Footer/FooterBar.vue';
import DesktopNav from '@/views/DesktopNav.vue';
export default {
    name: 'CategoryPage',
    props: ['category'],
    data() {
        return {
            publicPath: process.env.BASE_URL,

        }
    },
    components: {
    CategoryLinks,
    CategoryProducts,
    CategoryFilter,
    BrandFilter,
    PriceFilter,
    ColorFilter,
    DiscountFilter,
    CatelogPage,
    FooterBar,
    DesktopNav
},
 computed: {
        categories() {
            return this.$store.getters.getCategories;
        },
        
        ...mapState(['num1']),
    updatedNum1() {
      return this.num1;
    },
        },
       
        mounted() {
            const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
            dataSpyList.forEach(dataSpyEl => {
                console.log(dataSpyEl);
                var children = dataSpyEl.children;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    console.log(child.id);
                    if (child.id === 7) {
                        this.ss()
                    }
                }
            })
        },
        methods: {

        }

    }
</script>

<style>
.list-group-item.active {
    background-color: pink !important;
    color: black !important;
    border-color: pink !important;

}

</style>