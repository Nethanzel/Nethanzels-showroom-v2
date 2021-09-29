<template>
  <div class="project" id="projects">
    <navMenu />
    <h1 id="pTop">Project details</h1>

    <div id="projContainer">
      <section class="zeroProj" v-if="projects.length < 1 && loading == false">
        <h2>No project found.</h2>
      </section>

      <section class="projectCont" v-for="(project, i) in projects" :key="i">

        <div class="projectLogo_cont">
          <h2 class="projName">{{ projects[i].title }}</h2>
          <img :src="projects[i].icon" alt="project logo" class="projectLogo" />
        </div>

        <p class="projDesc" v-html="projects[i].desc"></p>

        <div class="projDet">
          <div class="projTech">
            <h3>Required tools:</h3>

            <div
              class="projTech_cont"
              v-for="(tool, x) in projects[i].tools"
              :key="x"
            >
              <div class="iconCont">
                <img :src="getIcon(projects[i].tools[x])" class="skillIcon" />
                <p>{{ projects[i].tools[x] }}</p>
              </div>
            </div>
          </div>

          <div
            class="projTech collab"
            v-if="
              projects[i].colaborator.length > 0 &&
                projects[i].colaborator[0] != ''
            "
          >
            <h3>Collaborators:</h3>

            <p v-for="(colaborator, z) in projects[i].colaborator" :key="z">
              {{ projects[i].colaborator[z] }}
            </p>
          </div>

          <div class="projTech">
            <reactionControl
              v-bind:reactions="[projects[i].points, projects[i]._id, false]"
            />
          </div>

          <div class="projFooter" v-if="projects[i].open">
            <h3>Get this project on Github</h3>
            <a target="_blank" :href="projects[i].source">{{
              projects[i].source
            }}</a>
          </div>
        </div>
      </section>

      <div class="spinerParent" v-if="loading">
        <img src="../assets/spinb.png" />
      </div>
    </div>

    <Footer />
    <div id="takemeup" @click="goTop">^</div>
  </div>
</template>

<script>
import axios from "axios";
import reactionControl from "@/components/reactionControl.vue";
import navMenu from "@/components/navegationMenuSE.vue";
import Footer from "@/components/footerv2.vue";

export default {
  name: "Projects",
  title: "Nethanzêl's Showroom",
  components: {
    reactionControl,
    navMenu,
    Footer
  },

  data() {
    return {
      projects: [],
      tools: [],
      loading: true
    };
  },

  methods: {
    getProject() {
      let projRef = this.$router.currentRoute.params.query;
      let root = `/api/project/${projRef}`;
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/project/${projRef}`);
      axios
        .get(root, { headers: { token: this.client() } })
        .then(res => {
          if (res.status == 200) {
            this.projects = res.data.reverse();
            this.loading = false;
          }
        })

        .catch(() => {
          this.loading = false;
        });
    },

    getSkills() {
      let root = "/api/skills";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/skills`);
      axios
        .get(root, { headers: { token: this.client() } })
        .then(res => {
          this.tools = res.data[0].technical;
          this.getProject();
        })

        .catch(() => {
          this.loading = false;
        });
    },

    getIcon(name) {
      for (let i = 0; i < this.tools.known.length; i++) {
        if (this.tools.known[i][1] == name) {
          return this.tools.known[i][0];
        }
      }

      for (let i = 0; i < this.tools.diving.length; i++) {
        if (this.tools.diving[i][1] == name) {
          return this.tools.diving[i][0];
        }
      }

      for (let i = 0; i < this.tools.db.length; i++) {
        if (this.tools.db[i][1] == name) {
          return this.tools.db[i][0];
        }
      }

      for (let i = 0; i < this.tools.lang.length; i++) {
        if (this.tools.lang[i][1] == name) {
          return this.tools.lang[i][0];
        }
      }
    },

    pluralizeProject(num) {
      if (num == 1) {
        return `+${num} project`;
      } else if (num > 1) {
        return `+${num} projects`;
      }
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },

  mounted() {
    /*     let app = document.getElementById("app")
    app.style.background = "#fff" */
    this.getSkills();
    this.loading = true;
  }
};
</script>

<style scoped lang="scss">
.project {
  display: flex;
  flex-direction: column;
  cursor: default;
  max-width: 1366px;
  margin: 0 auto 0 auto;
  padding-top: 60px;
}

.zeroProj {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

#projContainer {
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#e0dede, #fff);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 5;
  margin: 0 5px;
}

h1 {
  letter-spacing: 3px;
  color: #fff;
  text-align: center;
  width: 100%;
  cursor: default;
  z-index: 10;
  margin-bottom: 15px;
}

h1::after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 280px;
  border-bottom: 2px solid #fff;
  margin-top: 10px;
}

.spinerParent {
  margin: 20px 0 0 0;
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
  border-radius: 50%;

  cursor: pointer;
  font-family: serif;
  box-shadow: 0px 0px 5px #fff;

  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
  z-index: 10;
}

//====================================================

.projectCont {
  border: 2px solid rgba(0, 0, 0, 0.507);
  width: 65%;
  height: auto;
  padding: 0px 0 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #99999944;
  box-shadow: 0px 0px 15px #000000;
  margin: 20px 0;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

.projectLogo_cont {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 290px;
  max-height: 290px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
}

.projectLogo_cont .projectLogo {
  height: 100%;
  width: 100%;
  max-height: 400px;
  min-height: 400px;
  object-fit: cover;
  object-position: center center;
  transform: scale(1.5);
  isolation: isolate;
  background: #fff;
  opacity: .3;
  transition: .9s;
}

.projectLogo_cont:hover .projectLogo {
  transform: scale(1);
  opacity: .7;
}

.projectLogo_cont:hover .projName {
  font-size: 70px;
  opacity: .2;
  transition: .7s;
}

.projectLogo_cont .projName {
  font-size: 60px;
  position: absolute;
  z-index: 10;
  transition: .5s;
  text-shadow: 0 0 10px #fff;
}


.projFooter {
  border-top: 1px solid #000;
  margin-top: 15px;
  padding: 5px 15px;
  width: 100%;
  min-width: 235px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.projFooter p {
  margin-bottom: 8px;
}

.projFooter a,
a {
  text-decoration: none;
  color: #fff;
  background: #000;
  padding: 1px 7px;
  font-weight: bold;
}

.projDesc {
  text-align: justify;
  margin: 0 60px 0 60px;
}

.projTech {
  border-top: 1px solid #000;
  margin-top: 30px;
  padding: 5px 5px;
  min-width: 235px;
  width: 100%;
}

.projTech_cont {
  display: inline-flex;
  max-width: 130px;
  margin: 10px 15px;
}

.projDet {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

//====================================================

.collab p {
  display: block;
  width: 100%;
  text-align: center;
  margin: 0px auto;
  padding-bottom: 3px;
}

h3 {
  margin-bottom: 10px;
}

.skillIcon {
  mix-blend-mode: exclusion;
  will-change: opacity;
  height: 60px;
  width: 60px;
  margin: 0 10px;
  border-radius: 50%;
  background: #fff;
  object-fit: cover;
  transition: opacity 0.7s;
}

.iconCont {
  max-width: 160px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: inline;
}

.iconCont p {
  cursor: default;
  font-weight: bold;
  font-size: 14px;
  color: #000;
  text-align: center;
}

.projDesc a {
  text-decoration: none;
  color: #000;
  background: #fff;
  padding: 1px 7px;
  font-weight: bold;
}

@media screen and (max-width: 780px) {
  .projectCont {
    width: 85%;
    height: auto;
    padding: 0px 0 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #99999944;
    margin: 10px 0;
  }

  h1 {
    letter-spacing: 3px;
    padding-bottom: 10px;
    text-align: center;
    padding-top: 0px;
    width: 100%;
    top: 0;
    cursor: default;
  }
}

@media screen and (max-width: 445px) {
  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    font-size: 45px;
  }
}

@media screen and (max-width: 415px) {
  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    font-size: 45px;
  }
}

@media screen and (max-width: 395px) {
  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    letter-spacing: 3px;
    font-size: 40px;
  }
}

//Projects view media queries
@media screen and (max-width: 800px) {

 .projectLogo_cont {
    min-height: 200px;
    max-height: 200px;
  }

  .projectLogo_cont .projectLogo {
    height: 100%;
    width: 100%;
    max-height: 300px;
    min-height: 300px;
    object-fit: cover;
    object-position: center center;
    transform: scale(1.5);
    isolation: isolate;
    background: #fff;
    opacity: .3;
    transition: .9s;
  }

  .projectLogo_cont .projName {
    font-size: 30px;
  }

  .projectLogo_cont:hover .projName {
    font-size: 40px;
  }

  .projFooter {
    border-top: 1px solid #000;
    margin-top: 15px;
    padding: 5px 15px;
    width: 100%;
    min-width: 300px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projFooter p {
    margin-bottom: 8px;
  }

  .projFooter a,
  a {
    text-decoration: none;
    color: #fff;
    background: #000;
    padding: 1px 7px;
    font-weight: bold;
  }

  .projDesc {
    text-align: justify;
    margin: 0 10px 0 10px;
  }

  .projTech {
    border-top: 1px solid #000;
    margin-top: 30px;
    padding: 5px 15px;
    min-width: 300px;
    width: 100%;
  }

  .projTech_cont {
    padding-top: 5px;
  }

  .projDet {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 500px) {
  .projectCont {
    width: 97%;
    height: auto;
    padding: 0px 0 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #99999944;
    margin: 7px 0;
  }


 .projectLogo_cont {
    min-height: 200px;
    max-height: 200px;
  }

  .projectLogo_cont .projectLogo {
    height: 100%;
    width: 100%;
    max-height: 300px;
    min-height: 300px;
    object-fit: cover;
    object-position: center center;
    transform: scale(1.5);
    isolation: isolate;
    background: #fff;
    opacity: .3;
    transition: .9s;
  }

  .projectLogo_cont .projName {
    font-size: 30px;
  }

  .projectLogo_cont:hover .projName {
    font-size: 40px;
  }

  .projFooter {
    border-top: 1px solid #000;
    margin-top: 15px;
    padding: 5px 15px;
    width: 100%;
    min-width: 285px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projFooter p {
    margin-bottom: 8px;
  }

  .projFooter a,
  a {
    text-decoration: none;
    color: #fff;
    background: #000;
    padding: 1px 7px;
    font-weight: bold;
  }

  .projFooter a {
    font-size: 14px;
  }

  .projDesc {
    text-align: justify;
    margin: 0 10px 0 10px;
  }

  .projTech {
    border-top: 1px solid #000;
    margin-top: 30px;
    padding: 5px 15px;
    min-width: 285px;
    width: 100%;
  }

  .projTech_cont {
    padding-top: 5px;
  }

  .projDet {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skillIcon {
    mix-blend-mode: exclusion;
    will-change: opacity;
    height: 50px;
    width: 50px;
    margin: 0 5px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity 0.7s;
  }

  .iconCont {
    max-width: 130px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: inline;
  }

  .iconCont p {
    cursor: default;
    font-weight: bold;
    font-size: 14px;
    color: #000;
    text-align: center;
  }
}

@media screen and (max-width: 385px) {
  .projectCont {
    width: 96%;
    height: auto;
    padding: 0px 0 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #99999944;
    margin: 6px 0;
  }

  .projectLogo_cont {
    min-height: 200px;
    max-height: 200px;
  }

  .projectLogo_cont .projectLogo {
    height: 100%;
    width: 100%;
    max-height: 300px;
    min-height: 300px;
    object-fit: cover;
    object-position: center center;
    transform: scale(1.5);
    isolation: isolate;
    background: #fff;
    opacity: .3;
    transition: .9s;
  }

  .projectLogo_cont .projName {
    font-size: 30px;
  }

  .projectLogo_cont:hover .projName {
    font-size: 40px;
  }

  .projFooter {
    border-top: 1px solid #000;
    margin-top: 15px;
    padding: 5px 15px;
    width: 100%;
    min-width: 285px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projFooter p {
    margin-bottom: 8px;
  }

  .projFooter a,
  a {
    text-decoration: none;
    color: #fff;
    background: #000;
    padding: 1px 7px;
    font-weight: bold;
  }

  .projFooter a {
    font-size: 14px;
  }

  .projDesc {
    text-align: justify;
    margin: 0 10px 0 10px;
  }

  .projTech {
    border-top: 1px solid #000;
    margin-top: 30px;
    padding: 5px 15px;
    min-width: 285px;
    width: 95%;
  }

  .projTech_cont {
    padding-top: 5px;
  }

  .projDet {
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

}

@media screen and (max-width: 350px) {
  .projectCont {
    width: 96%;
    height: auto;
    padding: 0px 0 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #99999944;
    margin: 6px 0;
    overflow: hidden;
  }

/*   .projectLogo {
    height: 150px;
    width: 150px;
    border: 1px solid #000;
    border-radius: 50%;
    object-fit: cover;
    isolation: isolate;
    background: #fff;
    object-fit: scale-down;
  } */

  .projectLogo_cont {
    min-height: 200px;
    max-height: 200px;
  }

  .projectLogo_cont .projectLogo {
    height: 100%;
    width: 100%;
    max-height: 300px;
    min-height: 300px;
    object-fit: cover;
    object-position: center center;
    transform: scale(1.5);
    isolation: isolate;
    background: #fff;
    opacity: .3;
    transition: .9s;
  }

  .projectLogo_cont .projName {
    font-size: 30px;
  }

  .projectLogo_cont:hover .projName {
    font-size: 40px;
  }

  .projFooter {
    border-top: 1px solid #000;
    margin-top: 15px;
    padding: 5px 15px;
    width: 100%;
    min-width: 285px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projFooter p {
    margin-bottom: 8px;
  }

  .projFooter a,
  a {
    text-decoration: none;
    color: #fff;
    background: #000;
    padding: 1px 7px;
    font-weight: bold;
  }

  .projFooter a {
    font-size: 14px;
  }

/*   .projName {
    margin: 5px 0 10px 0;
    font-size: 27px;
  } */

  .projDesc {
    text-align: justify;
    margin: 0 10px 0 10px;
  }

  .projTech {
    border-top: 1px solid #000;
    margin-top: 30px;
    padding: 5px 15px;
    min-width: 285px;
    width: 100%;
  }

  .projTech_cont {
    padding-top: 5px;
  }

  .projDet {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

}
</style>
