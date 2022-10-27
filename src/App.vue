<template>
  <transition name="switch" mode="out-in">

    <router-view></router-view>

  </transition>  

</template>

<script>
import store from './store/store'
export default {
  store: store,
  
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
  font-size: 24px;
  font-weight: 400;
}

input {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
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
}

.questioncontainer{
  background: var(--primaryBackgroundColor);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px var(--shade1);
  width:95%;
  color: var(--textColor);
  
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
