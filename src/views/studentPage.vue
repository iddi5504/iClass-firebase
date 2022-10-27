<template>
 <div class="d-flex flex-column align-items-center h-100 w-100">
  <AppNav></AppNav>
  <transition name="switch" mode="out-in">
  <router-view class="w-100">
  </router-view>
  </transition>
   <!-- Test -->
  
 </div>
</template>

<script>
import AppNav from "../components/appNav"
export default {
  components:{
    AppNav
  },
  data(){
    return {
    
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
  .body{
    max-width: 377px;
    height: 100%;
  }
  .switch-enter-active,
  .switch-leave-active{
      opacity: 1;
      transition: all 0.5s ease-in-out;
    
  }
  .switch-enter{
    opacity: 0;
  }
  .switch-leave-to{
    opacity: 0;
  
  }
</style>