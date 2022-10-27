<template>
  <div class="d-flex flex-column align-items-center w-100 align-self-start">
    <AppNav></AppNav>
    <div class="body d-flex flex-column align-items-center justify-content-start">
      <input v-model="questionTitle" type="text" id="questionTitle" placeholder="Type the title of the test">
      <button @click="addQuestion" class="addquestionbutton">
        Add Question
      </button>
      <transition-group  class="appQuestion" name="animate" >
        <appQuestion v-for="(question,questionIndex) in question" :key="question.id" :questionIndex="questionIndex" :question="question">
        </appQuestion>
      </transition-group>
      <button v-show="showComplete" @click="questionsComplete" class="addquestionbutton">
        Done
      </button>

    </div>
  </div>
</template>

<script>
import { bus } from "../main.js"
import appQuestion from "../components/appQuestion"
import store from "../store/store"
import AppNav from "../components/appNav" 
export default {
  components: {
    appQuestion,
    AppNav
  },
  data() {
    return {
      questiontext: "",
      numberOptions: 0,
      options: [],
      correctanswer: "",
      numberOfQuestions: 0,
      questioncomplete: false,
      questionTitle: "",
      question:'',
      questionCode_:''
      // currentQuestion:[]
    }
  },
  methods: {
    addQuestion() {
      // this.numberOfQuestions = this.numberOfQuestions + 1;
      this.questions={id:Math.random().toString().slice(2,9)}
     
    },
    questionsComplete() {
      // const characters = "1 m 7 6 4 9 n p  3 i c d 4 5 6 a b o e f g h k l j q r 7 k l 0 k l s t u v w x y z".split(" ")
      // const randomized = []
      // for (let index = 0; index < 10; index++) {
      //   let characterIndex = Math.random().toString().slice(5, 6)
      //   randomized.push(characters[characterIndex])

      // }
      console.log(store.state.teacherName)
      const questionData = {
        teacherName:store.state.teacherName,
        teacherId:store.state.teacherId,
        questionTitle: this.questionTitle,
        Questions: this.questions
      }
        // dispatch the data to store and send to the server
        store.dispatch("questionsComplete", questionData)
        .then(()=>{
          this.$router.push("/questiontype/multiplechoiceQ/questionCode")

        })
        

    }

  },
  beforeUpdate(){

  },
  created() {
    bus.$on("question", (data) => {
      this.questions[data.questionIndex] = data.question;
      console.log()
    }),
      bus.$on("deleted", (questionIndex) => {
        this.questions.splice(questionIndex, 1);
        // console.log(this.questions)
      });
      this.question=this.questions
  },
 

  computed: {
    showComplete() {
      return this.question.length > 0 ? true : false;

    },
    questions:{
      get(){
        return store.getters.questionCreation
      },
      set(question){
        store.commit("addQuestion",question)
      }
    },
    questionCode(){
      return this.$store.getters.questionCode
    }

  },


}
</script>

<style scoped>

.animate-enter-active{
    transition: all 0.5s ease-in-out; 
}
.animate-move,
.animate-leave-active{
    transition: all 0.5s ease-in-out; 
}
.animate-enter{
  transform: translateX(-100%);
  opacity: 0;

}
.animate-leave-to{
  transform: translateX(100%);
  opacity: 0;

}

#questionTitle {
  width: 90%;
  height: 40px;
  padding: 10px 15px;
  margin: 10px;
  background-color: var(--primaryBackgroundColor);
  border-radius: 3px;
  transition: all 0.5s ease;
  text-align: center;

}
.appQuestion{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
input:hover{
  border:1px solid var(--secondaryBackgroundColor);
  transition: all 0.5s ease;

}

input:focus-within{
  padding: 8px;
  font-size: 1.3rem;
  transition: all 0.5s ease;
  border-radius: 12px;
}

.body {
  width: 98%;
  max-width: 700px;
}

.addquestionbutton {
  background:var(--primaryBackgroundColor);
  color: var(--textColor);
  font-size: 14px;
  outline: none;
  border: none;
  padding: 9px;
  border-radius: 5px;
  margin: 8px;
  align-self: flex-start;
}
</style>