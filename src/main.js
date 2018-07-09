// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";


Vue.config.productionTip = false;
const NewSylwus = {
  name: "NewDziadzius",
  data() {
    return {
      myColorek: {
        color: "#dd2525"
      }
    };
  },
  template: ` 
  <div>
  <h2 :style="myColorek">Badlik i Złomnik to Ziomeczki !!</h2>
  <label for="color">Change Color </label>
  <input name="color" id="color" v-model="myColorek.color" />
  </div>`,
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    NewSylwus,
  },
  data: {
    name: "Sylwester",
    myColor: {
      color: "#bf5858"
    }
  },
  methods: {
    handleClick() {
      alert(`Sieeeemanko`);
    }
  },
  template: `
  <div>
    <h1 :style="myColor">Hello {{name}} </h1>
    <NewSylwus />
    <button @click="handleClick"> YOYOYOYO </button>
  </div>
  `
});
