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
    <section class="blog-details spad">
      <div class="container">
        <div class="row">
              <Sidebar />
          <DetailBlog />
        </div>
      </div>
    </section>
    <!-- <RelatedBlog/> -->
  </div>
</template>

<script>
import Hero from "../../components/Hero/Other";
import BreadCrumb from "./components/BreadCrumb";
import Sidebar from "../Blog/components/Sidebar";
import DetailBlog from "./components/DetailBlog";
import RelatedBlog from "./components/RelatedBlog";
export default {
  components: {
    Hero,
    BreadCrumb,
    Sidebar,
    DetailBlog,
    RelatedBlog,
  },
  created() {
    this.$store.dispatch("loadCurrentBlog", this.$route.params.id);
    this.$store.dispatch("loadListBlogItems");
  },
  watch: {
    $route(to, from) {
      this.$store.dispatch("loadCurrentBlog", to.params.id);
    },
  },
};
</script>

<style scoped>
</style>
