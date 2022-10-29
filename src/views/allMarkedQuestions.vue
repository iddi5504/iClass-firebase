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
    <loadingScreen v-if="load" :message="'Retrieving answers'"></loadingScreen>
    </div>

</template>

<script>
import markedQuestion from "../components/markedQuestion"
import { mapGetters } from 'vuex'
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
            answers:[],
            load:false

        }
    },
    beforeCreate(){
        
    },
    mounted(){
        
    },
    created() {
        // get question from store from database
        this.load=!this.load
        store.dispatch("getQuestionAnswers", this.questionAnswersCode)
        .then(() => {
            console.log("taking the answer from the store ")
            this.load=!this.load
        })
        console.log("🚀 ~ file: allMarkedQuestions.vue ~ line 45 ~ created ~ this.questionCode", this.questionCode)
    },
    computed: {
        // the answeredQuestionData for marking 
    
        // get answer id from params
        questionAnswersCode(){
            return this.$route.params.QuestionId
        },
       
        ...mapGetters(['questionCode','studentName','score','answeredQuestionData'])

    },
    watch:{
        
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