<template>
  <div id="nav">
    <div id="navContainer">
      <div id="menuIconCont">
        <div class="icon-holder" @click="showMenu()">
          <div class="icon">
            <i class="icofont-navigation-menu" id="menuIcon"></i>
          </div>
        </div>
      </div>

      <div id="statusAlert">
        <img src="../assets/spin.png" class="spin" ref="spin" />
      </div>

      <div class="navOptions" id="deskMenu">
        <router-link to="#_" id="aboutNav">
          About
        </router-link>

        <router-link to="#skills" id="skillNav">
          Skills
        </router-link>

        <router-link to="#projects" id="projectNav">
          Projects
        </router-link>

        <router-link to="/contact" id="contactNav">
          Contact
        </router-link>

        <div id="closeMenu" @click="hideMenu">
          X
        </div>
      </div>

      <router-link to="#_" id="homeLogo">
        <img src="../assets/logo.svg" alt="logo" id="logo" class="link" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let menuIconCont = document.getElementById("menuIconCont");
    let icoMenu = document.querySelector("#menuIcon");

    window.onscroll = function() {
      let mobile = window.matchMedia("(max-width: 780px)");
      let nav = document.getElementById("nav");

      if (window.pageYOffset >= nav.offsetTop) {
        if (mobile.matches) {
          //nav.style.display = "flex"
          nav.style.background = "#000";
          nav.style.transition = ".4s";
          nav.style.height = "100vh";
          nav.style.width = "0vw";
          menuIconCont.style.opacity = "1";
        } else {
          //nav.style.display = "flex"
          nav.classList.remove("hidden");
          nav.style.background = "#000";
          nav.style.transition = ".4s";
          nav.style.height = "50px";
          nav.style.width = "100%";
          menuIconCont.style.opacity = "0";
        }
      } else if (window.pageYOffset < nav.offsetTop) {
        menuIconCont.style.opacity = "0";

        if (mobile.matches) {
          nav.style.background = "#000";
          nav.style.transition = ".4s";
          nav.style.height = "100vh";
          nav.style.width = "0vw";
        } else {
          //nav.style.display = "none"
          nav.classList.add("hidden");
          nav.style.background = "#fff";
          nav.style.transition = ".4s";
          nav.style.height = "0px";
          nav.style.width = "100%";
        }
      }

      let about = document.getElementById("_");
      let skills = document.getElementById("skills");
      let projects = document.getElementById("projects");
      let title = document.getElementById("title");
      let upShortcut = document.getElementById("takemeup");

      if (window.pageYOffset >= projects.offsetTop) {
        nav.style.background = "#000";

        if (icoMenu) {
          icoMenu.style.color = "#000";
        }

        document.getElementById("aboutNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("skillNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("projectNav").style.cssText =
          "border-bottom: 3px solid #fff; color: #fff; background: #000;";
        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #000; color: #000; background: #fff;";
      } else if (window.pageYOffset >= skills.offsetTop) {
        nav.style.background = "#000";

        if (icoMenu) {
          icoMenu.style.color = "#000";
        }

        document.getElementById("skillNav").style.cssText =
          "border-bottom: 3px solid #fff; color: #fff; background: #000;";
        document.getElementById("aboutNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("projectNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("contactNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #000; color: #000; background: #fff;";
      } else if (window.pageYOffset >= about.offsetTop) {
        nav.style.background = "#fff";

        if (icoMenu) {
          icoMenu.style.color = "#fff";
        }

        document.getElementById("aboutNav").style.cssText =
          "border-bottom: 3px solid #000; color: #000; background: #fff;";
        document.getElementById("skillNav").style.cssText =
          "border: none; color: #000";
        document.getElementById("projectNav").style.cssText =
          "border: none; color: #000";
        document.getElementById("contactNav").style.cssText =
          "border: none; color: #000";
        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #fff; color: #fff; background: #000;";
      }

      if (window.pageYOffset <= title.offsetTop) {
        icoMenu.style.opacity = "0";
        nav.style.opacity = "0";

        upShortcut.style.visibility = "hidden";
        upShortcut.style.opacity = "0";
      } else {
        nav.style.opacity = "1";
        icoMenu.style.opacity = "1";

        upShortcut.style.visibility = "visible";
        upShortcut.style.opacity = "1";
      }
    };

    window.onresize = function() {
      let mobile = window.matchMedia("(max-width: 780px)");
      let nav = document.getElementById("nav");

      if (mobile.matches) {
        nav.style.background = "#000";
        nav.style.transition = ".8s";
        nav.style.width = "0vw";
      } else {
        nav.style.background = "#000";
        nav.style.transition = ".8s";
        nav.style.height = "50px";
        nav.style.width = "100vw";
      }

      let about = document.getElementById("_");
      let skills = document.getElementById("skills");
      let projects = document.getElementById("projects");

      if (window.pageYOffset >= projects.offsetTop) {
        nav.style.background = "#000";

        if (icoMenu) {
          icoMenu.style.color = "#000";
        }

        document.getElementById("aboutNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("skillNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("projectNav").style.cssText =
          "border: 1px solid #fff; color: #000; background: #fff;";
        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #000; color: #000; background: #fff;";
      } else if (window.pageYOffset >= skills.offsetTop) {
        nav.style.background = "#000";

        if (icoMenu) {
          icoMenu.style.color = "#000";
        }

        document.getElementById("skillNav").style.cssText =
          "border: 1px solid #fff; color: #000; background: #fff;";
        document.getElementById("aboutNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("projectNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("contactNav").style.cssText =
          "border: none; color: #fff";
        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #000; color: #000; background: #fff;";
      } else if (window.pageYOffset >= about.offsetTop) {
        nav.style.background = "#fff";

        if (icoMenu) {
          icoMenu.style.color = "#fff";
        }

        document.getElementById("aboutNav").style.cssText =
          "border: 1px solid #000; color: #fff; background: #000;";
        document.getElementById("skillNav").style.cssText =
          "border: none; color: #000";
        document.getElementById("projectNav").style.cssText =
          "border: none; color: #000";
        document.getElementById("contactNav").style.cssText =
          "border: none; color: #000";
        document.getElementById("closeMenu").style.cssText =
          "border: 1px solid #fff; color: #fff; background: #000;";
      }
    };
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
    }
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

#statusAlert {
  position: absolute;
  width: 100%;
  top: 42px;
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

  opacity: 0;
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

.BlackParrHover:hover {
  color: #000;
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.WhiteParrHover:hover {
  background: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

a {
  text-decoration: none;
  margin-right: 60px;
  padding: 3px 15px;
  transition: .3s;
  color: #fff;
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

#menuIconCont {
  opacity: 0;
  height: 0;
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
    height: 0vh;
    width: 0vw;
    max-height: 100vh;
    background: #fff;
    position: fixed;
    z-index: 100;
    overflow: hidden;
    max-width: 70vw;
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
    transition: .3s;
    color: #fff;
  }

  #closeMenu {
    display: flex;
    color: #000;
    align-self: center;
    border-radius: 50%;
    background: #fff;
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
