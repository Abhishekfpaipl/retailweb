<template lang="">
  <div class="d-md-none d-block">
    <div class=" nav-bottom justify-content-evenly" style="height: 63px; padding: 0 18px;">
     <div class="items">
        <routerLink to="/"  :class="{'text-danger' : currentRoute ==='HomeView' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-shop-window fs-5"></i>
            <p class="m-0" style="font-size:12px">Home</p>
          </div>
        </routerLink>
      </div>

      <div class="items">
        <router-link to="/CategoryPage" :class="{'text-danger' : currentRoute ==='CategoryPage' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-grid-1x2 fs-5"></i>
            <p class="m-0" style="font-size:12px">Category</p>
          </div>
        </router-link>
      </div>
      
      <div class="items">
        <div class="inner-items py-1 d-flex flex-column">
            <router-link to="/ContactUs" :class="{'text-danger' : currentRoute ==='ContactUs' }" style="text-decoration:none;color:black;">
              <i class="bi bi-pentagon fs-5 abnf"></i>
              <p class="m-0" style="font-size:12px">Discover</p>
            </router-link>
        </div>
      </div>
      
      <div class="items">
        <router-link to="/OrderPage" :class="{'text-danger' : currentRoute ==='OrderPage' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-archive fs-5"></i>
            <p class="m-0" style="font-size:12px">Orders</p>
          </div>
        </router-link>
      </div>

      <div class="items">
        <router-link to="/SignupForm" :class="{'text-danger' : currentRoute ==='SignupForm' }" style="text-decoration:none;color:black;">
          <div class="inner-items py-1 d-flex flex-column">
            <i class="bi bi-emoji-smile fs-5"></i>
            <p class="m-0" style="font-size:12px">Me</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'BottomNav',
    computed:{
      currentRoute(){
        return this.$route.name;
      }
    }
  };
  </script>
<style>
.items {
  display: flex;
  text-align: center;
}

.nav-bottom {
  height: 20%;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  background: #F6F6F6;
}

</style>
