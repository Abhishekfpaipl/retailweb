<template>
  <!-- Mobile version starts -->
  <div class="d-md-none d-block">
    <TopNav ></TopNav>
    <div class="container-fluid">
      <div class="d-flex justify-content-around mb-3">
        <button class="btn btn-white text-success border border-1 rounded-0 ">Easy Return <p class="text-start m-0"
            style="font-size: 10px;">Free Pick Up</p></button>
        <button class="btn btn-white text-success border border-1 rounded-0 ">Free Cod <p class="text-start m-0"
            style="font-size: 10px;">Free Pick Up</p></button>
        <button class="btn btn-white text-success border border-1 rounded-0 ">Free Shipping <p class="text-start m-0"
            style="font-size: 10px;">Free Pick Up</p></button>
      </div>

      <!-- Carousel  -->
      <div class="container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style="width: 100% !important;">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000">
              <img src="https://img101.urbanic.com/v1/1ffc9058520d417cb5188ac4e62d75be.webp" class="d-block w-100"
                alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://img101.urbanic.com/v1/b68b2269c73a405a89032d711c9dcba7.webp" class="d-block w-100"
                alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://img101.urbanic.com/v1/af1a38021b0344779b7b9cca9436e821.webp" class="d-block w-100"
                alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      <div class="container">
        <img src="https://img101.urbanic.com/v1/856a02fd056442baa0b551917cdbab0b.webp" alt="" style="width:100%;">
      </div>
      <div class="container">
        <img src="https://img101.urbanic.com/v1/ee75da99e3a943b7a7cff3d8e1c8fa98.webp" alt="" style="width:100%">
      </div>

      <HomeCollection></HomeCollection>

    </div>
    <BottomNav></BottomNav>
  </div>
  <!-- Mobile version ends -->

  <!-- Desktoop version starts -->

  <div class="d-md-block d-none">

    <DesktopNav></DesktopNav>

    <div class="container" style="padding-top: 140px;">
      <div class="container d-flex justify-content-center mt-4">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card-body">
                <h1 class="card-title">Lowest Prices Best Quality Shopping</h1>
                <div class="card-text d-flex justify-content-evenly mt-4">
                  <div class="d-flex flex-column  px-4" style="border-right: 1px solid;">
                    <i class="bi bi-truck fs-3"></i> Free Delivery
                  </div>
                  <div class="d-flex flex-column  px-4" style="border-right: 1px solid;">
                    <i class="bi bi-cash fs-3"></i>Cash on Delivery
                  </div>
                  <div class="d-flex flex-column  px-4">
                    <i class="bi bi-bag fs-3"></i>Easy Returns
                  </div>
                </div>

                <i class="bi bi-google-play"></i>
                <p class="card-text mt-4">
                  <button class="btn btn-outline-success rounded-1 text-body-secondary"><img src="https://images.meesho.com/images/pow/playstoreSmallIcon.png" alt="">
                    Download the Deshi Girl App</button>
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="https://images.meesho.com/images/marketing/1678691617864_512.webp" class="img-fluid rounded-start"
                alt="...">
            </div>
          </div>
        </div>
      </div>

      <div class="container d-flex flex-column justify-content-center mt-4">
        <h2 class="hr-lines text-center mb-4"> Top Categories to choose from </h2>

        <div class="card mb-3 px-2 py-5" style="background: pink;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://images.meesho.com/images/marketing/1678691686252_400.webp" class="img-fluid rounded-start"
                alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title text-center">Be Fashion Forward</h1>
                <div class="d-flex">
                  <div class="col-md-6">
                    <img src="https://images.meesho.com/images/marketing/1678691699680_300.webp"
                      class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-6">
                    <img src="https://images.meesho.com/images/marketing/1678691712594_300.webp"
                      class="img-fluid rounded-start" alt="...">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <FooterBar></FooterBar>

  </div>



  <!-- Desktop version ends -->
</template>

<script>
import FooterBar from '@/components/Footer/FooterBar.vue';
import DesktopNav from './DesktopNav.vue';

// @ is an alias to /src
// import TopNav from '@/components/Navbar/TopNav.vue';
// import BottomNav from '@/components/Navbar/BottomNav.vue';
// import HomeCollection from '@/components/Collections/HomeCollection.vue';
export default {
  name: "HomePage",
  components: {
    DesktopNav,
    FooterBar
}
};
</script>
<style scoped>
@media (min-width:998px) {
  
  .dropstart .dropdown-menu[data-bs-popper]{
    top: 50px !important; 
  }
}

/* .hr-lines:before{
  content:" ";
  display: block;
  height: 2px;
  width: 130px;
  position: absolute;
  top: 50%;
  left: 0;
  background: red;
} */
</style>