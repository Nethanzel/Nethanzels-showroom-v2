<template>
  <div class="contact" id="contact">
    <navMenu />

    <h1 id="pTop">Get in touch!</h1>
    <div class="infoCont">
      <!--      <p>
        You've got some options: Send an email to <span>natanaelabaad@gmail.com</span> or send a direct message on 
        <a href="https://t.me/nethanzel" target="_blank">Telegram</a>.
      </p>
-->
      <h3>
        Leave me a message right here:
      </h3>

      <div id="contactForm">
        <input type="text" id="clName" class="input" placeholder="Your name" />
        <input
          type="text"
          id="clContact"
          class="input"
          placeholder="Mail direction or phone number"
        />
        <textarea
          id="clMessage"
          cols="30"
          rows="30"
          class="input"
          placeholder="Your message"
        ></textarea>

        <div class="btnParent" ref="btnParent">
          <span class="btn" @click="sendMessage()">Send</span>
        </div>
      </div>
      <img src="../assets/spin.png" class="spin" ref="spin" />
      <h2 id="advise"></h2>

      <p>You can also have direct contact on:</p>
      <a href="https://t.me/nethanzel" target="_blank">
        <div class="btnTelegram">
          <div class="icon-holder">
            <div class="icon">
              <i class="icofont-telegram"></i>
            </div>
            <span> Telegram </span>
          </div>
        </div>
      </a>

      <a href="https://facebook.com/natanaelabaad" target="_blank">
        <div class="btnTelegram">
          <div class="icon-holder">
            <div class="icon">
              <i class="icofont-facebook"></i>
            </div>
            <span>Facebook </span>
          </div>
        </div>
      </a>
    </div>

    <div class="infoCont">
      <p>
        Get my CV by clicking one of the links here below, choose the language
        you like the most. More details about contact are there.
      </p>

      <a class="cv" href="/projects/nethanzels_cv.pdf" target="_blank"
        >English</a
      >
      <a class="cv" href="/projects/nethanzels_cv_sp.pdf" target="_blank"
        >Spanish</a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navMenu from "@/components/navegationMenuSE.vue";

export default {
  name: "Contact",
  title: "Nethanzêl's Showroom",

  components: {
    navMenu
  },

  methods: {
    sendMessage() {
      let sender = document.getElementById("clName"),
        contact = document.getElementById("clContact"),
        message = document.getElementById("clMessage"),
        spin = this.$refs.spin,
        btnParent = this.$refs.btnParent;

      spin.style.display = "inline";
      btnParent.style.display = "none";

      let nMessage = {
        sender: sender.value,
        contact: contact.value,
        message: message.value
      };

      let root = "/api/message";
      if(process.env.VUE_APP_DEV) root = new URL(`http://${process.env.VUE_APP_SERVER}/api/message`);
      axios
        .post(
          root,
          { message: nMessage },
          { headers: { token: this.client() } }
        )
        .then(res => {
          spin.style.display = "none";
          if (res.status == 204) {
            document.getElementById("contactForm").style.display = "none";
            let advise = document.getElementById("advise");
            advise.style.display = "inline";
            advise.innerText = "Your message was sent.";
          }
        })

        .catch(() => {
          spin.style.display = "none";
          document.getElementById("contactForm").style.display = "none";
          let advise = document.getElementById("advise");
          advise.style.display = "inline";
          advise.innerText = "Your message couldn't be sent, try again later.";
        });
    },
    UIUpdate() {
      let nav = document.getElementById("nav");

      document.getElementById("_01").style.cssText =
        "border: none; color: #fff";
      document.getElementById("_02").style.cssText =
        "border: none; color: #fff";
      document.getElementById("_03").style.cssText =
        "border: none; color: #fff";
      document.getElementById("_04").style.cssText =
        "border: none; color: #fff";

      document.getElementById("closeMenu").style.cssText =
        "border: 1px solid #000; color: #000; background: #fff;";
      nav.style.background = "#000";

      let rPosition = document.getElementsByClassName(
        "router-link-exact-active"
      );
      if (rPosition[0]) {
        rPosition[0].style.cssText = "border-bottom: 3px solid #fff; color: #fff; background: #000;";
      }

      document.getElementById("menuIcon").style.cssText = "color: #000;";
    }
  },

  mounted() {
    this.UIUpdate();

    window.onresize = this.UIUpdate();
  },

  beforeDestroy() {
    window.onresize = null;
  }
};
</script>

<style scoped lang="scss">
.infoCont h1 {
  font-size: 40px;
  color: #000;
}

.infoCont p {
  margin-top: 25px;
}

.infoCont p,
h3 {
  text-align: center;
  color: #000;
  cursor: default;
}

h3 {
  margin-bottom: 10px;
}

.cv {
  text-decoration: none;
  color: #fff;
  background: #000;
  padding: 1px 7px;
  font-weight: bold;
  margin: 0 10px;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1366px;
  min-height: 93.57vh;
  padding: 50px 0 0 0;
  margin: 0px auto 0 auto;
  background: linear-gradient(#e0dede, #fff);
  box-shadow: 0px -5px 10px #888888;
}

.infoCont {
  border: 2px solid #000;
  width: 60%;
  height: auto;
  background: #99999944;
  padding: 10px 10px;
  margin: 15px 0 30px 0;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  z-index: 10;
}

h1 {
  cursor: default;
  color: #000;
}

h1::after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 220px;
  border-bottom: 2px solid #000;
  margin-top: 5px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
  line-height: 22px;
  cursor: default;
}

#telImg {
  height: 35px;
  width: 35px;
}

.input {
  display: block;
  outline: none;
  border: none;
  margin: 10px 0;
  padding: 5px 5px;
  color: #000;
  border: 1px solid #000;
  font-size: 16px;
  opacity: 0.5;
  transition: 0.6s;
}

.input:hover {
  display: block;
  outline: none;
}

input:focus {
  opacity: 1;
  transition: 0.6s;
}

textarea {
  resize: none;
  height: 85px;
  transition: 0.6s;
}

textarea:focus {
  opacity: 1;
  transition: 0.6s;
}

#contactForm {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  transition: all 0.5s;
}

.btnParent {
  padding: 10px;
}

.btnTelegram {
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  width: 130px;
  margin: 0 15px;
  padding: 3px 3px;
  background: #000;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: #000 1px solid;
}

.icon-holder {
  display: flex;
  align-items: center;
}

.icon i {
  font-size: 1.95em;
  color: #fff;
}

.btnTelegram span {
  background: transparent;
  color: #fff;
  padding: 7px 5px;
}

.btn {
  padding: 5px 30px;
  transition: 0.5s;
  background: #000;
  color: #ffffff86;
  border: 1px solid #000;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

.btn:hover {
  padding: 5px 30px;
  transition: 0.6s;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#advise {
  padding: 5px 30px;
  background: #000;
  color: #fff;
  display: none;
  width: auto;
}

.spin {
  display: none;
  height: 40px;
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

@media screen and (max-width: 800px) {
  .contact {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto 0 auto;
    padding-top: 0;
  }

  .infoCont {
    border: 2px solid #000;
    width: 85%;
    height: auto;
    background: #99999944;
    padding: 10px 10px;
  }

  #contactForm {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }

  .btn {
    padding: 5px 30px;
    transition: 0.5s;
    background: #000;
    color: #fff;
    border: 1px solid #000;
  }
  .btn:active {
    padding: 5px 30px;
    transition: 0.6s;
    background: #fff;
    color: #000;
    cursor: pointer;
    transition: 0.3s;
  }
}

@media screen and (max-width: 450px) {
  #contactForm {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }

  .btnTelegram {
    width: 115px;
    margin: 0 5px;
    padding: 3px 3px;
  }

  .btnTelegram span {
    font-size: 14px;
    background: transparent;
    color: #fff;
    padding: 7px 3px;
  }

  #telImg {
    height: 30px;
    width: 30px;
  }
}
</style>
