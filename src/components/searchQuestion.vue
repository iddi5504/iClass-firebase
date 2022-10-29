<template>
  <div class="body d-flex flex-column justify-content-around align-items-center w-100">
    <div class="d-flex text-center flex-column align-items-center">
      <img src="../assets/test.png" class="coloredicon" alt="">
      <div style="color:var(--titleColor);" class="h3">Ready to take the test {{ studentName }} ?</div>
    </div>
    <!-- find form -->
    <div style="padding:20px; " class="d-flex flex-column justify-content-around align-items-center">
      <div class="d-flex text-left flex-column justify-content-around align-items-start">
        <h2 style="font-size: 27px; font-weight: 700;color:var(--titleColor);">Find Test</h2>
        <div style="font-size: 16px; font-weight: 600; color:var(--textColor);">Find a form to full by typing the test
          code .This code should be provided by your teacher</div>
      </div>
      <div style="position: relative; width: 100%; margin: 25px;">
        <input @keyup.enter="findTest" type="text" name="code" id="testcode" v-model.lazy="questionCode">
        <i class="bi bi-search"></i>
      </div>
      <!-- find test button -->
      <button class="findtestbutton" @click="findTest">Find Test</button>
    </div>
    <loadingScreen v-if="load" :message="'Searching for Test'"></loadingScreen>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  //   components:{
  //     answerQuestion
  //   },
  data() {
    return {
      questionCode: null,
      questions: "",
      questionTitle: "",
      load: false
    }
  },
  methods: {
    findTest() {
      this.load = true
      this.$router.push("/studentpage/answerQuestion/" + this.questionCode)
      this.load = !this.load
    }
  },
  created() {

  },
  computed: {
    ...mapGetters(['studentName'])
  }
}
</script>

<style scoped>
.coloredicon {
  width: 135px;
  height: auto;
}

#testcode {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  font-size: 23px;
  border-radius: 5px;
  outline: none;
  padding-left: 52px;
}

.findtestbutton {
  width: 126px;
  padding: 10px;
  border: none;
  box-shadow: 0px 0px 4px black;
  border-radius: 4px;
  font-size: 20px;
  background: var(--brandcolor);
  font-weight: 700;
}

.bi-search {
  position: absolute;
  top: 6px;
  font-size: 1.5rem;
  left: 13px;
}
</style>