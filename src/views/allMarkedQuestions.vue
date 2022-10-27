<template>
    <div class="d-flex flex-column align-items-center w-100 h-100">
        <AppNav></AppNav>
        <div class="d-flex flex-column align-items-center w-100 justify-items-center">
            <div class="text-center">
                <div>
                    <h3>Total score</h3>
                </div>
                <div class="h2">{{score}}</div>
            </div>
            <div class="body d-flex flex-column align-items-center w-100">
                <div v-for="(answeredquestion,questionIndex) in answeredQuestionData.questions" :key="questionIndex"
                    class="w-100">
                    <transition name="show">     
                        <markedQuestion :answeredquestion="answeredquestion" :questionIndex="questionIndex">
                        </markedQuestion>
                    </transition>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import markedQuestion from "../components/markedQuestion"
import store from "../store/store"
import AppNav from "../components/appNav"
export default {
    components: {
        markedQuestion,
        AppNav
    },
    data() {
        return {
            submitted: false,
            showAnswers: false,

        }
    },
    created() {
        // get question from store from database
        store.dispatch("getQuestionAnswers", this.questionCode)
        .then(() => {
            console.log("taking the answer from the store ")
        })
        console.log("🚀 ~ file: allMarkedQuestions.vue ~ line 45 ~ created ~ this.questionCode", this.questionCode)

    },
    computed: {
        // the answeredQuestionData for marking 
        answeredQuestionData(){
            return store.getters.answeredQuestionData

        },
        score(){
            return store.getters.score
        },
        studentName(){
            return store.getters.studentName
        },
        questionCode(){
            return this.$store.getters.questionCode
        }

    }
}
</script>

<style>
.body {
    width: 98% !important;
    max-width: 700px;
}

.show-enter-active{
    transition: all 0.5s ease-in-out; 
}
.show-move,
.show-leave-active{
    transition: all 0.5s ease-in-out; 
}
.show-enter{
  transform: translateX(-100%);
  opacity: 0;

}
.show-leave-to{
  transform: translateX(100%);
  opacity: 0;

}

</style>