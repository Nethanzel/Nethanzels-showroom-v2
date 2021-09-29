<template>
  <div id="nav">
    <div id="navContainer">
      <div id="menuIconCont">
        <div class="icon-holder">
          <div class="icon">
            <i class="icofont-navigation-menu" id="menuIcon"></i>
          </div>
        </div>
      </div>

      <div id="statusAlert">
        <img src="../assets/spin.png" class="spin" ref="spin" />
      </div>

      <div class="navOptions" id="deskMenu">
        <router-link to="/" id="_01">
          Home
        </router-link>

        <router-link to="/projects" id="_02">
          Projects
        </router-link>

        <router-link to="/timeline" id="_03">
          Timeline
        </router-link>

        <router-link to="/contact" id="_04">
          Contact
        </router-link>

        <div id="closeMenu" @click="hideMenu">
          X
        </div>
      </div>

      <router-link to="/" id="homeLogo">
        <img src="../assets/logo.svg" alt="logo" id="logo" class="link" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let menuIcon = document.getElementById("menuIcon");
    menuIcon.style.cssText = "color: #fff;";

    this.updateUI();

    window.onresize = function() {
      let menuIconCont = document.getElementById("menuIconCont");
      let mobile = window.matchMedia("(max-width: 780px)");
      let nav = document.getElementById("nav");
      let upSign = document.getElementById("pTop");

      if (mobile.matches) {
        nav.style.background = "#000";
        nav.style.transition = ".4s";
        nav.style.height = "100vh";
        nav.style.width = "0vw";

        menuIconCont.style.opacity = "1";
      } else {
        nav.style.background = "#000";
        nav.style.transition = ".4s";
        nav.style.height = "50px";
        nav.style.width = "100vw";
        menuIconCont.style.opacity = "0";
      }

      if (window.pageYOffset >= upSign.offsetTop) {
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
      } else {
        document.getElementById("_01").style.cssText =
          "border: none; color: #000";
        document.getElementById("_02").style.cssText =
          "border: none; color: #000";
        document.getElementById("_03").style.cssText =
          "border: none; color: #000";
        document.getElementById("_04").style.cssText =
          "border: none; color: #000";

        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #fff; color: #fff; background: #000;";
        nav.style.background = "#fff";

        let rPosition = document.getElementsByClassName(
          "router-link-exact-active"
        );
        if (rPosition[0]) {
          rPosition[0].style.cssText = "border-bottom: 3px solid #fff; color: #fff; background: #000;";
        }
      }
    };

    window.onscroll = function() {
      let mobile = window.matchMedia("(max-width: 780px)");
      let nav = document.getElementById("nav");
      let menuIconCont = document.getElementById("menuIconCont");
      let upShortcut = document.getElementById("takemeup");
      let upSign = document.getElementById("pTop");

      if (mobile.matches) {
        nav.style.height = "100vh";
        nav.style.width = "0vw";
        menuIconCont.style.opacity = "1";
      }

      if (window.pageYOffset >= upSign.offsetTop) {
        if (upShortcut) {
          upShortcut.style.opacity = "1";
          upShortcut.style.visibility = "visible";
        }

        document.getElementById("_01").style.cssText =
          "border: none; color: #fff";
        document.getElementById("_02").style.cssText =
          "border: none; color: #fff";
        document.getElementById("_03").style.cssText =
          "border: none; color: #fff";
        document.getElementById("_04").style.cssText =
          "border: none; color: #fff";
        menuIcon.style.cssText = "color: #000;";

        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #000; color: #000; background: #fff;";
        nav.style.background = "#000";

        let rPosition = document.getElementsByClassName("router-link-exact-active");
        if (rPosition[0]) {
          rPosition[0].style.cssText = "border-bottom: 3px solid #fff; color: #fff; background: #000;";
        }
      } else {
        if (upShortcut) {
          upShortcut.style.opacity = "0";
          upShortcut.style.visibility = "hidden";
        }

        document.getElementById("_01").style.cssText =
          "border: none; color: #000";
        document.getElementById("_02").style.cssText =
          "border: none; color: #000";
        document.getElementById("_03").style.cssText =
          "border: none; color: #000";
        document.getElementById("_04").style.cssText =
          "border: none; color: #000";
        menuIcon.style.cssText = "color: #fff;";

        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #fff; color: #fff; background: #000;";
        nav.style.background = "#fff";

        let rPosition = document.getElementsByClassName("router-link-exact-active");
        if (rPosition[0]) {
          rPosition[0].style.cssText = "border-bottom: 3px solid #000; color: #000; background: #fff;";
        }
      }
    };

    let iconMenu = document.getElementById("menuIcon");
    iconMenu.addEventListener("click", this.showMenu);
  },

  methods: {
    hideMenu() {
      let nav = document.getElementById("nav");
      nav.style.width = "0vw";
    },

    showMenu() {
      let nav = document.getElementById("nav");
      nav.style.width = "70vw";
      nav.style.height = "100vh";
    },

    updateUI() {
      let menuIconCont = document.getElementById("menuIconCont");
      let mobile = window.matchMedia("(max-width: 780px)");
      let nav = document.getElementById("nav");

      if (mobile.matches) {
        nav.style.background = "#fff";
        nav.style.transition = ".4s";
        nav.style.height = "100vh";
        nav.style.width = "0vw";
        menuIconCont.style.opacity = "1";
      } else {
        nav.style.background = "#fff";
        nav.style.transition = ".4s";
        nav.style.height = "50px";
        menuIconCont.style.opacity = "0";
      }
    }
  },

  beforeDestroy() {
    let iconMenu = document.getElementById("menuIcon");
    iconMenu.removeEventListener("click", this.showMenu);
  }
};
</script>

<style scoped lang="scss">
.spin {
  height: 30px;
  animation: 1.5s rotate360 infinite linear;
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

.router-link-exact-active {
  border-bottom: 3px solid #000;
  font-weight: bold;
}

#statusAlert {
  position: absolute;
  width: 100%;
  top: 45px;
  display: none;
}

#nav {
  top: -1px;
  left: 0;

  height: 50px;
  width: 100%;
  max-height: 50px;
  background: #fff;
  position: fixed;
  z-index: 100;
  overflow: hidden;
}

#navContainer {
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
}

.hidden {
  opacity: 0;
}

.navOptions {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1366px;
}

a {
  text-decoration: none;
  margin-right: 60px;
  padding: 3px 15px;
  transition: 0.3s;
  color: #000;
}

#logo {
  height: 30px;
  position: relative;
  top: 10px;
  cursor: pointer;
}

#mobMenu {
  display: none;
}

#deskMenu {
  display: flex;
}

.icon {
  font-size: 26px;
}

#closeMenu {
  display: none;
}

#menuIcon {
  color: #fff;
}

@media screen and (max-width: 1150px) {
  #deskMenu {
    display: flex;
    width: 80%;
    margin-left: 20%;
  }
}

@media screen and (max-width: 900px) {
  #nav {
    top: -1px;
    left: 0;

    height: 0px;
    width: 100%;
    max-height: 50px;
    background: #fff;
    position: fixed;
    z-index: 100;
    overflow: hidden;
  }

  #navContainer {
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
  }

  .navOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-left: 120px;
  }

  #mobMenu {
    display: none;
  }

  #deskMenu {
    display: flex;
  }
}

@media screen and (max-width: 810px) {
  #nav {
    top: -1px;
    left: 0;

    height: 0px;
    width: 100%;
    max-height: 50px;
    background: #fff;
    position: fixed;
    z-index: 100;
    overflow: hidden;
  }

  #navContainer {
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
  }

  .navOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin-left: 110px;
  }

  #mobMenu {
    display: none;
  }

  #deskMenu {
    display: flex;
    margin: none auto;
  }
}

@media screen and (max-width: 780px) {
  #nav {
    top: -1px;
    left: 0;
    height: 100vh;
    width: 0vw;
    max-height: 100vh;
    background: #fff;
    position: fixed;
    z-index: 100;
    overflow: hidden;
    align-self: flex-start;
  }

  #navContainer {
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .navOptions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: none;
  }

  a {
    text-decoration: none;
    margin-right: 0px;
    margin-bottom: 20px;
    padding: 5px 20px;
    transition: 0.3s;
    color: #000;
  }

  #closeMenu {
    display: flex;
    color: #fff;
    align-self: center;
    border-radius: 50%;
    background: #000;
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 3vh;
    border: 2px solid #000;
  }

  #logo {
    top: 13px;
    height: 25px;
    cursor: pointer;
  }

  #homeLogo {
    margin: 0 auto;
  }

  #statusAlert {
    position: absolute;
    width: 100%;
    top: -35px;
    display: none;
  }

  #deskMenu {
    display: flex;
    margin-left: 0px;
    flex-direction: column;
    width: 100%;
  }

  #menuIconCont {
    background: transparent;
    position: fixed;
    z-index: 0;
    top: 0;
    height: 40px;
    width: 100%;
    display: flex;
    margin-left: 0.5em;
    margin-top: 0.25em;
    overflow: auto;
    opacity: 0;
    transition: all 0.5s;
  }

  .icon i {
    color: #fff;
    font-size: 1.3em;
    transition: all 0.6s;
  }
}
</style>
