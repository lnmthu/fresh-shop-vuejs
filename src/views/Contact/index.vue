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
    <Contact/>
    <Map/>
    <ContactForm/>
  </div>
</template>

<script>
import Hero from "../../components/Hero/Other";
import BreadCrumb from "./components/BreadCrumb";
import Contact from "./components/Contact";
import Map from "./components/Map";
import ContactForm from "./components/ContactForm";
export default {
  components: {
    Hero,
    BreadCrumb,
    Contact,
    Map,
    ContactForm
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
