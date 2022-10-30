<template>
  <div class="d-flex flex-column align-items-center h-100 w-100">
   <AppNav></AppNav>

   <div style="height: 100%;" class="d-flex justify-content-center flex-column align-content-center align-items-center">
        <img src="../assets/check.png" class="success">
        <div style="color:var(--brandcolor);" class=" h3 text-center py-4 px-3">
            You have sucessfully completed the questions
        </div>
        <div style="color:var(--textColor);" class="h4 px-4 text-center py-10 ">Share the code below to your student</div>
        <div style="color:var(--textColor); word-break:break-all;" class="h1 text-center p-2">
            {{questionCode}}
        </div>
   </div>
  </div>
</template>

<script>
import AppNav from "../components/appNav"
import { mapGetters } from 'vuex'
// import {bus} from '../main'
export default {
    components:{
        AppNav
    },
    computed:{
       ...mapGetters({questionCode:"QUESTIONCODE"})
    }
}
</script>

<style>
.success{
    width: 97px;
    height: auto;
  
}
</style>