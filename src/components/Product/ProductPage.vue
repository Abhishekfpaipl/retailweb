<template>
    
    <!-- TopNavBar -->
    <div class="d-flex justify-content-around position-fixed w-100 align-items-center" style="z-index:11;height:8% ;background-color: #eca1a6;">
        <router-link to="/CatelogPage" class="text-decoration-none text-dark">
            <div class=""><i class="bi bi-arrow-left fs-1"></i></div>
        </router-link>
        <router-link to="/SearchPage" class="text-decoration-none text-dark">
            <div class=""><i class="bi bi-search fs-1"></i></div>
        </router-link>
        <div class="fs-1">Deshi Girl</div>
        <div class=""><i class="bi bi-heart fs-1"></i></div>
        <div class=""><i class="bi bi-bag fs-1"></i></div>
    </div>
    
    <!-- main content -->
    <div class="container" style="padding-bottom:80px;padding-top:80px">
      <div class="row">
        <div class="col-lg-5 d-flex prod-img">
          <div class="d-flex flex-column prod-thumb">
            <img class="" :src="image" style="width: 60px" v-for="(image, index) in product.images" :key="index"
              v-on:click="selectImage(image)" />
          </div>
          <div class="ms-2 main-img">
            <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
          </div>
        </div>
        <div class="container col-lg-7 px-3">
          <h1 class=" text-start mb-2 fs-1 py-1 text-dark fw-bold">
            {{ product.name }}
          </h1>
          <h1 class=" text-start mb-2 fs-5 py-1">
            {{ product.info }}
          </h1>
  
          <div class="">
            <div class=" w-100 d-flex  me-0">
              <div class="col-12 text-start d-flex align-items-center justify-content-between">
                <div>
                  <span class="me-2 text-dark fw-bold fs-1">₹ {{ product.price }}</span>
                </div>
                <div>
                  <p class="fw-bold m-0">Wholesale Price</p>
                  <p class="fw-bold m-0">with {{ product.moq }}pcs MOQ</p>
                </div>
              </div>
            </div>
            <p class="fw-light mb-0">(inclusive of all taxes)</p>
  
            <div class="mb-3 mt-3">
              <h5 class="mb-4">Available Sizes</h5>
              <button v-for="(size, index) in product.sizes" :key="index" class="btn btn-outline-dark btn-sm rounded me-4">
                {{ size.name }}</button>
            </div>
 
            <div class="mb-3">
              <h5 class="mb-4">Available Colors</h5>
              <button v-for="(color, index) in product.colors" :key="index" class="btn rounded-circle me-4"
                :style="'height: 25px; width: 25px; background-color:' + color.name"></button>
            </div>
  
            <div class="d-flex flex-column text-start mb-3">
              <p class="text-center d-flex fw-bold">
                Select Qty
              </p>
              <div class="quantity-toggle d-flex align-items-center justify-content-start">
                <button @click="decrement" class="btn btn-light btn-sm border border-1">
                  <i class="bi bi-dash"></i>
                </button>
                <input type="number" class="fw-bold form-control-sm px-2 text-center" v-model="quantity"
                  style="width: 20%;" />
                <button @click="increment" class="btn btn-light btn-sm border border-1">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
              <p class="fw-bold mt-3"> Total Amount :- ₹ {{ quantity * product.price }}</p>
            </div>
            <div class="mb-3">
              <h5 class="">MOQ - {{ product.moq }} pcs</h5>
              <p class="m-0 fw-light">(You will get all trending Colors & Sizes)</p>
            </div>
  
            <p class="mb-3"><a href="#" class="text-start text-dark fs-4">Services & Policies</a></p>
            <div class="">
              <button class="py-3 text-dark bg-white border border-1 mt-2 w-100 text-start"><i class="bi bi-credit-card"></i> Cash on delivery available in most areas</button>
              <button class="py-3 text-dark bg-white border border-1   w-100 text-start"><i class="bi bi-truck"></i> Free shipping on this product !<span class="text-success">(saving ₹99)</span></button>
              <button class="py-3 text-dark bg-white border border-1  w-100 text-start"><i class="bi bi-arrow-repeat"></i> 10 days easy returns with free pick up</button>
            </div>
            
            <!-- Delivery Info -->
            <div class="mt-3">
                <div class="d-flex justify-content-between">
                    <p class="fw-bold fs-5">Delivery Info</p>
                    <i class="bi bi-question-circle"></i>
                </div>
                <div class="input-group mb-3">
                    <input type="number" class="form-control" placeholder="Enter a pincode" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn bg-dark text-white" type="button" id="button-addon2">Check</button>
                </div>
                <p class="m-0">Delivery date: Enter pincode to check</p>
                <p class="m-0">Fast Delivery might be available on this product!</p>
            </div>

            <div class="mt-4">
                <p class="fs-5 p-2 border border-1 m-0">About this Product</p>
                <div class="d-flex w-100 border border-1">
                    <div class="ps-3 w-50 mt-2" style="border-right:1px solid grey">
                        <h6 class="fw-bold">Material:</h6>
                        <p style="color:grey">{{product.material}}</p>

                        <h6 class="fw-bold">Stretchability:</h6>
                        <p style="color:grey">{{product.stretchability}}</p>
                    </div>

                    <div class="ps-3 w-50 mt-2">
                        <h6 class="fw-bold">Lining:</h6>
                        <p style="color:grey">{{product.lining}}</p>

                        <h6 class="fw-bold">Style:</h6>
                        <p style="color:grey">{{product.style}}</p>
                    </div>

                </div>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <div class="d-flex w-100">
                                    <div class="w-50" style="border-right:1px solid grey">
                                        <h6 class="fw-bold">Occasion:</h6>
                                        <p style="color:grey">{{product.occasion}}</p>
                                        
                                        <h6 class="fw-bold">Chest Pad:</h6>
                                        <p style="color:grey">{{product.chestpad}}</p>

                                        <h6 class="fw-bold">Neckline:</h6>
                                        <p style="color:grey">{{ product.neckline }}</p>

                                        <h6 class="fw-bold">Sleeve Length:</h6>
                                        <p style="color:grey">{{product.sleevelength}}</p>

                                        <h6 class="fw-bold">Silhouette:</h6>
                                        <p style="color:grey">{{product.silhouette}}</p>

                                        <h6 class="fw-bold">No. Of Pieces:</h6>
                                        <p style="color:grey">{{product.nopieces}}</p>
                                    </div>

                                    <div class="ps-3 w-50">
                                        <h6 class="fw-bold">Pattern:</h6>
                                        <p style="color:grey">{{product.pattern}}</p>

                                        <h6 class="fw-bold">Trim:</h6>
                                        <p style="color:grey">{{product.trim}}</p>

                                        <h6 class="fw-bold">Sleeve Type:</h6>
                                        <p style="color:grey">{{product.sleevetype}}</p>

                                        <h6 class="fw-bold">Length:</h6>
                                        <p style="color:grey">{{product.length}}</p>

                                        <h6 class="fw-bold">Fitness:</h6>
                                        <p style="color:grey">{{product.fitness}}</p>

                                        <h6 class="fw-bold">Belt:</h6>
                                        <p style="color:grey">{{product.belt}}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                Know More
                            </button>
                        </h2>
                    </div>
                </div>
            </div>





            <ProductDetails></ProductDetails>

            <div class=" mt-4 d-flex justify-content-center ">
              <p class="mb-1 fs-6">Couldn't find your size?</p>
            </div>
  
  
            <!-- Button trigger modal -->
            <div class="d-flex justify-content-center">
              <a href="" class=" text-center text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Request your size here
              </a>
            </div>
  
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Size Guide</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img src="https://cdn.shopify.com/s/files/1/0240/6641/files/Main_Sizing_Chart-_Women_s_d624cf9c-29ed-4068-b9a0-85a45332df2d_1024x1024.png?v=1672094464" alt="" style="width: 100%;">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <!-- Bottom NavBar -->
    <div class="w-100 d-flex align-items-center position-fixed"
      style="height: 63px; z-index: 10; bottom: 0; background: #f6f6f6;">
      <div class="d-flex justify-content-around" style="width: 30%;">
        <div class="items">
          <routerLink to="/" class="text-dark text-decoration-none">
            <div class="inner-items">
              <i class="bi bi-shop-window fs-5"></i>
            </div>
          </routerLink>
        </div>
        <div class="items">
          <router-link to="" class="text-dark text-decoration-none">
            <div class="inner-items">
              <button class="btn bg-outline-dark p-0">
                <i class="bi bi-chat-dots fs-5"></i>
              </button>
            </div>
          </router-link>
        </div>
        <div class="items">
          <router-link to="" class="text-dark text-decoration-none">
            <div class="inner-items">
              <button class="btn bg-outline-dark p-0">
                <i class="bi bi-heart fs-5"></i>
              </button>
            </div>
          </router-link>
        </div>
      </div>
      <div class="me-3" style="width: 70%;">
        <div class="items">
          <button @click="addToCart" class="btn w-100 d-flex justify-content-center align-items-center text-center"
            style="background-color: #eca1a6;">
            <i class="bi bi-cart fs-5"></i>
            <p class="text-center m-0 ms-2">Add to cart</p>
          </button>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import ProductDetails from "../Product/ProductDetails.vue"
  export default {
    name: "ProductPage",
    data() {
      return {
        selectedImage: {},
        quantity: 0,
      }
    },
    components:{
        ProductDetails
    },
    mounted() {
      this.selectedImage = this.product.images[0];
    },
    computed: {
    product() {
        let productId = this.$route.params.productId;
        return this.$store.getters.getProduct(productId);
      }
    },
    methods: {
      selectImage(image) {
        this.selectedImage = image;
      },
      increment() {
        this.quantity = parseInt(this.quantity) + parseInt(this.product.moq);
      },
      decrement() {
        if (this.quantity > this.product.moq) {
          this.quantity = this.quantity - this.product.moq;
        }
      },
      addToCart() {
        this.$store.dispatch('addToCart', {
          product: this.product,
          quantity: this.quantity
        });
      },
    }
  };
  </script>
  
  
  <style scoped>
  @media (max-width:999px) {
    .prod-img {
      display: flex;
      flex-direction: column-reverse;
    }
  
    .prod-thumb {
      flex-direction: row !important;
      gap: 1rem;
      margin: 1rem 2rem 1rem 2rem;
      overflow: scroll;
    }
  
    .main-img {
      width: 100%;
      padding-right: 12px !important;
      margin-right: 0.5rem !important;
    }
  }
  .accordion-button:focus {
    box-shadow: none;
}
  
  </style>