<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DemoMain></DemoMain>
    <CardMain :imgSrc="daliImg" summary="This is summary"></CardMain>
    <CardMain :imgSrc="daliImg" summary="This is summary">
      <template v-slot:footer>
        <div>
          <div class="level">中级</div>
          <div class="price">¥100</div>
        </div>
      </template>
    </CardMain>
    <CardMain :imgSrc="daliImg">
      <template>
        <div>This is Footer</div>
      </template>
      <template v-slot:footer>
        <div>
          <div class="level">中级</div>
          <div class="price">¥100</div>
        </div>
      </template>
    </CardMain>
  </div>
</template>

<script>
import daliImg from "./assets/dali.jpeg";
export default {
  name: "App",
  components: {},
  data() {
    return {
      daliImg,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
