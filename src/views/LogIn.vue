<template>
    <div class="body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="header h1">
            Sign In to your iClass account
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
            The teacher name is the name your students know you by.Make sure they are familiar with it 
        </div>

        <button @click="signIn()" class="m-2">Sign In</button>


        <h5 class="text-center p-2">
            <div>
                Already have an account
            </div>
            <div>
                Sign In
            </div>
        </h5>
    </div>
</template>

<script>
import {
    signInWithEmailAndPassword
} from '@firebase/auth';
import { auth,firestore } from '../firebase/firebase'
import {
    collection,
    getDoc,
    doc
} from 'firebase/firestore'
const users=collection(firestore,'users')

export default {
    name:'logIn',
    data() {
        return {
            email: "",
            password: ""

        }
    },

    methods: {
        signIn() {
            if(this.email && this.password){
                this.$store.commit('teacherName', this.teacherName)
                signInWithEmailAndPassword(auth,this.email,this.password)
                .then(user=>{
                    const userUID=user.user.uid
                    getDoc(doc(users,userUID))
                    .then((snapshot)=>{
                        const userInfo={teacherId:snapshot.id,teacherName:snapshot.data().teacherName}
                        this.$store.commit('teacherInfo',userInfo)
                        this.$router.push({name:'questiontype'})
                    })

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
    max-height: 82%;
    height: 100%;
}


input {
    padding-left: 44px;

}

button {
    padding: 10px;
    border: none;
    box-shadow: 0px 0px 4px black;
    border-radius: 4px;
    font-size: 20px;
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
    top: 4px;
    font-size: 1.6rem;
    left: 12px;
    padding: 5px;
}
</style>