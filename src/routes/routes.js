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
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path:'/signup/',
    name:"signup",
    component: SignupView
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
    
  },
  {
    path:'/studentpage',
    name:"studentpage",
    component: studentpage,
    children: [
     { 
      path:'/studentpage/searchQuestion/:name',
      name:"searchQuestion",
      component: searchQuestion
    },
    { 
      path:'/studentpage/answerQuestion/:questionCode',
      name:"answerQuestion",
      component: answerQuestion,
      props: true
    },
   
    ]
  },
  { 
    path:'/studentpage/markedQuestions/:QuestionId',
    name:"markedQuestions",
    component: allMarkedQuestions,
  },
  {
    path:'/questiontype/multiplechoiceQ',
    name:"multiplechoiceQ",
    component: multiplechoiceQ
  },
  {
    path:'/questiontype/multiplechoiceQ/questionCode/',
    name:"questionCode",
    component: questionCode,
    props:true
  }
 
]
// routes.beforeEach((to,next)=>{
//   document.title=to.meta.title
//   next()
// })

export default routes
