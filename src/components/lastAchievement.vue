<template>
  <div class="lsAch">
    <h2 class="_title">My most recent achievement</h2>
    <div class="event" v-if="event">
      <div>
        <img :src="event.icon" class="ach_icon" />
        <h2>{{ event.title }}</h2>
        <p>
          {{ event.desc }}
        </p>

        <p class="ev_date">
          {{ dateFormat(event.date) }}
        </p>
      </div>
    </div>

    <div class="spinerParent" v-if="loading">
      <img src="../assets/spin.png" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as timeago from "timeago.js";

export default {
  data() {
    return {
      event: undefined,
      loading: true
    };
  },

  methods: {
    getEvent() {
      let root = "/api/timeline/last";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/timeline/last`);
      axios
        .get(root, { headers: { token: this.client() } })
        .then(res => {
          if (res.status == 200) {
            this.event = res.data;
            this.loading = false;
          }
        })

        .catch(() => {
          this.loading = false;
        });
    },

    dateFormat(raw) {
      return timeago.format(raw);
    }
  },

  mounted() {
    this.getEvent();
    this.loading = true;
  }
};
</script>

<style scoped lang="scss">
.spinerParent {
  margin: 5px 0 0 0;
}

._title {
  font-size: 2em;
  letter-spacing: 3px;
  color: #fff;
  cursor: default;
  margin: 0 0;
}

.event div h2 {
  font-size: 2em;
  letter-spacing: 3px;
  color: #fff;
  cursor: default;
}

.event {
  padding: none;
  background-image: url("../assets/ev_alone.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 50vw;
  max-width: 600px;
  max-height: 600px;
  margin: -30px auto -20px auto;
  background-color: transparent;
}

.event div {
  position: relative;
  background: #99999944;
  height: 82.5%;
  width: 82.5%;
  border-radius: 50%;
  left: -3px;
  top: -4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 660px;
  max-height: 665px;
}

.event p {
  margin-top: 10px;
  font-size: 1em;
  color: #fff;
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

.lsAch {
  margin-top: 25px;
}

@media screen and (max-width: 1030px) {
  .event div h2 {
    font-size: 1.6em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55vw;
    height: 55vw;
    margin: -30px auto -20px auto;
  }
}

@media screen and (max-width: 920px) {
  .event div h2 {
    font-size: 1.6em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60vw;
    height: 60vw;
    margin: -30px auto -20px auto;
  }
}

@media screen and (max-width: 840px) {
  .event div h2 {
    font-size: 1.6em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65vw;
    height: 65vw;
    margin: -30px auto -20px auto;
  }
}

@media screen and (max-width: 780px) {
  .event div h2 {
    font-size: 1.5em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68vw;
    height: 68vw;
    margin: -30px auto -20px auto;
  }

  .event p {
    margin-top: 10px;
    font-size: 0.95em;
    color: #fff;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 160px;
    width: 160px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 15px;
    object-fit: cover;
  }
}

@media screen and (max-width: 670px) {
  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75vw;
    height: 75vw;
    margin: -30px auto -20px auto;
  }
}

@media screen and (max-width: 600px) {
  .event div h2 {
    font-size: 1.35em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80vw;
    margin: -30px auto -20px auto;
  }

  .event p {
    margin-top: 7px;
    font-size: 0.9em;
    color: #fff;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 15px;
    object-fit: cover;
  }
}

@media screen and (max-width: 545px) {
  .event div h2 {
    font-size: 1.35em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85vw;
    height: 85vw;
    margin: -30px auto -20px auto;
  }

  .event p {
    margin-top: 6px;
    font-size: 0.9em;
    color: #fff;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 140px;
    width: 140px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 5px;
    object-fit: cover;
  }
}

@media screen and (max-width: 475px) {
  .event div h2 {
    font-size: 1.3em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    height: 90vw;
    margin: -20px auto -20px auto;
  }

  .event p {
    margin-top: 4px;
    font-size: 0.8em;
    color: #fff;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 135px;
    width: 135px;
    border-radius: 50%;
    margin-top: 0px;
    margin-bottom: 5px;
    object-fit: cover;
  }
}

@media screen and (max-width: 450px) {
  .event div h2 {
    font-size: 1.3em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95vw;
    height: 95vw;
    margin: -20px auto -20px auto;
  }

  .event p {
    margin-top: 4px;
    font-size: 0.9em;
    color: #fff;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 115px;
    width: 115px;
    border-radius: 50%;
    margin-top: 0px;
    margin-bottom: 5px;
    object-fit: cover;
  }
}

@media screen and (max-width: 390px) {
  .event div h2 {
    font-size: 1.2em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 5px 0 5px;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vw;
    margin: -20px auto -20px auto;
  }

  .event p {
    margin-top: 2px;
    font-size: 0.9em;
    color: #fff;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-top: 0px;
    margin-bottom: 3px;
    object-fit: cover;
  }
}

@media screen and (max-width: 340px) {
  .event div h2 {
    font-size: 1em;
    letter-spacing: 2px;
  }

  .event {
    padding: -10px 0 0 0;
    background-image: url("../assets/ev_alone.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vw;
    margin: -20px auto -20px auto;
  }

  .event p {
    margin-top: 1px;
    font-size: 0.8em;
    color: #fff;
  }

  .ach_icon {
    mix-blend-mode: exclusion;
    background: #fff;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-top: 0px;
    margin-bottom: 0px;
    object-fit: cover;
  }
}
</style>
