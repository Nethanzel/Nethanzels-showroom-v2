<template>
  <div class="market">
    <div>
      <h1>Working on this!.</h1>
      <h2>Here i'll show software or any service you can buy/hire from me.</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Market",
  title: "Nethanzêl's Showroom"
};
</script>

<style scoped lang="scss">
.market {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 75px;
  letter-spacing: 3px;
  cursor: default;
}

h2 {
  font-size: 35px;
  letter-spacing: 2px;
  cursor: default;
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
