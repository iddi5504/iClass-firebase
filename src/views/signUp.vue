<template>
    <div class="body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="header h1">
            Create an iClass account
        </div>
        <div class="inputfields d-flex flex-column align-items-start justify-content-around">
            <label for="username">Teacher's name</label>
            <div style="position:relative;">
                <input @keyup.enter="signup" v-model.lazy="teacherName" type="text" id="username">
                <i class="bi bi-person"></i>
            </div>
        </div>
        <div class="inputfields d-flex flex-column align-items-start justify-content-around">
            <label for="username">Email</label>
            <div style="position:relative;">
                <input @keyup.enter="signup" v-model.lazy="email" type="text" id="username">
                <i class="bi bi-envelope"></i>
            </div>
        </div>

        <div class="inputfields d-flex flex-column align-items-start justify-content-around">
            <label for="password">Password</label>
            <div style="position:relative;">
                <input v-model.lazy="password" type="password" id="text">
                <i class="bi bi-lock"></i>
            </div>
        </div>
        <div class="text-center note  d-flex flex-column align-items-start justify-content-around">
           Password must be more than six characters long in length
        </div>

        <button @click="signup()" class="m-2">Sign Up</button>


        <h5 style="font-size: 1rem;" class="text-center p-2">
            <div>
                Already have an account
            </div>
            <div>
               <router-link :to="{name:'logIn'}">
                <u>Sign In</u>
               </router-link>
            </div>
        </h5>
        <!-- load screen -->
        <loadingScreen v-if="load" :message="'Signing Up'"></loadingScreen>
    </div>
</template>

<script>
import {
    createUserWithEmailAndPassword
} from '@firebase/auth';
import { auth,firestore } from '../firebase/firebase'
import {
    collection,
    setDoc,
    doc
} from 'firebase/firestore'
const users=collection(firestore,'users')
export default {
    data() {
        return {
            email: "",
            password: "",
            teacherName: "",
            load:false

        }
    },

    methods: {
        signup() {
            if(this.email && this.password && this.teacherName){
                this.load=!this.load
                createUserWithEmailAndPassword(auth,this.email,this.password)
                .then(user=>{
                    const userUID=user.user.uid
                    setDoc(doc(users,userUID),{
                        teacherName:this.teacherName,
                        email:this.email,
                    })
                    .then(()=>{
                        this.load=!this.load
                        const userInfo={teacherId:user.user.uid,teacherName:this.teacherName}
                        console.log(userInfo)
                        this.$store.commit('setTeacherInfo',userInfo)
                        this.$router.push({name:'questiontype'})
                    })
                })
                .catch((err)=>{
                        this.$store.commit('setAlertMessage',err.message)
                        this.load=!this.load
                    })
            } 
           
        }
    },
    created() {

        if (this.$route.params.userType == "teacher") {
            this.leader = "Create a test"
            this.nameLabel = "Teacher's name"
            this.buttonText = "Start creating"
        } else {
            this.leader = "Take a test"
            this.nameLabel = "Student's name"
            this.buttonText = "Take test"
            this.student = true

        }


    }

}
</script>

<style scoped>
.body {
    max-height: 60%;
    height: 100%;
    align-self: center;
}


input {
    padding-left: 44px;

}

button {
    padding: 10px;
    border: none;
    box-shadow: 0px 0px 4px black;
    border-radius: 4px;
    font-size: 16px;
    background: var(--brandcolor);
    font-weight: 700;
}

.header {
    font-size: 33px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
    color: var(--brandcolor);
    text-align: center;
}

a {
    color: black;
    text-decoration: none;
}

.note {
    padding: 10px;
    max-width: 34ch;
}

.bi{
    position: absolute;
    top: -4px;
    font-size: 1.6rem;
    left: 12px;
    padding: 5px;
}
</style>