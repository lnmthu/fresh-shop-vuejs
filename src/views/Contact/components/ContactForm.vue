<template>
  <div class="contact-form spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact__form__title">
            <h2>Liên hệ</h2>
          </div>
        </div>
      </div>
    <form @submit.prevent="onSubmit">
                <div class="row">
          <div class="col-lg-6 col-md-6">
            <ValidationProvider
              name="Name"
              rules="required"
              v-slot="{ errors }"
            >
              <input type="text" v-model.lazy="postForm.name" placeholder="Họ và tên" />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="col-lg-6 col-md-6">
            <ValidationProvider
              name="Email"
              rules="required|email"
              v-slot="{ errors }"
            >
              <input
                v-model.lazy="postForm.email"
                type="text"
                placeholder="Email của bạn"
              />
              <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="col-lg-12 text-center">
               <ValidationProvider
              name="Message"
              rules="required"
              v-slot="{ errors }"
            >
            <textarea v-model.lazy="postForm.message" placeholder="Lời nhắn"></textarea>
            <span class="error">{{ errors[0] }}</span>
            </ValidationProvider>
                  <p v-if="success" class="success">{{success}}</p>
        <ValidationObserver v-slot="{ invalid }">

  <VueLoadingButton
      type="submit"
      class="button"
      :loading="isLoading"
      styled="style"
    >Gửi</VueLoadingButton>
      <!-- <button  :disabled="invalid" class="site-btn">Gửi</button> -->
          </div>
        </div>
      </form>
        </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import VueLoadingButton from "vue-loading-button";

extend("email", {
    ...email,
  message: "{_field_}  is not valid",
});
extend("required", {
  ...required,
  message: "{_field_} is required",
});
export default {
    data(){
        return {
            isLoading: false,
            postForm:{
                name:null,
                email:null,
                message:null
            },
           success:null,
        }
    },
    methods:{
        onSubmit(){
              this.isLoading = true;
            this.$http.post("https://freshshopadmin.tk/api/contact",this.postForm).then((response) => {
              this.isLoading = false;
              this.success="Dạ cảm ơn bạn đã để lại lại nhắn cho FreshShop."
        }, (error) => { console.log(error) });
        },
    },
    components: {
        VueLoadingButton
    }
};
</script>

<style scoped>

.error {
  color: red;
font-size: x-large;
font-weight: inherit;
text-align: center;
}
.success{
  color: cadetblue;
font-size: x-large;
font-weight: inherit;
text-align: center;
}

</style>

