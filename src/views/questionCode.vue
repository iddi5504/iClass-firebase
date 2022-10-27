<template>
  <div class="d-flex flex-column align-items-center h-100 w-100">
   <AppNav></AppNav>

   <div style="height: 100%; max-height: 425px;" class="d-flex justify-content-center flex-column align-content-center">
        <div style="color:var(--brandcolor);" class=" h3 text-center py-5 px-3">
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
import {bus} from '../main'
export default {
    components:{
        AppNav
    },
    data(){
        return{
            // questionCode:""
        }
    },
    created(){
        bus.$on("questionCode",(code)=>{
            this.questionCode=code;
        })
    },
    computed:{
        questionCode(){
            return this.$route.params.id
        }
    }
}
</script>

<style>

</style>