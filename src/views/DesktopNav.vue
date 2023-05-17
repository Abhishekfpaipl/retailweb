<template lang="">
  
<!-- Desktoop version starts -->
<div class="d-md-block d-none">
    <nav class="d-lg-block d-none  navbar navbar-expand-lg bg-body-tertiary position-fixed w-100" style="top:0px;z-index:11;padding: 10px 20px;">
      <div class="container-fluid">
        <router-link to="/" class="text-decoration-none">
          <p class="navbar-brand m-0">DeshiGirl</p>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
          <ul class="navbar-nav me-4 mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="text-decoration-none">
                <p class="nav-link active m-0" aria-current="page" >Home</p>
              </router-link>
            </li>
            <div class="d-flex align-items-center dropdown">
              <button class="btn btn-outline-dark rounded-0"  type="button" data-bs-toggle="dropdown" aria-expanded="false">Download App</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Download From</a></li>
                <a class="dropdown-item" href="#"><img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="" style="width:100%"></a>
                <a class="dropdown-item" href="#"><img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="" style="width:100%"></a>
              </ul> 
              <router-link to="/SupplierForm">
                <button class="mx-2 btn btn-outline-dark rounded-0">Become a Supplier</button>
              </router-link>
            </div>
          </ul>
          <form class="d-flex  w-50" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div class="d-flex gap-1">
            <div class="text-center">
              <div class="btn-group ">
                  <div class="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-fill"></i>
                    <p class="m-0">Profile</p>
                  </div>
                <ul class="dropdown-menu">
                  <div class="text-center">
                    <li>
                      <p class="dropdown-item fw-bold m-0">Hello User</p>
                      <small>To access your account</small>
                    </li>
                    <li><button class="btn btn-success" href="#">Sign Up</button></li>
                    <li><a class="dropdown-item" href="#"><i class="bi bi-bag"></i> My orders</a></li>
                  </div>
                </ul>
              </div>
            </div>
            <div class=" ms-4 text-center">
              <i class="bi bi-cart"></i>
              <p class="m-0">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <hr class="m-0" />

    <nav class="d-flex justify-content-center bg-success position-fixed w-100" style="top:68px;z-index:10;">
      <div class="dropdown d-flex align-items-center" style="height:40px">
        <span class="px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Women Ethnic
        </span>
        <ul class="dropdown-menu w-100 p-0">

          <div class="d-flex dropdown-item gap-4">
            <div class="d-flex text-start flex-column px-2">
              <p class="fw-bold" style="color:hotpink;">All Women Ethnic</p>
              <router-link to="/CategoryPage" class="text-decoration-none text-dark">
                <button class="btn text-start p-0"> View All </button>
              </router-link>
            </div>
            <div class="d-flex text-start flex-column">
              <p class="fw-bold" style="color:hotpink;">Sarees</p>
              <button class="btn text-start py-1 px-0">All Sarees</button>
              <button class="btn text-start py-1 px-0">Silk Sarees</button>
              <button class="btn text-start py-1 px-0">Cotton Silk Sarees</button>
              <button class="btn text-start py-1 px-0">Cotton Sarees</button>
              <button class="btn text-start py-1 px-0">Georgette Sarees</button>
              <button class="btn text-start py-1 px-0">Chiffon Sarees</button>
              <button class="btn text-start py-1 px-0">Satin Sarees</button>
            </div>
            <div class="d-flex t text-start p-0 text-start flex-column">
              <p class="fw-bold" style="color:hotpink;">Kurtis</p>
              <button class="btn text-start py-1 px-0"> All Kurtis</button>
              <button class="btn text-start py-1 px-0"> Anarkali Kurtis</button>
              <button class="btn text-start py-1 px-0"> Rayon Kurtis</button>
              <button class="btn text-start py-1 px-0"> Cotton Kurtis</button>
              <button class="btn text-start py-1 px-0"> Embroidered Kurtis</button>
            </div>
            <div class="d-flex t text-start p-0 text-start flex-column ">
              <p class="fw-bold" style="color:hotpink;">Kurta Sets</p>
              <button class="btn text-start py-1 px-0"> All Kurta Sets</button>
            </div>
            <div class="d-flex t text-start p-0 text-start flex-column">
              <p class="fw-bold" style="color:hotpink;">Suit & Dress Material</p>
              <button class="btn text-start py-1 px-0"> All Suits & Dresses Material</button>
              <button class="btn text-start py-1 px-0"> Cotton Suits</button>
              <button class="btn text-start py-1 px-0"> Embroidered Suits</button>
              <button class="btn text-start py-1 px-0"> Chanderi Suits</button>
            </div>
            <div class="d-flex t text-start p-0 text-start flex-column ">
              <p class="fw-bold" style="color:hotpink;">Other Ethnic</p>
              <button class="btn text-start py-1 px-0"> Blouses</button>
              <button class="btn text-start py-1 px-0"> Dupattas</button>
              <button class="btn text-start py-1 px-0"> Lehanga</button>
              <button class="btn text-start py-1 px-0"> Gown</button>
              <button class="btn text-start py-1 px-0"> Ethnic Bottomwear</button>
            </div>

          </div>

        </ul>


        <span class="px-3 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Women Western
        </span>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>

        <span class="px-3 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Men
        </span>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>

        <span class="px-3 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Kids
        </span>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>

        <span class="px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Home & Kitchen
        </span>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>

        <span class="px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Beauty & Health
        </span>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>

        <span class="px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Jewellary & Accessories
        </span>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>

        <span class="px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Bags & Footwear
        </span>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </nav>
    <hr class="m-0" />
</div>
<!-- Desktop version ends -->
   
</template>
<script>
export default {
  name: 'DesktopNav',
}
</script>
<style>
.dropdown-item.active,
.dropdown-item:active {
  background-color: white !important;
  color: black;
}
.dropdown-menu[data-bs-popper]{
  left: -50px;
}
</style>