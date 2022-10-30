import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import { firestore } from '../firebase/firebase';
import routes from '../routes/routes'
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
const users = collection(firestore, "users")
// load store
export default new Vuex.Store({
    state: {
        studentName: "",
        teacherName: "",
        teacherId: "",
        questionsIncomplete: [{}],
        questions: [],
        answerQuestions: [{}],
        questionTitle: "",
        questionAnswersCode: "",
        questionAnswers: [],
        score: "",
        testSubmissions: [],
        testSubmissionsWithStudentNames: [],
        signUpInfo: [],
        questionCode: null,
        localQuestionCode: "",
        answerInfo: [],
        email:'',
        isAuthenticated:false,
        alertMessage:"",
        showSubmissions:false,
    },
    getters: {
        // questions for user to answer
        QUESTIONS(state) {
            return state.answerQuestions
        },
        QUESTIONTITLE(state) {
            return state.questionTitle
        },
        ANSWEREDQUESTIONDATA(state) {
            return state.questionAnswers
        },
        SCORE(state) {
            return state.score
        },
        STUDENTNAME(state) {
            return state.studentName
        },
        SUBMISSIONS(state) {
            return state.testSubmissionsWithStudentNames
        },
        QUESTIONCODE(state) {
            return state.questionCode
        },
        TEACHERNAME(state) {
            return state.teacherName
        },
        QUESTIONCREATION(state) {
            return state.questions
        },
        ANSWERINFO(state) {
            return state.answerInfo
        },
        INITIALS(state) {
            const name = state.teacherName
            let namelist = name.split(" ")
            if(name){
                try {
                    let firstInitial = namelist[0][0].toUpperCase()
                    let secondInitial = namelist[1][0].toUpperCase()
                    return `${firstInitial}.${secondInitial}`
                } catch (error) {
                    let firstInitial = namelist[0][0].toUpperCase()
                    return `${firstInitial}`
                }
            }
        },
        EMAIL(state){
            return state.email
        },
        ALERTMESSAGE(state){
            return state.alertMessage
        }
    },
    mutations: {
        setAnswerInfo(state, answerInfo) {
            state.answerInfo = answerInfo
        },
        setUpdateQuestionCode(state, id) {
            state.questionCode = id
        },
        setTeacherInfo(state, teacherInfo) {
            state.teacherId = teacherInfo.teacherId
            state.teacherName = teacherInfo.teacherName
        },

        setAddQuestion(state,id) {
            state.questions.push({id:id})
        },
        setDone(state, singleQuestionData) {
            const { question: question_, id: id } = singleQuestionData;
            state.questions.forEach((question)=>{
                console.log(question)
                if(question.id === id){
                    state.questions[state.questions.indexOf(question)]=question_
                }
            })
        },

        async setRecieveQuestions(state, questions) {
            // receive question data from server dispatched from answerQuestion component
            state.answerQuestions =await questions.data()
            state.questionTitle = await questions.data().questionTitle
            state.teacherName =await questions.data().teacherName
            state.teacherId =await questions.data().teacherId
        },
        setSignup(state, signUpInfo_) {
            state.teacherName = signUpInfo_.data.name
            state.teacherId = signUpInfo_.data.id
            state.testSubmissions = signUpInfo_.data.submissions
            console.warn("🚀 ~ file: store.js ~ line 43 ~ signup ~ signUpInfo.data.submissions", signUpInfo_.data.submissions)
            state.signUpInfo = signUpInfo_
            console.error("🚀 ~ file: store.js ~ line 43 ~ signup ~ state.testSubmissions", state.testSubmissions)
        },
        setStudentName(state, studentName) {
            console.warn("🚀 ~ file: store.js ~ line 48 ~ userLogIn ~ studentName", studentName)
            state.studentName = studentName
        },
        setTeacherName(state, teacherName) {
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
            state.questionCode = questionAnswers.id
        },
        setStudentSubmissions(state, testSubmission) {
            console.log(testSubmission)
            state.testSubmissionsWithStudentNames.push(testSubmission)

        },
        setQuestionCode(state, id) {
            state.questionCode = id
        },
        setQuestionAnswersCode(state, id) {
            state.questionAnswersCode = id
        },
        setCurrentTeacher(state, user) {
            state.teacherId = user.id
            state.teacherName = user.data().teacherName
            state.email= user.data().email
            state.isAuthenticated=true
        },
        setAlertMessage(state, message) {
            state.alertMessage=message
        },
        resetAlertMessage(state) {
            state.alertMessage=''
        },
        setShowSubmissions(state,showSubmissions){
            state.showSubmissions=showSubmissions
        },
        isAuthenticated(state,isAuthenticated) {
            state.isAuthenticated=isAuthenticated
        },
        addQuestion(state){
            state.numberOfQuestions=state.numberOfQuestions + 1
        },
        setDeleteQuestion(state,questionId){
            console.log(state.questions.splice(questionId,1))
            state.questions.splice(questionId,0) 
        }
    },



    actions: {
        updateCurrentTeacher(context, currentTeacher) {
            getDoc(doc(users, currentTeacher.uid))
                .then((user) => {
                    console.log(user.data())
                    context.commit('setCurrentTeacher', user)
                })
        },
        studentName(context, studentName) {
            context.commit('setStudentName', studentName)
        },

        // get question answers from the server
        getQuestionAnswers(context, questionAnswersCode) {
            const thisQuestionAnswers = doc(questionAnswers, questionAnswersCode)
            getDoc(thisQuestionAnswers)
                .then((questionAnswers_) => {
                    const data = questionAnswers_.data()
                    context.commit("setQuestionAnswers", data)
                })
        },
        questionsComplete(context, questionData) {
            // post all questions to the server
            addDoc(questions, questionData)
            .then((response) => {
                context.commit('setUpdateQuestionCode', response.id)
                routes.push({name:'questionCode'})

                })

        },

        done(context, singleQuestionData) {
            // add new question to the list of questions
            context.commit('setDone', singleQuestionData);
        },

        async recieveQuestions(context, localQuestionCode) {
            // retrieve all questions frm firestore
            context.commit('setQuestionCode', localQuestionCode)
            const question_ =await doc(questions, localQuestionCode)
            const snapshot=await getDoc(question_)
            console.log("🚀 ~ file: store.js ~ line 152 ~ .then ~ snapshot", snapshot.data())
            context.commit('setRecieveQuestions', snapshot);


        },

        submitAnswers(context, answeredQuestionData) {
            addDoc(questionAnswers, answeredQuestionData)
                .then((res) => {
                    context.commit('setQuestionAnswersCode', res.id)
                    context.commit("setQuestionAnswers", answeredQuestionData)
                })
        },

        getStudentSubmissions(context,id) {
            const teacherQuestions = query(questionAnswers, where('teacherId', '==', id))
            console.log("🚀 ~ file: store.js ~ line 230 ~ getStudentSubmissions ~ teacherQuestions", teacherQuestions)
            let answerInfo = []
            getDocs(teacherQuestions)
                .then((snapshot) => {
                    snapshot.forEach((question) => {
                        answerInfo.push({ id: question.id, studentName: question.data().studentName, questionTitle: question.data().questionTitle })
                    })
                    console.log(answerInfo)
                    context.commit('setAnswerInfo', answerInfo)
                })

        },
        addQuestion(context) {
            context.commit("setAddQuestion",Math.random().toString().slice(2,8))
        },
        deleteQuestion(context,questionId) {
            context.commit("setDeleteQuestion",questionId)
        }

    }

})