import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import { firestore } from '../firebase/firebase';
import {
    addDoc,
    collection,
    getDoc,
    getDocs,
    doc,
    where,
    query,
} from 'firebase/firestore';
const questions = collection(firestore, "questions")
const questionAnswers = collection(firestore, "questionAnswers")
// load store
export default new Vuex.Store({
    state: {
        studentName: "",
        teacherName: "",
        teacherId: "",
        questionsIncomplete: [{}],
        questions: [],
        anwerQuestions: [{}],
        questionTitle: "",
        questionAnswersCode: "",
        questionAnswers: [],
        score: "",
        testSubmissions: [],
        testSubmissionsWithStudentNames: [],
        signUpInfo: [],
        questionCode:null,
        localQuestionCode:"",
        answerInfo:[]
    },
    getters: {
        // questions for user to answer
        questions(state) {
            return state.anwerQuestions
        },
        questionTitle(state) {
            return state.questionTitle
        },
        answeredQuestionData(state) {
            return state.questionAnswers
        },
        score(state) {
            return state.score
        },
        studentName(state) {
            return state.studentName
        },
        submissions(state) {
            return state.testSubmissionsWithStudentNames
        },
        questionCode(state){
            return state.questionCode
        },
        teacherName(state){
            return state.teacherName
        },
        questionCreation(state){
            return state.questions
        },
        answerInfo(state){
            return state.answerInfo
        }
    },
    mutations: {
        answerInfo(state,answerInfo){
            state.answerInfo=answerInfo
        },
        updateQuestionCode(state,id){
            state.questionCode=id
        },
        teacherInfo(state,teacherInfo) {
            state.teacherId = teacherInfo.teacherId
            state.teacherName = teacherInfo.teacherName
        },
       
        addQuestion(state,question) {
            state.questions.push(question)
            console.log(state.questions)
        },
        done(state, singleQuestionData) {
            const { question: question, questionIndex: questionIndex } = singleQuestionData;
            state.questions[questionIndex] = question
        },

        recieveQuestions(state, questions) {
            // receive question data from server dispatched from answerQuestion component
            state.anwerQuestions = questions.data()
            state.questionTitle = questions.data().questionTitle
            state.teacherName = questions.data().teacherName
            state.teacherId = questions.data().teacherId
        },
        signup(state, signUpInfo_) {
            state.teacherName = signUpInfo_.data.name
            state.teacherId = signUpInfo_.data.id
            state.testSubmissions = signUpInfo_.data.submissions
            console.warn("🚀 ~ file: store.js ~ line 43 ~ signup ~ signUpInfo.data.submissions", signUpInfo_.data.submissions)
            state.signUpInfo = signUpInfo_
            console.error("🚀 ~ file: store.js ~ line 43 ~ signup ~ state.testSubmissions", state.testSubmissions)
        },
        studentName(state, studentName) {
            console.warn("🚀 ~ file: store.js ~ line 48 ~ userLogIn ~ studentName", studentName)
            state.studentName = studentName
        },
        teacherName(state, teacherName) {
            console.warn("🚀 ~ file: store.js ~ line 48 ~ userLogIn ~ studentName", teacherName)
            state.teacherName = teacherName
        },
        // set question answers
        setQuestionAnswers(state, questionAnswers) {
            // filter out the question that was answered correctly
            let questionsAnsweredCorrectly = questionAnswers.questions.filter(questionAnswer => {
                return questionAnswer.correctAnswer == questionAnswer.userAnswer
            })
            // calculate the score
            state.score = `${questionsAnsweredCorrectly.length}/${questionAnswers.questions.length}`;
            // add a property to the question answers object called answeredCorrectly
            questionAnswers.questions.map(questionAnswer => {
                if (questionAnswer.correctAnswer == questionAnswer.userAnswer) {
                    questionAnswer.answeredCorrectly = true
                } else {
                    questionAnswer.answeredCorrectly = false
                }
            })
            state.questionAnswers = questionAnswers
            state.questionCode=questionAnswers.id
        },
        getStudentSubmissions(state, testSubmission) {
            console.log(testSubmission)
            state.testSubmissionsWithStudentNames.push(testSubmission)

        },
        questionCode(state,id){
            state.questionCode=id
        },
        questionAnswersCode(state,id){
            state.questionAnswersCode=id
        },
        updateTeacherId(state,id){
            state.teacherId=id
        }
    },

  

    actions: {
        studentName(context,studentName){
            context.commit('studentName',studentName)
        },
       
        // get question answers from the server
        getQuestionAnswers(context,questionAnswersCode) {
            const thisQuestionAnswers=doc(questionAnswers,questionAnswersCode)
            getDoc(thisQuestionAnswers)
            .then((questionAnswers_) => {
                const data=questionAnswers_.data()
                context.commit("setQuestionAnswers",data)
            })
        },
        questionsComplete(context, questionData) {
            // post all questions to the server
            addDoc(questions, questionData)
            .then((response)=>{
                context.commit('updateQuestionCode',response.id)
                console.log(context.state.questionCode)
            })

        },

        done(context, singleQuestionData) {
            // add new question to the list of questions
            context.commit('done', singleQuestionData);
        },

        recieveQuestions(context,localQuestionCode) {
            // retrieve all questions frm firestore
            context.commit('questionCode',localQuestionCode)
            const question_=doc(questions,localQuestionCode)
            getDoc(question_)
                .then((snapshot) => {
                    console.log("🚀 ~ file: store.js ~ line 152 ~ .then ~ snapshot", snapshot.data())
                    context.commit('recieveQuestions', snapshot);

                })

           
        },

        submitAnswers(context, answeredQuestionData) {
            //if answer already exists, create a new answeredQuestionData 
            // axios.post('http://localhost:3000/answeredQuestions/', answeredQuestionData)
            //     .then((res) => {
            //         context.commit("setQuestionAnswers", res.data)
            //         // get submissons
            //         axios.get('http://localhost:3000/teachers/' + context.state.teacherId)
            //             .then((teachers) => {
            //                 const answerId = teachers.data.submissions
            //                 answerId.push(res.data.id)
            //                 axios.patch('http://localhost:3000/teachers/' + context.state.teacherId, { submissions: answerId })
            //                     .then(() => {
            //                         console.log("patch request successful")
            //                     })
            //             });
            //     })

            // submit answers to firestore
            
            addDoc(questionAnswers,answeredQuestionData)
            .then((res) =>{
                context.commit('questionAnswersCode',res.id)
                context.commit("setQuestionAnswers",answeredQuestionData)
            })
        },

        // getStudentSubmissions(context) {
        //     // get the studnet names from the test submissions
        //     console.warn("this happed")
        //     console.error("submissions", context.state.testSubmissions)
        //     console.error("submissions", context.state.signUpInfo)
        //     console.error("submissions", context.state)
        //     context.state.testSubmissionsWithStudentNames = []
        //     context.state.testSubmissions.forEach((testSubmissionId) => {
        //         console.log("🚀 ~ file: store.js ~ line 175 ~ context.state.testSubmissions.forEach ~ testSubmissionId", testSubmissionId)
        //         console.count("id")
        //         axios.get("http://localhost:3000/answeredQuestions/" + testSubmissionId)
        //             .then((response) => {
        //                 const testSubmission = { submissionId: testSubmissionId, studentName: response.data.studentName }
        //                 context.commit("getStudentSubmissions", testSubmission)
        //                 console.log("🚀 ~ file: store.js ~ line 170 ~ .then ~ testSubmission", testSubmission)
        //                 console.log("🚀 ~ file: store.js ~ line 184 ~ .then ~ response", response)

        //             })
        //     })
        // }

        getStudentSubmissions(context){
            const teacherQuestions=query(questionAnswers,where('teacherId','==', context.state.teacherId))
            let answerInfo=[]
            getDocs(teacherQuestions)
            .then((snapshot)=>{
                snapshot.forEach((question)=>{
                    answerInfo.push({id:question.id,studentName:question.data().studentName,questionTitle:question.data().questionTitle})
                })
            console.log(answerInfo)
            context.commit('answerInfo',answerInfo)
            })

        },
        addQuestion(context){
            context.commit("addQuestion", Math.random().toString().slice(2,8))
        }

    }

})