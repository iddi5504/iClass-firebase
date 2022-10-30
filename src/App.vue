<template>
  <span class="w-100 h-100 justify-content-center d-flex">
    <transition name="switch" mode="out-in">
      <router-view></router-view>
    </transition>  
     <!-- ALERT -->
     <transition name="showAlert" >
      <div v-if="showAlert" class="alert">
         <div class="alertMessage">{{message}}</div>
      </div>
  </transition>

  </span>

</template>

<script>
import store from './store/store'
import { auth } from '../src/firebase/firebase'
import {bus} from './main'
import {mapGetters} from 'vuex'
export default {
  store: store,
  data(){
    return {
      showAlert:false
    }
  },
  beforeCreate(){
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        await this.$store.dispatch('updateCurrentTeacher',user)
        this.$store.dispatch('getStudentSubmissions',user.uid)
      }
    })
  },
  created(){
    bus.$on("alertMessage", (message)=>{
      this.message=message
    })
  },
  methods:{
    alert(message){
            this.message=message
            console.log('the message',message)
        }
  },
  computed:{
    ...mapGetters({message:'ALERTMESSAGE'})
  },
  
    watch:{
        message(message){
            if(message){
                console.warn(message)
                this.showAlert=true
                setTimeout(() => {
                  this.showAlert=false
                  this.$store.commit('resetAlertMessage')
                }, 6000);
            }
        }
    }
  
}
// --brandcolor: #E94560;
</script>



<style>
html{
  scroll-behavior: smooth;
}
:root {
 
  --brandcolor: #45ace9;
  --secondaryBackgroundColor: #16213E;
  --primaryBackgroundColor: #0F3460;
  --shade1: #120c1b;
  --shade2: #7858A6;
  --titleColor: white;
  --textColor:hsl(180deg 9% 82%);

}
*{
  color: white;
}
a {
  color: inherit !important;
}
.switch-enter-active,
.switch-leave-active{
    opacity: 1;
    transition: all 0.5s ease-in-out;
  
}
.switch-enter{
  opacity: 0;
}
.switch-leave-to{
  opacity: 0;

}


nav {
  background-color: var(--primaryBackgroundColor);
  position: relative;
  top: 0px;
  width: 100%;
  height: 33px;
  padding: 29px;
  color: white;
}

label {
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin: 3px;
}

input {
  height: 42px;
  width: 100%;
  box-sizing: border-box;
  padding: 4px;
  margin: 5px;
  border: none;
  font-size: 23px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px var(--shade1);
  color: #bcc2c5;
  background: var(--primaryBackgroundColor);
  outline: none;
  transition: all 0.5s ease;

}
input::placeholder{
  color: var(--textColor);
}
input:hover{
  border:1px solid var(--secondaryBackgroundColor);
  transition: all 0.5s ease;

}

input:focus-within{
  transition: all 0.5s ease;
  border-radius: 12px;
  transform: scale(1.02);
}

button {
  padding: 10px;
  border: none;
  box-shadow: 0px 0px 4px black;
  border-radius: 4px;
  font-size: 20px;
  background: var(--brandcolor);
  font-weight: 700;
  color: black;
  margin: 10px;
}

.questioncontainer{
  background: var(--primaryBackgroundColor);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px var(--shade1);
  width:95%;
  color: var(--textColor);
  margin: 5px 0;
  
}
.questiontextfield{
  width: 100%;
  min-height: 90px;
  max-height: 135px;
  border-radius: 3px;
  font-size: 17px;
  color: var(--textColor);
  padding: 10px;
  outline: none;
  border: none;
  background:var(--secondaryBackgroundColor);
  margin: 1px;
}
.optionstextfield{
  width: 100%;
  padding: 7px;
  border-radius: 5px;
  border: none;
  background:var(--secondaryBackgroundColor);
  color: var(--textColor);
  margin: 5px;
  font-size: 1rem;
}
.radio{
  width: 20px;
  height: auto;
  margin: 10px;
  box-shadow: none;
  
}

.alertMessage{
  width: 100%;
  max-width: 586px;
  background: #6ca66c;
  text-align: center;
  border-radius: 8px;
  font-size: 1.3rem;
  padding: 6px;
  border-left: 14px solid green;
  color: black;
  word-break: break-all;
}
.alert{
  width: 100%;
  position: absolute;
  top: 9vh;
  display: flex;
  justify-content: center;
}
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

.showAlert-enter-active,
.showAlert-leave-active{
  transition: 0.8s all ease-in-out;
  transform: translateX(0);
}

.showAlert-enter{
  transform: translateY(-300px);
}
.showAlert-leave-to{
  transform: translateY(-300px);
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: white;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}


</style>
