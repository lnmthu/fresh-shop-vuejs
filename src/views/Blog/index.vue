<template>
  <div>
    <Hero />
       <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src="dist/img/banner/banner-1.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img src="dist/img/banner/banner-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <BreadCrumb />
     <section class="blog spad">
        <div class="container">
            <div class="row">
              <Sidebar />
                <router-view/>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import BreadCrumb from "./components/BreadCrumb";
import Hero from "../../components/Hero/Other";
import Sidebar from "./components/Sidebar";

export default {

  components: {
    BreadCrumb,
    Hero,
    Sidebar,
  },
};
</script>

<style scoped>
</style>
