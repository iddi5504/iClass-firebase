<template>
    <div class="body d-flex flex-column align-items-center w-100">
        <div class="questioncontainer d-flex text-left flex-column align-items-left justify-content-start w-100">
            <div  class="h5 text-left w-100">Question {{questionIndex+1}}</div>
            <div class="questionText" ref="question" style="word-break: break-all; padding: 8px; font-size: 17px;" >{{answeredquestion.question}}</div>
            <div class="d-flex flex-column">
               <div class="h6">Options</div>
            </div>
            <!-- options -->
            <div class="d-flex flex-column align-items-start justify-content-start">
               <span class="w-100" v-for="(option, optionIndex) in answeredquestion.options" :key="optionIndex" >
                 <div class="d-flex justify-content-around w-100" >
                  <div ref="option" class="option p-3 m-1 text-left w-100 ">
                    {{option}}
                  </div>
                 </div>
               </span>
            </div>
         </div>
      </div>
</template>

<script>
export default {
    props:["answeredquestion","questionIndex"],
    mounted(){
      if (this.answeredquestion.answeredCorrectly) {
        this.$refs.option[parseInt(this.answeredquestion.userAnswer)-1].classList.add("correct")
      }else{
        this.$refs.option[parseInt(this.answeredquestion.userAnswer)-1].classList.add("selected")
      }
    }
}
</script>

<style scoped>

  
  .option{
    border-radius: 5px;
    cursor: pointer;
    background-color: hsl(4deg 63% 58% / 98%);
  }
  .selected{
    border-left: 11px solid #172618;
  }
  .correct{
    background-color: hsl(125deg 75% 66%);
    border-left: 11px solid #172618;

  }
  
</style>