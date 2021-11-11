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
    <DetailProduct />
    <RelatedProduct />
  </div>
</template>

<script>
import Hero from "../../components/Hero/Other";
import BreadCrumb from "./components/BreadCrumb";
import DetailProduct from "./components/DetailProduct";
import RelatedProduct from "./components/RelatedProduct";
export default {
  components: {
    Hero,
    BreadCrumb,
    DetailProduct,
    RelatedProduct,
  },
  created(){
    this.$store.dispatch("loadCurrentProduct",this.$route.params.unique_id);
    this.$store.dispatch("loadListProduct")
  },
    watch:{
    $route(to,from){
      this.$store.dispatch("loadCurrentProduct",to.params.unique_id);
    }
  }



};
</script>

<style scoped>
</style>
