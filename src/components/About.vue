<template>
  <div class="about" id="_">
    <headeR />

    <div id="nethDev">
      <p>
        Hi, my name is <b>Natanael Abad</b> (sometimes I use <b>Nethanzêl</b> as a nickname), I'm a Systems Engineering student,
        <b>I've been around the programming world since 2013.</b> I know that
        is a long time and my programming skills may not represent that long
        time, but the reality is that I didn't have the right focus over this.
        After being into the process of becoming an IT professional I understood
        what is programming about and now I'm taking myself to the next level.
      </p>

      <p>
        My career in the computing fields started by 2012 when I was in high
        school, I started to see the computers not only as entertainment stuff.
        In those moments I met my first programming language (Object Pascal in
        Delphi 7), later I met VB 6.0 and VB.NET (which I was using and learning
        for 5+ years). I also learned a little of Web design, by that moment the
        trendy tools were Adobe Dreamweaber, Abode Fireworks, MS Frontpage,
        Photoshop and Flash (at least those a met).
      </p>

      <p>
        Now that I almost graduate from university, I'm looking for new
        challenges from the real world to show the world how good I would be at
        this, but by the moment, here below you'll see how I've been doing so
        far. I've been learning about the Javascript world (including NodeJS)
        which is really wide. I chose this language because I've been listening
        about it since my beginnings and for me using that language was a sign
        of seniority. <b>Now I'm a Javascript developer</b>.
      </p>

      <h2>As a developer...</h2>

      <p>
        ...I like to keep the things easy and ordered. I love the minimalyst
        design and use it as my designing patern (note that I'm not a designer).
        I know that learning a lot of languages doesn't make you better, what
        really matter is how deep you go (at least for me), and that's why I
        spend lots of time around the same things.
      </p>

      <p>
        I also love creating ideas, since I got that anybody can write code, I
        also got that your ideas is what makes you different, for that I don't
        mind when doing the things my way but all the time open minded to fix
        failures, I know the things are already done but I prefer using
        something I understand over something that only makes it easier. And
        yes, it may sound like a wrong idea, but I'm not doing like that all the
        time, when it comes to something demanding I take the secure lane and do
        the things right instead of what what I think.
      </p>
    </div>

    <div
      class="infoCont"
      v-for="(section, i) in sections"
      :key="i"
      v-html="sections[i].section"
    ></div>

    <div class="spinerParent" v-if="loading">
      <img src="../assets/spin.png" />
    </div>

    <!-- -->

    <lastEvent />
  </div>
</template>

<script>
import headeR from "@/components/aboutHeader.vue";
import axios from "axios";
import lastEvent from "@/components/lastAchievement.vue";

export default {
  name: "About",
  title: "Nethanzêl's Showroom",
  components: {
    headeR,
    lastEvent
  },

  data() {
    return {
      sections: {},
      loading: true
    };
  },

  methods: {
    getSections() {
      let root = "/api/about";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/about`);
      axios
        .get(root, { headers: { token: this.client() } })
        .then(res => {
          if (res.status == 200) {
            this.sections = res.data;
            this.loading = false;
          }
        })

        .catch(() => {
          this.loading = false;
        });
    }
  },

  mounted() {
    this.getSections();
    this.loading = true;
  }
};
</script>

<style scoped lang="scss">
.about {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto 0 auto;
  padding-bottom: 2em;
  background: #000;
}

h2 {
  color: #fff;
}

.infoCont {
  border: 2px solid #fff;
  width: 80%;
  height: auto;
  padding: 15px 30px;
  background: #99999944;
  margin: 15px 0;
  height: auto;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

#nethDev {
  width: 80%;
  height: auto;
  padding: 15px 30px;
  margin: 15px 0;
  height: auto;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

#nethDev p,
b {
  text-align: justify;
  margin: 15px 0;
  color: #fff;
}

@media screen and (max-width: 780px) {
  .about {
    height: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .infoCont {
    border: 2px solid #fff;
    width: 85%;
    height: auto;
    padding: 15px 10px;
    background: #99999944;
    margin: 15px 0;
    height: auto;
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 480px) {
  .about {
    height: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .infoCont {
    border: 2px solid #fff;
    width: 90%;
    height: auto;
    padding: 15px 10px;
    background: #99999944;
    margin: 15px 0;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  #nethDev {
    width: 90%;
    height: auto;
    padding: 10px 5px;
    margin: 10px 0;
    height: auto;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
}
</style>
