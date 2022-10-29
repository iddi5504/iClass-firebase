<template>
    <nav class="d-flex flex-row justify-content-between align-items-center">
        <div>
            <span @click="$router.back()"><i class="bi bi-arrow-left-circle"></i> </span>
        </div>
        <div>
            <router-link to="/"><i class="bi bi-house"></i></router-link>
        </div>
        <div v-if="isAuthenticated" class="initials" @click="showProfileInfo_">{{ initials }}</div>
        <transition name="showMenu">
            <ul v-show="showProfileInfo" class="profileInfo">
                <li>{{name}}</li>
                <li>{{email}}</li>
                <li @click="goToSubmissions">Submissions</li>
                <li><router-link :to="{name:'takeTest'}">Take a test</router-link></li>
                <li @click="signOut">Sign Out</li>
            </ul>
        </transition>
        <loadingScreen v-if="load" :message="'Signing Out'"></loadingScreen>

    </nav>
</template>

<script>
import { auth } from '../firebase/firebase'
import { signOut } from 'firebase/auth';
import { bus } from '../main'
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            showProfileInfo:false,
            load:false
        }
    },
    computed: {
       
        name(){
            return this.$store.state.teacherName;
        },
        isAuthenticated(){
            return this.$store.state.isAuthenticated
        },
        ...mapGetters({email:'EMAIL',initials:'INITIALS'})
    },
    methods:{
        showProfileInfo_(){
            this.showProfileInfo=!this.showProfileInfo
        },
        signOut(){
            this.load=true
            signOut(auth)
            .then(()=>{
                this.load=false
                this.$router.push({name:'welcome'})
            })
        },
        goToSubmissions(){
            bus.$emit('showSubmissions',true)
            this.$router.push({name:'questiontype'})
        }
    }
}
</script>

<style>
.showMenu-enter-active,
.showMenu-leave-active{
    transition: 0.3s all ease-in-out;
    transform: translateX(0);
}

.showMenu-enter{
    transform: translateX(300px);
}
.showMenu-leave-to{
    transform: translateX(300px);
}

.initials {
    border-radius: 50%;
    background-color: #7ef8c5;
    color: black;
    width: 40px;
    height: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 19px;
    margin: 2px;
    font-weight: 600;
}
.initials:hover{
    cursor: pointer;
}

.bi {
    font-size: 1.5rem;
}

.profileInfo {
    background: var(--primaryBackgroundColor);
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: flex-center;
    justify-content: center;
    position: absolute;
    z-index: 4;
    right: 0px;
    top: 56px;
    box-shadow: -2px 2px 3px black;
    padding: 0;
    transition: 0.3s all ease;
    border-radius: 6px;

}

.profileInfo li {
    padding: 10px;
    border-bottom: 1px solid black;
    width: 100%;
    text-align: center;
    background: transparent;
}
.profileInfo li:hover{
    transition: 0.3s all ease;
    background: linear-gradient(45deg, var(--secondaryBackgroundColor), transparent);
}

.profileInfo li:last-child {
    color: red;
}
.profileInfo li:last-child:hover{
    cursor: pointer;
}
</style>