<template>
    <!-- <div class="">
        <div class="d-flex justify-content-between">
            <p class="text-start">Categories</p>
            <i class="bi bi-search"></i>
        </div>
        <div>

            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Saree
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    All Sarees
                                </label>
                            </div>
                            
                        </div>
                    </div>
                </div> -->
                <!-- <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine
                            this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                            the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more
                            exciting happening here in terms of content, but just filling up the space to make it look, at
                            least at first glance, a bit more representative of how this would look in a real-world
                            application.</div>
                    </div>
                </div> -->
            <!-- </div> -->

            <!-- <div v-for="(item, index) in category.child" :key="index" >
                <p>{{index}}</p>
                <div class="row">
                    <div class="col-6 text-center" v-for="(a, key) in item" :key="key">
                       
                            <p class="" style="font-size:10px">{{a.name}}</p>
                        
                    </div>
                </div>
            </div> -->











            <!-- <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">

                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body p-0 pb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Shrug
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Clothing Set
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Jeggings
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Jumpsuit
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Track Pants
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Tights
                                </label>
                            </div>
                        </div>
                    </div>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            View More
                        </button>
                    </h2>
                </div>
            </div> -->
        <!-- </div>
    </div> -->
    <hr />
</template>
<script>
export default {
    name: 'CategoryFilter',
    // props:['category'],
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    },
}
</script>
<style lang="">
    
</style>