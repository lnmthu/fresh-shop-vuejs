<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="header__top__left">
              <ul>
                <li><i class="fa fa-envelope"></i> thuicetea@gmail.com</li>
                <li><i class="fa fa-phone"></i> 0979 4988 45</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="header__top__right">
              <div class="header__top__right__social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-pinterest-p"></i></a>
              </div>
              <!-- <div class="header__top__right__language">
                <img src="dist/img/language.png" alt="" />
                <div>English</div>
                <!-- <span class="arrow_carrot-down"></span>
                <ul>
                  <li><a href="#">Spanis</a></li>
                  <li><a href="#">English</a></li>
                </ul> -->
              </div>
              <!-- <div class="header__top__right__auth">
                <a href="#"><i class="fa fa-user"></i> Login</a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="header__logo">
            <router-link to="/"><img src="dist/img/logo.png" alt="" /></router-link>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
              <li>
                <router-link to="/" tag="a" active-class="active" exact
                  >Trang chủ</router-link>
                <li><router-link to="/shop" tag="a" active-class="active" exact>Cửa hàng</router-link></li>

                <li><router-link to="/blog" tag="a" active-class="active" exact>Bài viết</router-link></li>
                <li><router-link to="/contact" tag="a" active-class="active" exact>Liên hệ</router-link></li>
            </ul>
          </nav>
        </div>
        <!-- <div class="col-lg-3">
          <div class="header__cart">
            <ul>
              <li>
                <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-shopping-bag"></i> <span>3</span></a
                >
              </li>
            </ul>
            <div class="header__cart__price">item: <span>$150.00</span></div>
          </div>
        </div> -->
      </div>
      <div class="humberger__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style  scoped>
</style>
