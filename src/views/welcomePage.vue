<template>
    <div class="body d-flex flex-direction-column justify-content-around align-items-center m-auto h-100 text-center w-100">
        <div class="header">
            <h2 class="h1">Welcome to iClass</h2>
            <div style="max-width:30ch;">Easily create test for your students to answer</div>
            
        </div>

        <div class="images d-flex flex-direction-row justify-content-around align-item-center">
            <router-link to="/signUp/">
                <div @click="usertype='teacher'" class="image" id="image1">
                    <h3 class="image-text">
                        Teacher
                    </h3>
                </div>
            </router-link>
           <router-link to="/takeTest/" >
            <div  @click="usertype='student'" class="image" id="image2">
                <h3 class="image-text">
                    Student
                </h3>
            </div>
           </router-link>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
       return{
        usertype:""
       }
    },
    provide(){
        return{
            // Usertype:this.usertype
        }
    },
    created(){
        console.log(this.usertype)

    },
    computed:{
  
  }
}
</script>

<style scoped>
    .header{
        font-size: 25px;
        font-weight: bold;
        display: flex;
        flex-direction: column;
    }
    .header h2{
        color: var(--brandcolor);
    }
    .brandname{
        font-size: 25px;
        font-weight: bold;
        color: aqua;
    }
    .header div{
        font-size: 24px;
        font-weight: normal;
    }
    .header h2{
        padding: 0px;
        margin: 21px 14px;
    }
    .body{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-content: center;
        height: 100%;
    }
    .images{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
    .image-text{
        color:white;
        font-weight: 500;
        font-size: 2.3rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    }
    .image{
        border-radius: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 323px;
        height: 230px;
        margin: 10px;
        color: white;
        background-repeat: no-repeat;
        background-size: cover;
        filter: brightness(0.7);
    }
  
    .image:hover{
        border: 4px solid var(--brandcolor);
        transform: scale(1.06);
        transition: 0.4s all ease;
    }

    #image2{
        background-image: url("../assets/student.jpg");

    }
    #image1{
        background-image: url("../assets/teacher.jpg");

    }
    .body{
        max-width: 900px;
        max-height: 81vh;
    }

    a{
        text-decoration: none;
        color: black;
    }

    @media screen and (min-width:600px){
        .image{
            background-position: center;
            min-width: 323px;
            height: 361px;
        }
    }
</style>