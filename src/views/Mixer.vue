<template>
  <section id="cont">
    <About />

    <navMenu />

    <Skills />
    <Projects />

    <Footer />
    <div id="takemeup" @click="goTop">^</div>
  </section>
</template>

<script>
//import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Footer from "../components/footer.vue";

import navMenu from "../components/navegationMenu.vue";

export default {
  title: "Nethanzêl's Showroom",

  components: {
    // Home,
    About,
    Projects,
    Skills,
    navMenu,
    Footer
  },

  mounted() {
    this.client();
    document.getElementById("menuIconCont").style.opacity = "0";
    document.querySelector("#app").style.background = "#000";
  },

  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#cont {
  margin: 0 5px;
  padding: 0;
}

#takemeup {
  position: fixed;
  height: 1.3em;
  width: 1.3em;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  top: calc(92vh - 25px);
  left: calc(92vw - 25px);

  font-size: 2.5em;
  font-family: serif;

  border-radius: 50%;

  cursor: pointer;
  box-shadow: 0px 0px 5px #fff;

  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
}

@media screen and (max-width: 500px) {
  #takemeup {
    top: calc(92vh - 25px);
    left: calc(90vw - 25px);
    transition: 0.5s;
    visibility: hidden;
    opacity: 0;
    height: 1.5em;
    width: 1.5em;
    font-size: 1.8em;
  }
}

@media screen and (max-width: 375px) {
  #takemeup {
    top: calc(92vh - 25px);
    left: calc(88vw - 25px);
    transition: 0.5s;
    visibility: hidden;
    opacity: 0;
    height: 1.8em;
    width: 1.8em;
    font-size: 1.5em;
  }
}
</style>
