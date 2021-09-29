<template>
  <div id="seeAlso">
    <h2>You can also see:</h2>

    <router-link to="/timeline">
      <div class="btnTelegram">
        <div class="icon-holder">
          <div class="icon">
            <i class="icofont-connection"></i>
          </div>
          <span> Timeline </span>
        </div>
      </div>
    </router-link>

    <h2>Get in touch with me!</h2>

    <router-link to="/contact">
      <div class="btnTelegram">
        <div class="icon-holder">
          <div class="icon">
            <i class="icofont-envelope"></i>
          </div>
          <span> Contact </span>
        </div>
      </div>
    </router-link>

    <a href="https://github.com/nethanzel" target="_blank">
      <div class="btnTelegram">
        <div class="icon-holder">
          <div class="icon">
            <img src="../assets/github.png" />
          </div>
          <span> Github </span>
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
#seeAlso {
  padding-top: 2em;
  margin: 0px auto 0 auto;
  background: #000;
  /*   box-shadow: 0px -5px 10px #888888;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px; */
  max-width: 1366px;
  height: auto;
  position: relative;
  padding-bottom: 5vh;
}

h2 {
  color: #fff;
}

.btnTelegram {
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  width: 130px;
  margin: 0 15px 15px 15px;
  padding: 3px 3px;
  background: rgb(32, 32, 32);
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: #fff 1px solid;
}

.icon-holder {
  display: flex;
  align-items: center;
}

.icon i {
  font-size: 1.95em;
  color: #fff;
}

.icon img {
  width: 1.7em;
  height: 1.7em;

  max-width: 1.7em;
  max-height: 1.7em;

  color: #fff;
  padding: 0px 5px;
}

.btnTelegram span {
  background: transparent;
  color: #fff;
  padding: 7px 5px;
}

h2 {
  margin-bottom: 20px;
}

@media only screen and (max-width: 325px) {
  #seeAlso {
    height: auto;
  }
}
</style>
