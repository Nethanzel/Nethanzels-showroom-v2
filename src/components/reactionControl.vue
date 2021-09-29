<template>
  <div class="pControl">
    <p>Let me know you liked this project</p>

    <div class="icon-holder" v-if="!stars">
      <div class="icon">
        <i class="icofont-trophy"></i>
      </div>
      <span>{{ statusText }}</span>
    </div>

    <div class="icon-holder" v-if="stars">
      <div class="icon">
        <i class="icofont-ui-rating"></i>
      </div>
      <span>{{ statusText }}</span>
    </div>

    <div class="react">
      <img src="../assets/spin.png" class="spin" ref="spin" />

      <div
        class="icon reaction"
        v-if="status && !stars"
        @click="reactionOneLess($event)"
        ref="trophless"
      >
        <i class="icofont-trophy"></i>
        <span>-1</span>
      </div>

      <div
        class="icon reaction"
        v-if="!status && !stars"
        @click="reactionPlusOne($event)"
        ref="trophplus"
      >
        <i class="icofont-trophy"></i>
        <span>+1</span>
      </div>

      <div
        class="icon reaction"
        v-if="stars && status"
        @click="reactionOneLess($event)"
        ref="starless"
      >
        <i class="icofont-ui-rating"></i>
        <span>-1</span>
      </div>

      <div
        class="icon reaction"
        v-if="stars && !status"
        @click="reactionPlusOne($event)"
        ref="starplus"
      >
        <i class="icofont-ui-rating"></i>
        <span>+1</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    reactions: Array
  },

  data() {
    return {
      project: undefined,
      stars: false
    };
  },

  computed: {
    statusText() {
      return this.trophies(this.reactions[0]);
    },

    status() {
      return this.haveReacted(this.reactions[0]);
    }
  },

  methods: {
    trophies(val) {
      val = val.length;

      if (val == 0) {
        if (this.stars) {
          return "No stars yet.";
        }
        return "No trophies yet.";
      } else if (val == 1) {
        if (this.stars) {
          return `+${val} star gotten`;
        }
        return `+${val} trophy gotten`;
      } else {
        if (this.stars) {
          return `+${val} stars gotten`;
        }
        return `+${val} trophies gotten`;
      }
    },

    haveReacted(values) {
      let client = this.client();
      if (values.includes(client)) {
        return true;
      } else {
        return false;
      }
    },

    reactionPlusOne() {
      let tropPlus = this.$refs.trophplus;
      let starPlus = this.$refs.starplus;

      let spin = this.$refs.spin;
      spin.style.display = "flex";

      if (this.stars) {
        starPlus.style.display = "none";
      } else {
        tropPlus.style.display = "none";
      }

      let root = "/api/reactionadd";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/reactionadd`);
      axios
        .post(
          root,
          { id: this.project, index: this.stars },
          { headers: { token: this.client() } }
        )
        .then(res => {
          if (res.status == 204) {
            spin.style.display = "none";
            this.reactions[0].push(this.client());
          }
        })
        .catch(() => {
          spin.style.display = "none";

          if (this.stars) {
            starPlus.style.display = "flex";
          } else {
            tropPlus.style.display = "flex";
          }
        });
    },

    reactionOneLess() {
      let tropLess = this.$refs.trophless;
      let starLess = this.$refs.starless;

      let spin = this.$refs.spin;
      spin.style.display = "flex";

      if (this.stars) {
        starLess.style.display = "none";
      } else {
        tropLess.style.display = "none";
      }

      let root = "/api/reactionrem";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/reactionrem`);

      axios
        .post(
          root,
          { id: this.project, index: this.stars },
          { headers: { token: this.client() } }
        )
        .then(res => {
          if (res.status == 204) {
            spin.style.display = "none";
            let i = this.reactions.indexOf(this.client());
            this.reactions[0].splice(i, 1);
          }
        })
        .catch(() => {
          spin.style.display = "none";

          if (this.stars) {
            starLess.style.display = "flex";
          } else {
            tropLess.style.display = "flex";
          }
        });
    }
  },

  mounted() {
    this.project = this.reactions[1];

    if (this.reactions[2] == false) {
      this.stars = false;
    } else {
      this.stars = true;
    }
  }
};
</script>

<style scoped>
p {
  margin-bottom: 10px;
  color: #000;
}

.pControl {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

i {
  font-size: 28px;
}

.icon {
  margin-top: 5px;
}

.icon-holder {
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  margin-left: 8px;
}

.react {
  display: flex;
  justify-content: center;
  align-items: center;
}

.reaction {
  margin: 15px 10px;
  border: 1px solid #000;
  padding: 5px;
  margin-bottom: 0;
}

.reaction:hover {
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.reaction:hover i,
.reaction:hover span {
  color: #000;
}

.reaction i {
  font-size: 18px;
}

.spin {
  display: none;
  height: 30px;
  animation: 2s rotate360 infinite linear;
}

@keyframes rotate360 {
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate360 {
  to {
    transform: rotate(360deg);
  }
}
</style>
