<template>
  <div class="home" id="home">
    <div id="cover">
      <p class="fp">When <span class="dark">night</span> falls</p>
      <p class="sp">is when <span class="light">ideas</span> rise.</p>
    </div>

    <img id="img" alt="logo" src="../assets/logo.svg" />

    <div class="container">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>

      <p>Scroll to continue...</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  title: "Nethanzêl's Showroom",

  mounted() {
    setTimeout(() => {
      let animation = document.querySelector(".container");
      animation.style.visibility = "visible";
      animation.style.opacity = "1";
    }, 500);
  }
};
</script>

<style lang="scss" scoped>
.dark {
  background-color: #000;
  color: #fff;
  padding: 2px 5px;
  font-weight: bold;
}

.sp {
  align-self: flex-start;
}

.fp {
  align-self: flex-end;
}

.light {
  background-color: #fff;
  color: #000;
  padding: 2px 5px;
  font-weight: bold;
}

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
}

#img {
  width: 60vw;
  transition: opacity 2s;
  margin: auto;
  z-index: 10;
}

#cover {
  width: 100%;
  top: 0;
  height: 50vh;
  position: absolute;
  background: url("https://www.10wallpaper.com/wallpaper/1366x768/1605/Amazing_nebula_stars-Expanse_Space_HD_Wallpaper_1366x768.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 0.7;
  z-index: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#cover p {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #fff;
  text-align: center;
  font-size: 25px;
  margin: 15px 8px;
}

//===============(Anymated arrows)=================================================

$base: 0.7rem;

.container {
  position: absolute;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20vh;

  top: calc(100vh - 20vh);

  visibility: hidden;
  opacity: 0;
  z-index: 10;

  transition: 5s;
}

.container p {
  align-self: center;
  margin-top: 45px;
  color: #fff;
  animation: beatingText 3s ease-in-out infinite;
}

.chevron {
  position: absolute;
  width: $base * 3.5;
  height: $base * 0.8;
  opacity: 1;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #2c3e50;
}

.chevron:before {
  left: 0;
  transform: skewY(-30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(30deg);
}

@keyframes move-chevron {
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0;
  }
  33.3% {
    opacity: 0.2;
    transform: translateY($base * 8) scale(0.5);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
}

@keyframes beatingText {
  0% {
    opacity: 0.1;
  }

  10% {
    opacity: 0.2;
  }

  20% {
    opacity: 0.4;
  }

  30% {
    opacity: 0.6;
  }

  40% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
  }

  60% {
    opacity: 0.8;
  }

  70% {
    opacity: 0.6;
  }

  80% {
    opacity: 0.4;
  }

  90% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.1;
  }
}

//================================================================

@media screen and (max-width: 780px) {
  #img {
    width: 70vw;
  }

  //===============(Anymated arrows)=================================================

  $base: 0.6rem;

  .container {
    position: absolute;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20vh;

    top: calc(100vh - 20vh);

    visibility: hidden;
    opacity: 0;

    transition: 5s;
  }

  .container p {
    align-self: center;
    margin-top: 45px;
    color: #fff;
    animation: beatingText 3s ease-in-out infinite;
  }
  .chevron {
    position: absolute;
    width: $base * 3.5;
    height: $base * 0.8;
    opacity: 1;
    transform: scale(0.3);
    animation: move-chevron 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #2c3e50;
  }

  .chevron:before {
    left: 0;
    transform: skewY(-30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skewY(30deg);
  }

  @keyframes move-chevron {
    0% {
      opacity: 0;
    }

    25% {
      opacity: 0;
    }
    33.3% {
      opacity: 0.2;
      transform: translateY($base * 8) scale(0.5);
    }
    66.6% {
      opacity: 1;
      transform: translateY($base * 5.2);
    }
    100% {
      opacity: 1;
      transform: translateY($base * 3.8);
    }
  }
}

@media screen and (max-width: 500px) {
  #img {
    width: 80vw;
  }

  //===============(Anymated arrows)=================================================

  $base: 0.6rem;

  .container {
    position: absolute;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20vh;

    top: calc(100vh - 20vh);

    visibility: hidden;
    opacity: 0;

    transition: 5s;
  }

  .container p {
    align-self: center;
    margin-top: 45px;
    color: #fff;
    animation: beatingText 3s ease-in-out infinite;
  }

  .chevron {
    position: absolute;
    width: $base * 3.5;
    height: $base * 0.8;
    opacity: 1;
    transform: scale(0.3);
    animation: move-chevron 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #2c3e50;
  }

  .chevron:before {
    left: 0;
    transform: skewY(-30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skewY(30deg);
  }

  @keyframes move-chevron {
    0% {
      opacity: 0;
    }

    25% {
      opacity: 0;
    }
    33.3% {
      opacity: 0.2;
      transform: translateY($base * 8) scale(0.5);
    }
    66.6% {
      opacity: 1;
      transform: translateY($base * 5.2);
    }
    100% {
      opacity: 1;
      transform: translateY($base * 3.8);
    }
  }
}

@media screen and (max-width: 400px) {
  #img {
    width: 90vw;
  }

  //===============(Anymated arrows)=================================================

  $base: 0.6rem;

  .container {
    position: absolute;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 20vh;

    top: calc(100vh - 20vh);

    visibility: hidden;
    opacity: 0;

    transition: 5s;
  }

  .container p {
    align-self: center;
    margin-top: 45px;
    color: #fff;
    animation: beatingText 3s ease-in-out infinite;
  }

  .chevron {
    position: absolute;
    width: $base * 3.5;
    height: $base * 0.8;
    opacity: 1;
    transform: scale(0.3);
    animation: move-chevron 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #2c3e50;
  }

  .chevron:before {
    left: 0;
    transform: skewY(-30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skewY(30deg);
  }

  @keyframes move-chevron {
    0% {
      opacity: 0;
    }

    25% {
      opacity: 0;
    }
    33.3% {
      opacity: 0.2;
      transform: translateY($base * 8) scale(0.5);
    }
    66.6% {
      opacity: 1;
      transform: translateY($base * 5.2);
    }
    100% {
      opacity: 1;
      transform: translateY($base * 3.8);
    }
  }
}
</style>
