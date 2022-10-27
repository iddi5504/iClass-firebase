<template>
 <div class="d-flex flex-column align-items-center h-100 w-100">
  <AppNav></AppNav>
  <!-- create test -->
  <transition name="switch" mode="out-in">
    <div key="1" v-if="active=='createTest'" class="body d-flex  justify-content-around flex-column align-items-ceneter text-center">
      <!-- teacher image -->
      <div class=" d-flex text-center align-items-center  flex-column">
        <img src="../assets/teacher.png" class="coloredicon" alt="">
        <div class="h3" style="font-weight:500; color:var(--titleColor);">Choose question type</div>
      </div>
  
      <!-- choices -->
      <div class=" d-flex flex-column justify-content-around d-flex align-items-ceneter text-center">
        <button @click="$router.push('/questiontype/multiplechoiceQ')" class="questiontype">
          Create Multiple Choice Question
        </button>
        <button disabled class="questiontype">
         <div> Create Free Text Test</div>
         <div>Coming Soon</div>
        </button>
      </div>
    </div>
  
  <!-- Submitted answers -->

    <div key="2" v-if="active=='submittedTest'" class="body d-flex  justify-content-start flex-column align-items-ceneter text-center w-100">
      <h3>Submitted Tests</h3>
      <div class="w-100" v-for="(submission,submissionIndex) in submissions" :key="submissionIndex">
        <router-link class=" d-flex  justify-content-around flex-column align-items-center text-center w-100" :to="'/studentpage/markedQuestions/'+submission.submissionId">
          <div class=" d-flex  justify-content-around flex-column align-items-center text-center w-100">
            <div class="student d-flex flex-column justify-content-center align-items-start">
              <div>{{submission.studentName}}</div>
              <div>Class</div>
            </div>
        </div>
        </router-link>
      </div>
    </div>

  </transition>
 </div>
</template>

<script>
import store from "../store/store"
import AppNav from "../components/appNav"
export default {
  components: {
    AppNav
  },
  data(){
    return {
      active:"createTest"
    }
  },
  computed:{
    submissions(){
      return store.getters.submissions
    }
  },
  created(){
    // get the id of the submission made by the student
    store.dispatch("getStudentSubmissions")

  }
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


  
  .body{
    height: 100%;
    max-width: 500px;
    width: 100%;
    align-items: center;
  }
 
  nav div{
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
  }
  .active{
    color: var(--brandcolor);
    font-size: 1.3rem;
    font-weight: 700;
    transition: 0.2s all ease;
  }
  
  .divider{
    border-left: 2px #898989 solid;
    width: 0px;
    height: inherit;
  }
  .coloredicon{
    width: 135px;
    height: auto;
  }

  .questiontype{
    width: 100%;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 500;
    padding: 11px;
    margin: 17px 10px;
    height: 100px;
    text-align: center;
    display: flex;
    border: none;
    align-items: center;
    outline: none;
    box-shadow: 0px 0px 4px 1px grey;
    flex-direction: column;
    justify-content: space-around;
    color:black;
  }
.questiontype div{
  color: black;
}
  .questiontype:first-child:hover{
    background-color: hsl(210deg 70% 47%);
    border: 2px solid #7ee9f8;
    transition: 0.5s ease all;
    transform: scale(1.04);
  }

  .student{
    background: var(--primaryBackgroundColor);
    width: 85%;
    max-width: 700px;
    border-radius: 10px;
    padding: 10px 23px;
    margin: 10px;
    box-sizing: content-box;
    font-size: 19px;
    
  }
  .student div:first-child{
    font-size: 1.4rem;
    font-weight: bold;
  }
.body h3{
  padding: 10px;
}
</style>