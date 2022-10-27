import axios from 'axios';
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
const teachers = collection(firestore, "teachers")
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
        questionCode:"",
        localQuestionCode:""
    },
    mutations: {
        addQuestion(state,id) {
            state.questions.push({id:id})
            console.log(state.questions)
        },
        done(state, singleQuestionData) {
            const { question: question, questionIndex: questionIndex } = singleQuestionData;
            state.questions[questionIndex] = question
        },

        recieveQuestions(state, questions) {
            // receive question data from server dispatched from answerQuestion component
            state.anwerQuestions = questions
            state.questionTitle = questions.questionTitle
            state.teacherName = questions.teacherName
            state.teacherId = questions.teacherId
        },
        signup(state, signUpInfo_) {
            state.teacherName = signUpInfo_.data.name
            state.teacherId = signUpInfo_.data.id
            state.testSubmissions = signUpInfo_.data.submissions
            console.warn("🚀 ~ file: store.js ~ line 43 ~ signup ~ signUpInfo.data.submissions", signUpInfo_.data.submissions)
            state.signUpInfo = signUpInfo_
            console.error("🚀 ~ file: store.js ~ line 43 ~ signup ~ state.testSubmissions", state.testSubmissions)
        },
        userLogIn(state, studentName) {
            console.warn("🚀 ~ file: store.js ~ line 48 ~ userLogIn ~ studentName", studentName)
            state.studentName = studentName
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
        }
    },

    actions: {
        signup(context, signUpInfo) {
            try {
                const thisTeacher=query(teachers,where('id'==`${signUpInfo.id}`))
                // get the teacher information if it exists
                getDocs(thisTeacher)
                .then((signUpInfo) => {
                    console.log("🚀 ~ file: store.js ~ line 107 ~ .then ~ signUpInfo", signUpInfo)
                    context.commit("signup", signUpInfo.data())
                    console.log(signUpInfo.data())
                    console.log("this is been executed successfully")
                })
            } catch (err) {
                // if not successful create a new user
                addDoc(teachers,signUpInfo)
                .then((signUpInfo_) => {
                    context.commit("signup", signUpInfo_.data())
                    console.warn("🚀 ~ file: store.js ~ line 103 ~ .then ~ signUpInfo", signUpInfo_)
                })
                
            }
        
        
            
            axios.get('http://localhost:3000/teachers/' + signUpInfo.id)
                // if no teacher information is available post the teacer decision

        },
        // get question answers from the server
        getQuestionAnswers(context, questionCode) {
            console.log("🚀 ~ file: store.js ~ line 147 ~ getQuestionAnswers ~ questionCode", questionCode)
            const thisQuestionAnswers=doc(questionAnswers,'9HqeEKtqCGzme1wtJydR')
            getDoc(thisQuestionAnswers)
            .then((questionAnswers_) => {
                console.log("🚀 ~ file: store.js ~ line 118 ~ .then ~ questionAnswers", questionAnswers_)
                context.commit("setQuestionAnswers", questionAnswers_.data())
                console.log(questionAnswers_.data())
                console.log("this is the questions received from the server")
                console.log(context.state.questionAnswers)
            })
        },
        questionsComplete(context, questionData) {
            // post all questions to the server
            addDoc(questions, questionData)
            .then((response)=>{
                context.state.questionCode=response.id
                console.log(response.id)
            })

        },

        done(context, singleQuestionData) {
            // add new question to the list of questions
            context.commit('done', singleQuestionData);
        },

        recieveQuestions(context,localQuestionCode) {
            // retrieve all questions frm firestore
            const question_=doc(questions,localQuestionCode)
            getDoc(question_)
                .then((snapshot) => {
                    console.log("🚀 ~ file: store.js ~ line 152 ~ .then ~ snapshot", snapshot.data())
                    context.commit('recieveQuestions', snapshot.data());

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
                context.commit("setQuestionAnswers", res.data())
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
        addQuestion(context){
            context.commit("addQuestion", Math.random().toString().slice(2,8))
        }

    }

})