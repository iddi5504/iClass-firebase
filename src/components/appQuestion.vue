<template>
    <div class="questioncontainer d-flex text-left flex-column align-items-left justify-content-start">
        <div  class="h5 text-left w-100">Question {{questionNumber}}</div>
        <textarea v-show="!questioncomplete" v-model.lazy="questiontext" name="question" id="question" cols="30" rows="10" class="questiontextfield"></textarea>
        <div class="questionText" v-show="questioncomplete" ref="question" style="word-break: break-all; padding: 8px; font-size: 17px;" >{{questiontext}}</div>
        <div class="d-flex flex-column">
           <div class="h5">Options</div>
           <div class="h6">Add options and select the correct answer</div>
        </div>
        <!-- options -->
        <div class="d-flex flex-column align-items-start justify-content-start">
           <span class="w-100" v-for="(option, optionIndex) in numberOptions" :key="optionIndex" >
             <div class="d-flex justify-content-around w-100" >
               <input type="radio" ref="radio" name="selectanswer"  :value="optionIndex" class="radio" v-model="correctanswer" >
               <input type="text" ref="option" class="optionstextfield">
             </div>
           </span>
           
          <div class="d-flex justify-content-around">
            <button @click="addOptions" class="addquestionbutton">+Add</button>
            <button @click="done" class="addquestionbutton" ref="done">Done</button>
            <button @click="Delete" class="addquestionbutton">Delete</button>
          </div>
        </div>
     </div>
</template>

<script>
import { bus } from "../main.js"
import store from "../store/store"
export default {
    props:["questionIndex"],
    data(){
        return {
            questiontext:"",
            numberOptions:0,
            options:[],
            correctanswer:"",
            questioncomplete:false,
            finishedQuestionText:"",
            showQuestion:true,
        }
    },
    methods: {
        addOptions(){
        if (this.numberOptions<4) {
          this.numberOptions+=1
        } else {
          console.log("you can cannot add options")
        }
      },
      done(){
        // check if there are options available
         try {
            this.$refs.option.forEach(option => {
            this.options.push(option.value);
         });
         } catch (error) {
            console.log("Add option")
         }
         const id=Math.random().toString().slice(3,10)
          const question={
            id:id,
            question:this.questiontext,
            options:this.options,
            answer:this.correctanswer

          }
         this.questioncomplete=!this.questioncomplete
        store.dispatch("done",{question:question,questionIndex:this.questionIndex})
        if ( this.$refs.done.innerText=="Done") {
            this.$refs.done.innerText="Edit"
            // remove the disabled attribute from option inpu
            this.$refs.option.forEach(option => {
            option.setAttribute("disabled","");
         });
         // remove the disabled attribute from answer radio
         this.$refs.radio.forEach(radio => {
            radio.setAttribute("disabled","");
         });
        } else {
            this.$refs.done.innerText="Done"
          // remove the disabled attribute from option inputfields
            this.$refs.option.forEach(option => {
            option.removeAttribute("disabled","");
         });
          // remove the disabled attribute from answer radio
         this.$refs.radio.forEach(radio => {
            radio.removeAttribute("disabled","");
         });
        }
      

      },
      Delete(){
        console.log(this.questionIndex)
        bus.$emit("deleted",this.questionIndex)
      }
    },
    computed:{
      questionNumber(){
         const questionNumber= this.questionIndex+1
         return questionNumber
      }
    }
}
</script>

<style scoped>

  .addquestionbutton{
    background: var(--secondaryBackgroundColor);
    color: var(--textColor);
    font-size: 14px;
    outline: none;
    border: none;
    padding: 9px;
    border-radius: 5px;
    margin: 8px;
  }

  .questionText{
    background: var(--secondaryBackgroundColor);
    border-radius: 7px;
    padding: 5px;
  }
</style>