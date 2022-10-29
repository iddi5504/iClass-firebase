<template>
   <div class="h-100  d-flex flex-column justify-content-center ">
    <div class="body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="header h1 text-center">
           Take an iClass test
        </div>
        <div class="inputfields d-flex flex-column align-items-start justify-content-around">
            <label for="username">Student's name</label>
            <div style="position:relative;">
                <input @keyup.enter="takeTest" v-model.lazy="studentName" type="text" id="username">
                <i class="bi bi-blockquote-right"></i>
            </div>
        </div>
        <div class="text-center note  d-flex flex-column align-items-start justify-content-around">
            Your student name is the name your teacher knows you by.Make sure they are familiar with it 
        </div>

        <button @click="takeTest()">Take a test</button>


    </div>
   </div>
</template>

<script>
export default {
    data(){
        return {
            studentName:""
        }
    },
    methods:{
        takeTest(){
            this.$store.dispatch('studentName',this.studentName)
            .then(()=>{
                this.studentName ? this.$router.push({name:'searchQuestion'}) : console.log('fill out your name')
            })
        }
    }
}
</script>

<style scoped>
.body{
    max-height: 55vh;
    height: 100%;
}
.note {
    max-width: 34ch;
}
.bi-blockquote-right {
    position: absolute;
    top: 4px;
    font-size: 1.6rem;
    left: 12px;
}
input{
    padding-left: 39px;
}
</style>