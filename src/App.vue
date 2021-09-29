<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  title: "Nethanzêl's Showroom",

  beforeMount() {
    this.client();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Carme&display=swap");

* {
  text-decoration: none;
  padding: 0;
  margin: 0;
  font-family: "Carme";
  letter-spacing: 1px;
}

#app {
  text-align: center;
  margin: 0 auto;
  background: #000;
  min-height: 100vh;
}

h1 {
  font-size: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.spinerParent {
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.spinerParent img {
  height: 5vh;
  width: 5vh;
  animation: 1.3s rotate360 infinite linear;
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
