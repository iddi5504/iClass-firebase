<template>
 <div class="d-flex flex-column align-items-center h-100 w-100">
  <AppNav></AppNav>
  <!-- section active -->
  <div  class="section d-flex flex-row align-items-center justify-content-around w-100">
    <div  @click="switch_('createTest')" >
      <h4 :class="{'active':active==='createTest'}">Set Question</h4>
    </div>
    <div @click="switch_('submittedTest')" >
      <h4 :class="{'active':active==='submittedTest'}">Test Submissions</h4>
    </div>
  </div>
  <!-- create test -->
  <transition name="switch" mode="out-in">
    <div key="1" v-if="active=='createTest'" class="body d-flex  justify-content-around flex-column align-items-ceneter text-center">
      <!-- teacher image -->
      <div class=" d-flex text-center align-items-center  flex-column">
        <img src="../assets/teacher.png" class="coloredicon" alt="">
        <div class="h3" style="font-weight:500; color:var(--titleColor);">Choose question type {{teacherName}}</div>
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
      <div  v-if="!submissionPresent" class="h3 h-100 d-flex justify-content-center flex-column align-items-center text-center">
        No submissions yet
      </div>
      <div class="w-100" v-for="(answerInfo,submissionIndex) in answerInfo" :key="submissionIndex">
        <router-link class=" d-flex  justify-content-around flex-column align-items-center text-center w-100" :to="'/studentpage/markedQuestions/'+answerInfo.id">
          <div class=" d-flex  justify-content-around flex-column align-items-center text-center w-100">
            <div class="student d-flex flex-column justify-content-center align-items-start">
              <div>{{answerInfo.studentName}}</div>
              <div class="text-left -2">{{answerInfo.questionTitle}}</div>
              <div>Class - <span style="color: #959595;">No Class</span></div>
            </div>
        </div>
        </router-link>
      </div>
    </div>

  </transition>
 </div>
</template>

<script>
import AppNav from "../components/appNav"
import { bus } from '../main'
import { mapGetters } from "vuex"
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
    ...mapGetters({answerInfo:'ANSWERINFO',teacherName:'TEACHERNAME'}),

    submissionPresent(){
      let present=Boolean
      if(this.answerInfo.length>0){
        present= true
      }else{
        present= false
      }
      
      return present
    }

  },
  created(){
    // get the id of the submission made by the student
    
    this.$store.dispatch("getStudentSubmissions")
    bus.$on(
      'showSubmissions',()=>{
        this.active='submittedTest'
      }
    )

  },
  methods:{
    switch_(active){
      this.active = active
    }
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
    max-width: 900px;
    align-items: center;
    max-height: 71vh;
  }
 
  nav div{
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
  }

  .section{
    padding: 10px;
    box-shadow: 1px 2px 6px 1px #031032;
  }

  .section div{
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
   
  }
  .section div h4{
    font-size: 1.3rem;
  }
  .section div:last-child{
    border-left: 1px inset lightblue; 
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
    margin: 7px 10px;
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
  .student div:first-child:hover{
    text-decoration: underline;
  }
.body h3{
  padding: 10px;
}
a{
  text-decoration: none;
}
</style>