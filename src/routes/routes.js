import Welcome from '../views/welcomePage.vue'
import SignupView from '../views/signUp.vue'
import questiontype from '../views/questionType.vue'
import studentpage from '../views/studentPage.vue'
import multiplechoiceQ from '../views/multipleChoiceQuestion.vue'
import questionCode from '../views/questionCode.vue'
import searchQuestion from '../components/searchQuestion.vue'
import answerQuestion from '../components/answerQuestion.vue'
import allMarkedQuestions from '../views/allMarkedQuestions.vue'
import takeTest from '../views/takeTest.vue'
import LogIn from '../views/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    meta:{
      title:'Welcome to iClass'
    }
  },
  {
    path:'/signup/',
    name:"signup",
    component: SignupView,
    meta:{
      title:'Sign Up to iClass'
    }
  },
  {
    path:'/takeTest/',
    name:"takeTest",
    component: takeTest,
    meta:{
      title:'Take a test'
    }
  },
  {
    path:'/login/',
    name:"logIn",
    component: LogIn,
    meta:{
      title:'Login to iClass'
    }
  },
  {
    path:'/questiontype',
    name:"questiontype",
    component: questiontype,
    meta:{
      title:'Choose your question type'
    }
    
  },
  {
    path:'/studentpage',
    name:"studentpage",
    component: studentpage,
    children: [
     { 
      path:'/studentpage/searchQuestion/',
      name:"searchQuestion",
      component: searchQuestion,
      meta:{
        title:'Search Question'
      }
    },
    { 
      path:'/studentpage/answerQuestion/:questionCode',
      name:"answerQuestion",
      component: answerQuestion,
      props: true,
      meta:{
        title:'Take test'
      }
    },
   
    ]
  },
  { 
    path:'/studentpage/markedQuestions/:QuestionId',
    name:"markedQuestions",
    component: allMarkedQuestions,
    meta:{
      title:'Marked Questions'
    }
  },
  {
    path:'/questiontype/multiplechoiceQ',
    name:"multiplechoiceQ",
    component: multiplechoiceQ,
    meta:{
      title:'Set Multiple Choice Questions'
    }
  },
  {
    path:'/questiontype/multiplechoiceQ/questionCode/',
    name:"questionCode",
    component: questionCode,
    props:true,
    meta:{
      title:'Question Code'
    }
  }
 
]
export default routes
