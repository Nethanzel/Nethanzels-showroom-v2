<template>
  <div class="container">
    <div id="cover">
      <img src="../assets/lights1.jpg" />
    </div>
    <img src="../assets/profile.jpg" alt="photo" id="photo" />
    <h1 id="title">Natanael Abad</h1>
    <p>Close to graduate Systems and computing engenieer.</p>
    <p>Web frontend {{ expChar }} backend developer.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expChar: "&"
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

#cover {
  width: 100%;
  top: 0;
  height: 280px;
  margin-bottom: 115px;
  overflow: hidden;
}

#cover img {
  object-fit: cover;
  width: 100vw;
  height: 100%;
}

#cover:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(0, 0, 0, 1) 90%
  );
  width: 100%;
  height: 280px;
}

#photo {
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
  width: 270px;
  height: 270px;
  transition: 0.6s;
  align-self: center;
  margin-top: 125px;
}

#title {
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  margin: 0;
  text-align: center;
  padding-bottom: 10px;
}

#title::after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 280px;
  border-bottom: 2px solid #fff;
}


p {
  margin: 2px 0;
  transition: all 0.5s ease-in-out;
  text-align: center;
  color: #fff;
  font-size: 18px;
}

@media screen and (max-width: 450px) {
  #title {
    font-size: 54px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-align: center;
  }

  #title::after {
    width: 250px;
  }
}

@media screen and (max-width: 450px) {
  p {
    font-size: 15px;
  }
}

@media screen and (max-width: 411px) {
  p {
    font-size: 14px;
  }
  #title {
    font-size: 52px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-align: center;
  }
}

@media screen and (max-width: 388px) {
  p {
    font-size: 13px;
  }
  #title {
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-align: center;
  }
}

@media screen and (max-width: 375px) {
  #title {
    font-size: 49px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-align: center;
  }
}

@media screen and (max-width: 367px) {
  #title {
    font-size: 47px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-align: center;
  }

  p {
    font-size: 12px;
  }
}

@media screen and (max-width: 351px) {
  #title {
    font-size: 46px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-align: center;
  }

  p {
    font-size: 13px;
  }
}

@media screen and (max-width: 325px) {
  #title {
    font-size: 41px;
    font-weight: bold;
    color: #fff;
    margin: 0;
    text-align: center;
  }
}
</style>
