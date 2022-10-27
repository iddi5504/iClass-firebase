<template>
  <div class="body d-flex flex-column align-items-center">
    <div class="questioncontainer d-flex text-left flex-column align-items-left justify-content-start w-100">
        <div  class="h5 text-left w-100">Question {{questionIndex+1}}</div>
        <div class="questionText" ref="question" style="word-break: break-all; padding: 8px; font-size: 17px;" >{{question.question}}</div>
        <div class="d-flex flex-column">
           <div class="h6">Options</div>
        </div>
        <!-- options -->
        <div class="d-flex flex-column align-items-start justify-content-start">
           <span class="w-100" v-for="(option, optionIndex) in question.options" :key="optionIndex" >
             <div class="d-flex justify-content-around w-100" >
              <div @click="selectOption(optionIndex)" ref="option" class="option p-3 m-1 text-left w-100">
                {{option}}
              </div>
             </div>
           </span>
        </div>
     </div>
  </div>
</template>

<script>
import { bus } from "../main.js"
export default {
props: ["question","questionIndex","correctAnswer"],
data(){
  return {
      submitted:false,
  }
},
methods:{
  selectOption: function(optionIndex) {
    // get option nodes
    const choice=this.$refs.option[optionIndex].classList.toString()
    // indicate that the option is selected
    if (choice.includes("selected")==false) {
      this.choice=optionIndex
      this.$refs.option.forEach(function(option) {
        option.classList.remove("selected")        
      })
      this.$refs.option[optionIndex].classList.add("selected")
      // emit user choice to answerQuestion component
      bus.$emit("answeredQuestion", 
      {
        id: this.question.id,
        questionIndex:this.questionIndex,
        questionNumber:this.questionIndex+1,
        userAnswer:optionIndex+1,
        correctAnswer:this.correctAnswer+1,
        question:this.question.question,
        options:this.question.options
      })
    } else {
      this.$refs.option[optionIndex].classList.remove("selected")
      
    }
  }
},
created(){
  bus.$on("submitted", (submitted)=>{
    this.submitted=submitted 
    
  })
}
}
</script>

<style scoped>
.body{
  width: 98% !important;
  max-width: 700px;
}


.option{
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
}

.option:hover{
background-color: hsl(213deg 100% 22%);

}
.selected{
  border-left: 11px solid var(--brandcolor);
  background-color: hsl(213deg 100% 16%);
}
</style>