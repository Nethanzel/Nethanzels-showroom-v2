import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import vueAxios from "vue-axios";
import titleMix from "./mixins/titleMix";

Vue.use(vueAxios, axios);

Vue.mixin({
  data: function() {
    return {
      client: () => {
        let auth = localStorage.getItem("showroom");
        if (auth) {
          return auth;
        } else {
          let id = new Date().getTime();
          localStorage.setItem("showroom", id);
          let root = "/auth";
          if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/auth`);
          axios.post(root, {}, { headers: { token: id } });
          return id;
        }
      }
    };
  }
});

Vue.mixin(titleMix);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
