<template>
   
</template>

<script>
import {mapGetters} from 'vuex'
import moment from "moment";

export default {
computed:{
    ...mapGetters(["currentBlog"])
},
methods:{
   formatDate(date) {
      return moment(date).format("YYYY-MM-DD [at] hh:mm");
    },
}

};
</script>

<style scoped>
</style>
