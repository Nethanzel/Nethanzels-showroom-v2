<template>
  <div class="timeline">
    <navMenu />

    <h1 id="pTop">Important events</h1>

    <div id="evtContainer">
      <div v-for="(event, i) in events" :key="i" :class="classGenerator(i)">
        <div>
          <img :src="events[i].icon" class="ach_icon" />
          <h2>{{ events[i].title }}</h2>
          <p>
            {{ events[i].desc }}
          </p>

          <p class="ev_date">
            {{ dateFormat(events[i].date) }}
          </p>
        </div>
      </div>

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
import * as timeago from "timeago.js";
import navMenu from "@/components/navegationMenuSE.vue";
import Footer from "@/components/footerv2.vue";

export default {
  name: "Timeline",
  title: "Nethanzêl's Showroom",
  components: {
    navMenu,
    Footer
  },

  data() {
    return {
      events: {},
      loading: true
    };
  },

  methods: {
    getEvents() {
      let root = "/api/timeline";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/timeline`);
      axios
        .get(root, { headers: { token: this.client() } })
        .then(res => {
          if (res.status == 200) {
            this.events = res.data;
            this.events = this.events.reverse();
            this.loading = false;
          }
        })

        .catch(() => {
          this.loading = false;
        });
    },

    dateFormat(raw) {
      return timeago.format(raw);
    },

    classGenerator(index) {
      let max = this.events.length - 1;
      if (index == 0) {
        return "event last";
      } else if (max == index) {
        if (index % 2 == 0) {
          return "event first_";
        } else {
          return "event_ first";
        }
      } else if (index % 2 == 0) {
        return "event";
      } else if (index % 2 == 1) {
        return "event_";
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
    this.getEvents();
    this.loading = true;
  }
};
</script>

<style scoped lang="scss">
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

.timeline {
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0px auto 0 auto;

  max-width: 1366px;
  padding-top: 50px;
}

.spinerParent {
  margin: 20px 0 0 0;
}

#evtContainer {
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  background: linear-gradient(#e0dede, #fff);

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 5;
  margin: 0 5px;
}

.eventCont {
  z-index: 100;
}

.event {
  padding: none;
  background-image: url("../assets/timelinebg_.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 75vw;
  max-width: 800px;
  max-height: 800px;
  margin: 0 auto;
  background-color: transparent;
  z-index: 10;
}

.event_ {
  padding: none;
  background-image: url("../assets/timelinebg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75vw;
  height: 75vw;
  max-width: 800px;
  max-height: 800px;
  margin: 0 auto;
  background-color: transparent;
  z-index: 10;
}

.event div {
  position: relative;
  background: #99999944;
  height: 82.5%;
  width: 82.5%;
  border-radius: 50%;
  left: -3px;
  top: -4px;
  margin: 110px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 660px;
  max-height: 665px;
}

.event_ div {
  position: relative;
  background: #99999944;
  height: 82.5%;
  width: 82.5%;
  border-radius: 50%;
  left: -3px;
  top: -4px;
  margin: 110px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 660px;
  max-height: 665px;
}

.last {
  background-image: url("../assets/timelinebg_last.png");
}

.first {
  background-image: url("../assets/timelinebg_first.png");
}

.first_ {
  background-image: url("../assets/timelinebg_first_.png");
}

h2 {
  font-size: 2em;
  letter-spacing: 1px;
  color: #000;
}

.event p {
  margin-top: 10px;
  font-size: 1em;
}

.event_ p {
  margin-top: 10px;
  font-size: 1em;
}

.ach_icon {
  mix-blend-mode: exclusion;
  background: #fff;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 15px;
  object-fit: cover;
}

.ev_date {
  font-style: italic;
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

  z-index: 100;
}

@media screen and (max-width: 780px) {
  .timeline {
    height: auto;
    margin: 0 auto 0 auto;
    padding-top: 5px;
  }

  h1 {
    letter-spacing: 3px;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    cursor: default;
  }

  h2 {
    font-size: 1.6em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/timelinebg_.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80vw;
    margin: 0 auto;
  }

  .event_ {
    padding: -10px 0 0 0;
    background-image: url("../assets/timelinebg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80vw;
    margin: 0 auto;
  }

  .last {
    background-image: url("../assets/timelinebg_last.png");
  }

  .first {
    background-image: url("../assets/timelinebg_first.png");
  }

  .first_ {
    background-image: url("../assets/timelinebg_first_.png");
  }

  .event div {
    position: relative;
    background: #99999944;
    height: 82.5%;
    width: 82.5%;
    border-radius: 50%;
    left: -3px;
    top: -4px;
    margin: 80px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .event_ div {
    position: relative;
    background: #99999944;
    height: 82.5%;
    width: 82.5%;
    border-radius: 50%;
    left: -3px;
    top: -4px;
    margin: 80px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 655px) {
  .timeline {
    height: auto;
  }

  h1 {
    letter-spacing: 3px;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    cursor: default;
  }

  h2 {
    font-size: 1.45em;
    letter-spacing: 2px;
    padding-left: 3px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/timelinebg_.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88vw;
    height: 88vw;
  }

  .event_ {
    padding: -10px 0 0 0;
    background-image: url("../assets/timelinebg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88vw;
    height: 88vw;
  }

  .last {
    background-image: url("../assets/timelinebg_last.png");
  }

  .first {
    background-image: url("../assets/timelinebg_first.png");
  }

  .first_ {
    background-image: url("../assets/timelinebg_first_.png");
  }

  .event div {
    position: relative;
    background: #99999944;
    height: 83%;
    width: 83%;
    border-radius: 50%;
    left: 0px;
    top: 0px;
    margin: 38px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .event_ div {
    position: relative;
    background: #99999944;
    height: 83%;
    width: 83%;
    border-radius: 50%;
    left: 0px;
    top: 0px;
    margin: 38px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .event p {
    margin-top: 5px;
    font-size: 0.85em;
  }

  .event_ p {
    margin-top: 5px;
    font-size: 0.85em;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    margin-top: 0px;
    margin-bottom: 5px;
    object-fit: cover;
  }

  .ev_date {
    font-style: italic;
  }
}

@media screen and (max-width: 495px) {
  .timeline {
    height: auto;
  }

  h1 {
    letter-spacing: 3px;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    cursor: default;
    font-size: 39px;
  }

  .event p {
    margin-top: 5px;
    font-size: 0.8em;
  }

  .event_ p {
    margin-top: 5px;
    font-size: 0.8em;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    margin-top: 0px;
    margin-bottom: 5px;
    object-fit: cover;
  }

  .ev_date {
    font-style: italic;
  }

  h2 {
    font-size: 1.41em;
    letter-spacing: 1.8px;
  }
  //=====================================================================
  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/timelinebg_.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vw;
  }

  .event_ {
    padding: -10px 0 0 0;
    background-image: url("../assets/timelinebg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vw;
  }

  .last {
    background-image: url("../assets/timelinebg_last.png");
  }

  .first {
    background-image: url("../assets/timelinebg_first.png");
  }

  .first_ {
    background-image: url("../assets/timelinebg_first_.png");
  }

  .event div {
    position: relative;
    background: #99999944;
    height: 83%;
    width: 83%;
    border-radius: 50%;
    left: 0px;
    top: 0px;
    margin: 38px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .event_ div {
    position: relative;
    background: #99999944;
    height: 83%;
    width: 83%;
    border-radius: 50%;
    left: 0px;
    top: 0px;
    margin: 38px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 425px) {
  h1 {
    letter-spacing: 3px;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    cursor: default;
    font-size: 32px;
  }

  .event p {
    margin-top: 3px;
    font-size: 0.75em;
  }

  .event_ p {
    margin-top: 3px;
    font-size: 0.75em;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-top: 0px;
    margin-bottom: 3px;
    object-fit: cover;
  }

  .ev_date {
    font-style: italic;
  }

  h2 {
    font-size: 1.25em;
    letter-spacing: 1.8px;
  }
}

@media screen and (max-width: 425px) {
  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    font-size: 36px;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    cursor: default;
    padding-top: 0px;
    text-align: center;
    width: 100%;
    top: 0;
    letter-spacing: 3px;
    font-size: 34px;
  }
}

@media screen and (max-width: 380px) {
  .last {
    background-image: url("../assets/timelinebg_last.png");
  }

  .first {
    background-image: url("../assets/timelinebg_first.png");
  }

  .first_ {
    background-image: url("../assets/timelinebg_first_.png");
  }

  .event div {
    position: relative;
    background: #99999944;
    height: 83%;
    width: 83%;
    border-radius: 50%;
    left: 0px;
    top: 0px;
    margin: 38px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .event_ div {
    position: relative;
    background: #99999944;
    height: 83%;
    width: 83%;
    border-radius: 50%;
    left: 0px;
    top: 0px;
    margin: 38px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    cursor: default;

    padding-top: 0px;
    text-align: center;
    width: 100%;

    top: 0;
    letter-spacing: 3px;
    font-size: 31.5px;
  }

  .event p {
    margin-top: 3px;
    font-size: 0.65em;
  }

  .event_ p {
    margin-top: 3px;
    font-size: 0.65em;
  }
  h2 {
    font-size: 1.14em;
    letter-spacing: 1.8px;
  }
}
//=====================================================================
//for the floating icon that takes you up

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
