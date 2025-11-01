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
        questionsIncomplete: [],
        questions: [],
        answerQuestions: [],
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
        email: '',
        isAuthenticated: false
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
            if (name) {
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
        EMAIL(state) {
            return state.email
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

        setAddQuestion(state, question) {
            state.questions.push(question)
        },
        setDone(state, singleQuestionData) {
            const { question: question, questionIndex: questionIndex } = singleQuestionData;
            state.questions[questionIndex] = question
        },

        async setRecieveQuestions(state, questions) {
            // receive question data from server dispatched from answerQuestion component
            state.answerQuestions = await questions.data().Questions
            state.questionTitle = await questions.data().questionTitle
            state.teacherName = await questions.data().teacherName
            state.teacherId = await questions.data().teacherId
        },
        setSignup(state, signUpInfo_) {
            state.teacherName = signUpInfo_.data.name
            state.teacherId = signUpInfo_.data.id
            state.testSubmissions = signUpInfo_.data.submissions
            state.signUpInfo = signUpInfo_
        },
        setStudentName(state, studentName) {
            state.studentName = studentName
        },
        setTeacherName(state, teacherName) {
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
            state.email = user.data().email
            state.isAuthenticated = true
        }
    },



    actions: {
        updateCurrentTeacher(context, currentTeacher) {
            getDoc(doc(users, currentTeacher.uid))
                .then((user) => {
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
                    routes.push({ name: 'questionCode' })

                })

        },

        done(context, singleQuestionData) {
            // add new question to the list of questions
            context.commit('setDone', singleQuestionData);
        },

        async recieveQuestions(context, { question, questionCode }) {
            // retrieve all questions frm firestore
            context.commit('setQuestionCode', questionCode)
            context.commit('setRecieveQuestions', question)

        },

        submitAnswers(context, answeredQuestionData) {
            addDoc(questionAnswers, answeredQuestionData)
                .then((res) => {
                    context.commit('setQuestionAnswersCode', res.id)
                    context.commit("setQuestionAnswers", answeredQuestionData)
                })
        },

        getStudentSubmissions(context, id) {
            const teacherQuestions = query(questionAnswers, where('teacherId', '==', id))
            let answerInfo = []
            getDocs(teacherQuestions)
                .then((snapshot) => {
                    snapshot.forEach((question) => {
                        answerInfo.push({ id: question.id, studentName: question.data().studentName, questionTitle: question.data().questionTitle })
                    })
                    context.commit('setAnswerInfo', answerInfo)
                })

        },
        addQuestion(context) {
            context.commit("setAddQuestion", Math.random().toString().slice(2, 8))
        }

    }

})