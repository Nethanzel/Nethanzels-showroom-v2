<template>
  <div class="notfound">
    <div>
      <h1>You're missing something!.</h1>
      <h2>What you're looking for, is not here.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "notFound",
  title: "Nethanzêl Showroom (404)"
};
</script>

<style scoped lang="scss">
.notfound {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

h1 {
  font-size: 75px;
  letter-spacing: 3px;
  cursor: default;
  color: #fff;
}

h2 {
  font-size: 35px;
  letter-spacing: 2px;
  cursor: default;
  color: #fff;
}

@media screen and (max-width: 660px) {
  h1 {
    font-size: 65px;
    letter-spacing: 3px;
  }

  h2 {
    font-size: 30px;
    letter-spacing: 2px;
  }
}

@media screen and (max-width: 570px) {
  h1 {
    font-size: 55px;
    letter-spacing: 3px;
  }

  h2 {
    font-size: 25px;
    letter-spacing: 2px;
  }
}

@media screen and (max-width: 490px) {
  h1 {
    font-size: 45px;
    letter-spacing: 3px;
  }

  h2 {
    font-size: 20px;
    letter-spacing: 2px;
  }
}
</style>
