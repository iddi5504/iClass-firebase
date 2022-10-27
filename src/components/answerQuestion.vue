<template>
  <div class="body d-flex flex-column align-items-center w-100">
    
    <!-- body -->
  <transition name="switch" mode="out-in" >
   <div key="1" class="body d-flex flex-column align-items-center w-100" v-if="!submitted">
    <h3>{{questionTitle}}</h3>
    <div class="body d-flex flex-column align-items-center w-100">
      <div v-for="(question,questionIndex) in questions.Questions" :key="questionIndex" class="w-100">
        <singleQuestion :question="question" :questionIndex="questionIndex" :correctAnswer="question.answer"></singleQuestion>
      </div>
    </div>
    <button @click="submit" class="submit">
      Submit
    </button>
   </div>
   <!-- success message -->
    <div key="2" v-if="submitted" class="p-3 text-center d-flex flex-column justify-content-center align-items-center h-100">
      <h2 style="color:var(--titleColor);" class="">You have successfull answer {{teacherName}}'s test </h2>
      <button @click="showAnswers" class="button m-5">Show anwers</button>
  </div>
</transition>
  </div>
</template>

<script>
import { bus } from "../main.js"
import singleQuestion from "./singleQuestion"
import store from "../store/store"
import { mapGetters } from "vuex"

export default {
  components: {
    singleQuestion
  },

  data() {
    return {
      questionCode: "",
      answers: [],
      score: '',
      submitted: false,
      answeredQuestionData:[],
    }
  },
  methods: {
    submit() {
      const answeredQuestionData={
          id:this.randomQuestionId,
          studentName:this.studentName,
          teacherName:this.teacherName,
          questions:this.answeredQuestionData
      }
      console.warn("🚀 ~ file: answerQuestion.vue ~ line 62 ~ submit ~ answeredQuestionData", answeredQuestionData)

      // dispatch answer data to store      
      store.dispatch("submitAnswers",answeredQuestionData)
      .then(() =>{
        this.submitted=true
      })
    },
    showAnswers(){
      this.$router.push("/studentpage/markedQuestions/"+this.randomQuestionId)
    }
  },
  created() {
    // recieve user choice data from singleQuestion components
    bus.$on("choice", (choice) => {
      this.answers[choice.questionIndex] = choice
      // console.log(this.answers)

    })
    // recieve emiition from singleQuestion
    bus.$on("answeredQuestion",(data) => {
      this.answeredQuestionData[data.questionIndex] = data
      console.table(this.answeredQuestionData)
    })
    //recieve questions from the server
   var questionCode = this.$route.params.questionCode
    store.dispatch("recieveQuestions", questionCode)
   
  },
  
  computed:{
    randomQuestionId(){
      return Math.random().toString().slice(3,10)
    },
    ...mapGetters(['questionTitle','questions','teacherName','studentName'])
  },
}
</script>

<style scoped>
.switch-move,
.switch-enter-active,
.switch-leave-active{
    transform: translateX(0);
    opacity: 1;
    transition: all 0.5s ease-in-out;
  
}
.switch-enter{
  opacity: 0;
  transform: translateX(-100%) !important;
}
.switch-leave-to{
  opacity: 0;
  transform: translateX(100%);

}


.body {
  width: 98% !important;
  max-width: 700px;
}

.submit {
  width: 300px;
  padding: 10px;
  color: black;
  background-color: var(--brandcolor);
  border: none;
  margin: 7px 5px;
  border-radius: 10px;
  box-sizing: content-box;
}

</style>