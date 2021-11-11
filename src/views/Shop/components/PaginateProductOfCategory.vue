<template>
  <div>
    <div class="filter__item">
      <div class="row">
        <div class="col-lg-4 col-md-5">
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="filter__found">
            <h6><span>{{numberPaginate.total}}</span> Sản phẩm được tìm thấy</h6>
          </div>
        </div>

      </div>
    </div>
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-6"
        v-for="(product, index) in listProOfCatePaginate"
        :key="index"
      >
        <div class="product__item">
          <div
            class="product__item__pic set-bg"
            :style="{ backgroundImage: 'url(' + product.image_uri + ')' }"
          >
            <ul class="product__item__pic__hover">
              <li>
                <a href="#"><i class="fa fa-heart"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-retweet"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-shopping-cart"></i></a>
              </li>
            </ul>
          </div>
          <div class="product__item__text">
            <h6>
               <router-link
                  tag="a"
                  :to="{
                    name: 'detailProduct',
                    params: { unique_id: product.unique_id },
                  }"
                  >{{ product.name }}</router-link>
            </h6>
            <h5>{{ product.price }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="product__pagination">
      <v-pagination
        v-show="numberPaginate.total > 0"
        v-model="listQuery.page"
        :page-count="numberPaginate.last_page"
        :classes="bootstrapPaginationClasses"
        :labels="paginationAnchorTexts"
        @change="loadListProductPaginate"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{...mapGetters(["listProOfCatePaginate","numberPaginate"])},
  data() {
    return {
      listQuery: {
        limit: 1,
        page: 1,
      },
      bootstrapPaginationClasses: {
        ul: "pagination",
        li: "page-item",
        liActive: "active",
        liDisable: "disabled",
        button: "page-link",
      },
      paginationAnchorTexts: {
        first: "Trang nhất",
        prev: "Trang trước đó",
        next: "Trang kế tiếp",
        last: "Trang cuối",
      },
    };
  },


  created(){
       this.loadListProductPaginate();
  },
  watch:{
    $route(to,from){
    this.listQuery.page=1
    this.loadListProductPaginate();
    }
  },
  methods:{
    loadListProductPaginate(){
    this.$store.dispatch("loadListQuery",this.listQuery)
    this.$store.dispatch("loadListProOfCatePaginate",this.$route.params.unique_id)
    }

  },


};
</script>

<style scoped>
</style>
