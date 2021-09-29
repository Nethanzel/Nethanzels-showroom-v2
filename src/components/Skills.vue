<template>
  <div class="skill" id="skills">
    <h1>My skills</h1>

    <div class="plangCont">
      <h2>Programming languages</h2>

      <div class="spinerParent" v-if="loading">
        <img src="../assets/spinb.png" />
      </div>

      <div class="plang">
        <div class="strongest" v-for="(skill, i) in technical.lang" :key="i">
          <img :src="technical.lang[i][0]" class="skillIcon" />
          <h3>{{ technical.lang[i][1] }}</h3>
          <p>{{ technical.lang[i][2] }}</p>
        </div>
      </div>
    </div>

    <div class="plangCont">
      <h2>Database connection</h2>

      <div class="spinerParent" v-if="loading">
        <img src="../assets/spinb.png" />
      </div>

      <div class="plang dbases">
        <div class="strongest" v-for="(skill, i) in technical.db" :key="i">
          <img :src="technical.db[i][0]" class="skillIcon" />
          <h3>{{ technical.db[i][1] }}</h3>
          <p>{{ technical.db[i][2] }}</p>
        </div>
      </div>
    </div>

    <div class="skillCont topDiv">
      <div class="technical">
        <h2>Proficient over these</h2>
        <div class="strCont">
          <div class="strongest" v-for="(skill, i) in technical.known" :key="i">
            <img :src="technical.known[i][0]" class="skillIcon" />
            <h3>{{ technical.known[i][1] }}</h3>
            <p>{{ technical.known[i][2] }}</p>
          </div>
        </div>
      </div>

      <div class="spinerParent" v-if="loading">
        <img src="../assets/spinb.png" />
      </div>

      <!-- ======================================= -->
      <div class="diving">
        <h2>Things that I've been learning</h2>
        <div class="strCont">
          <div
            class="strongest"
            v-for="(skill, i) in technical.diving"
            :key="i"
          >
            <img :src="technical.diving[i][0]" class="skillIcon" />
            <h3>{{ technical.diving[i][1] }}</h3>
            <p>{{ technical.diving[i][2] }}</p>
          </div>
        </div>
      </div>
      <!-- ======================================= -->

      <div class="spinerParent" v-if="loading">
        <img src="../assets/spinb.png" />
      </div>
    </div>

    <div class="skillCont">
      <!-- ======================================= -->
      <div class="technical">
        <h2>Working characteristics</h2>

        <div class="strCont">
          <div
            class="strongest_"
            v-for="(skill, i) in working.working"
            :key="i"
          >
            <img :src="working.working[i][0]" class="skillIcon" />
            <h3>{{ working.working[i][1] }}</h3>
            <p>{{ working.working[i][2] }}</p>
          </div>
        </div>

        <div class="spinerParent" v-if="loading">
          <img src="../assets/spinb.png" />
        </div>
      </div>
      <!-- ======================================= -->

      <h2>Personal characteristics</h2>

      <div class="strCont">
        <div class="strongest_" v-for="(skill, i) in working.social" :key="i">
          <img :src="working.social[i][0]" class="skillIcon" />
          <h3>{{ working.social[i][1] }}</h3>
          <p>{{ working.social[i][2] }}</p>
        </div>
      </div>

      <div class="spinerParent" v-if="loading">
        <img src="../assets/spinb.png" />
      </div>
    </div>

    <div class="skillCont lastDiv">
      <!-- ======================================= -->
      <div class="technical">
        <h2>Achievements</h2>

        <div class="iconCont study" v-for="(skill, i) in studies.done" :key="i">
          <img :src="studies.done[i][0]" class="skillIcon" />
          <p>{{ studies.done[i][1] }}</p>
        </div>

        <div class="spinerParent" v-if="loading">
          <img src="../assets/spinb.png" />
        </div>
      </div>
      <!-- ======================================= -->
      <div class="diving">
        <h2>Currently I am...</h2>

        <div
          class="iconCont study"
          v-for="(skill, i) in studies.ongoing"
          :key="i"
        >
          <img :src="studies.ongoing[i][0]" class="skillIcon" />
          <p>{{ studies.ongoing[i][1] }}</p>
        </div>

        <div class="spinerParent" v-if="loading">
          <img src="../assets/spinb.png" />
        </div>
      </div>
      <!-- ======================================= -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Skills",
  title: "Nethanzêl's Showroom",

  data() {
    return {
      technical: {},
      working: {},
      studies: {},
      loading: true
    };
  },

  methods: {
    getSkills() {
      let root = "/api/skills";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/skills`);
      axios.get(root, { headers: { token: this.client() } })
        .then(res => {
          if (res.status == 200) {
            this.technical = res.data[0].technical;
            this.working = res.data[0].working;
            this.studies = res.data[0].studies;
            this.loading = false;
          }
        })

        .catch(() => {
          this.loading = false;
        });
    }
  },

  mounted() {
    this.getSkills();
    this.loading = true;
  }
};
</script>

<style scoped lang="scss">
.plang {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.plangCont {
  margin-top: 15px;
}

.technical {
  margin: 15px 0;
  height: auto;
}

.diving {
  margin: 15px 0;
}

.dbases {
  margin-bottom: 25px;
}

.skill {
  margin: 15px auto 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1366px;
  background: linear-gradient(#e0dede, #ffff);
  padding-bottom: 4em;
  padding-top: 1.5em;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.skillCont {
  border: 2px solid rgba(0, 0, 0, 0.507);
  box-shadow: 2px 1px 5px #000000ab;
  width: 80%;
  height: auto;
  padding: 15px 30px;
  background: #99999944;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 15px;
}

h1 {
  letter-spacing: 3px;
  color: #000;
  text-align: center;
  width: 100%;
  cursor: default;
  font-size: 45px;
  margin: 0;
}

h1::after {
  content: "";
  display: block;
  margin: 0 auto;
  padding-top: 8px;
  width: 130px;
  border-bottom: 3px solid rgb(0, 0, 0);
}

.skillIcon {
  mix-blend-mode: exclusion;
  will-change: opacity;
  height: 75px;
  width: 75px;
  margin: 0 20px;
  border-radius: 50%;
  background: #fff;
  object-fit: cover;
  transition: opacity 0.7s;
}

h2 {
  cursor: default;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 200;
}

.iconCont {
  display: inline-flex;
  margin: 10px 15px;
  max-width: 130px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.iconCont p {
  cursor: default;
  font-weight: bold;
  font-size: 17px;
  transition: opacity 1s;
  text-align: center;
  color: #000;
}

.study {
  max-width: 180px;
  flex-direction: column;
  justify-content: flex-start;
}

.study p {
  cursor: default;
  font-weight: bold;
  font-size: 16px;
}

.strCont {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.strongest {
  width: 180px;
  max-width: 180px;
  margin: 10px 10px;
  padding: 10px;
  /* border-bottom-left-radius: 5px; */
  border-top-left-radius: 5px;
  /* border-bottom-right-radius: 5px; */
  border-top-right-radius: 5px;
  border-bottom: 5px solid #fff;
  box-shadow: 2px 0px 5px#5c5c5c;
  height: 210px;
  background: #000000db;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.strongest_ {
  width: 180px;
  max-width: 180px;
  margin: 10px 10px;
  padding: 10px;
/*   border-bottom-left-radius: 5px; */
  border-top-left-radius: 5px;
/*   border-bottom-right-radius: 5px; */
  border-bottom: 5px solid #fff;
  border-top-right-radius: 5px;
  box-shadow: 2px 0px 5px#5c5c5c;
  background: #202020db;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.strongest h3 {
  margin: 2px 0 5px 0;
  color: #fff;
}

.strongest_ h3 {
  margin: 2px 0 5px 0;
  color: #fff;
}

.strongest__ h3 {
  margin: 2px 0 5px 0;
  color: #fff;
}

.strongest p {
  text-align: center;
  color: #fff;
}

.strongest_ p {
  text-align: center;
  color: #fff;
}

.strongest__ p {
  text-align: center;
  color: #fff;
}

.plang .strongest {
  background: #f1f1f1;
  border-bottom: 6px solid #000;
  width: 175px;
  max-width: 175px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.plang .strongest h3 {
  margin: 2px 0 5px 0;
  color: #000;
}

.plang .strongest p {
  text-align: center;
  color: #000;
}

@media screen and (max-width: 780px) {
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skillCont {
    border: 2px solid #000;
    width: 94%;
    height: auto;
    padding: 10px 0px;
    background: #99999944;
  }

  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    margin: 0;
  }

  h2 {
    font-size: 26px;
  }

  .skillIcon {
    height: 65px;
    width: 65px;
    margin: 0 15px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity 0.7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 10px 15px;
    max-width: 100px;
    justify-content: center;
    align-items: center;
  }

  .iconCont p {
    position: absolute;
    cursor: default;
    font-weight: bold;
    font-size: 17px;
    text-overflow: clip;
    transition: opacity 1s;
  }

  .study {
    max-width: 150px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .study p {
    position: relative;
    cursor: default;
    font-weight: bold;
    font-size: 15px;
  }

  .study {
    max-width: 180px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .study p {
    cursor: default;
    font-weight: bold;
    font-size: 16px;
  }

  .strCont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .strongest {
    width: 160px;
    max-width: 160px;
    margin: 10px 8px;
  }

  .strongest_ {
    width: 160px;
    max-width: 160px;
    margin: 10px 8px;
  }
}

@media screen and (max-width: 670px) {
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skillCont {
    border: 2px solid #000;
    width: 94%;
    height: auto;
    padding: 10px 0px;
    background: #99999944;
  }

  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;

    margin: 0;
  }

  .skillIcon {
    height: 65px;
    width: 65px;
    margin: 0 15px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity 0.7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 10px 15px;
    max-width: 100px;
    justify-content: center;
    align-items: center;
  }

  .iconCont p {
    position: absolute;
    cursor: default;
    font-weight: bold;
    transition: opacity 1s;
  }

  .study {
    max-width: 150px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .study p {
    position: relative;
    cursor: default;
    font-weight: bold;
    font-size: 15px;
  }

  .strCont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .strongest {
    width: 150px;
    max-width: 150px;
    margin: 10px 8px;
  }

  .strongest_ {
    width: 150px;
    max-width: 150px;
    margin: 10px 8px;
  }
}

@media screen and (max-width: 615px) {
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skillCont {
    border: 2px solid #000;
    width: 94%;
    height: auto;
    padding: 4px 4px;
    background: #99999944;
  }

  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    font-size: 42px;
    margin: 0;
  }

  .skillIcon {
    height: 50px;
    width: 50px;
    margin: 0 12px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity 0.7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 7px 12px;
    max-width: 100px;
    justify-content: center;
    align-items: center;
  }

  .iconCont p {
    position: absolute;
    cursor: default;
    font-weight: bold;
  }

  .study {
    max-width: 150px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .study p {
    position: relative;
    cursor: default;
    font-weight: bold;
    font-size: 15px;
  }

  .strCont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .strongest {
    width: 120px;
    max-width: 120px;
    margin: 7px 5px;
  }

  .strongest_ {
    width: 120px;
    max-width: 120px;
    margin: 7px 5px;
  }

  .plang .strongest {
    width: 145px;
    max-width: 145px;
  }
}

@media screen and (max-width: 540px) {
  .plang .strongest {
    width: 130px;
    max-width: 130px;
  }
}

@media screen and (max-width: 500px) {
  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skillCont {
    border: 2px solid #000;
    width: 94%;
    height: auto;
    padding: 3px 3px;
    background: #99999944;
  }

  h1 {
    cursor: default;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    font-size: 45px;
    margin: 0;
  }

  .skillIcon {
    height: 50px;
    width: 50px;
    margin: 0 7px;
    border-radius: 50%;
    background: #fff;
    object-fit: cover;
    transition: opacity 0.7s;
  }

  .iconCont {
    display: inline-flex;
    margin: 5px 7px;
    max-width: 100px;
    justify-content: center;
    align-items: center;
  }

  .study {
    max-width: 150px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .study p {
    position: relative;
    cursor: default;
    font-weight: bold;
    font-size: 15px;
  }

  .strCont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .strongest {
    width: 115px;
    max-width: 115px;
    margin: 7px 5px;
  }

  .strongest_ {
    width: 115px;
    max-width: 115px;
    margin: 7px 5px;
  }
}

@media screen and (max-width: 490px) {
  .plang .strongest {
    width: 120px;
    max-width: 120px;
  }
}

@media screen and (max-width: 475px) {
  .strongest {
    width: 40%;
    max-width: 40%;
    margin: 7px 5px;
  }

  .strongest_ {
    width: 40%;
    max-width: 40%;
    margin: 7px 5px;
  }
}

@media screen and (max-width: 460px) {
  .plang .strongest {
    width: 40%;
    max-width: 40%;
  }
}

@media screen and (max-width: 380px) {
  .skillCont {
    border: 2px solid #000;
    width: 95%;
    height: auto;
    padding: 10px 0px;
    background: #99999944;
    margin-bottom: 30px;
  }

  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    font-size: 40px;
    margin: 0;
  }

  .study {
    max-width: 135px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .study p {
    position: relative;
    cursor: default;
    font-weight: bold;
    font-size: 15px;
  }

  .strCont {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 327px) {
  .strongest {
    width: 38%;
    max-width: 38%;
    margin: 7px 5px;
  }

  .strongest_ {
    width: 38%;
    max-width: 38%;
    margin: 7px 5px;
  }

  .study {
    max-width: 130px;
  }
}
</style>
