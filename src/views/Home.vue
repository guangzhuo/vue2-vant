<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <van-button type="primary" block class="van-base-wrap">
      主要按钮
    </van-button>
    <div class="textRem">textRem</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { getAreas } from "../network/api";

export default {
  name: "Home",
  mounted() {
    getAreas({
      name: "GZ5",
      password: "123456",
    });
  },
  methods: {},
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped lang="less">
.van-base-wrap {
  position: fixed;
  bottom: 0;
}
.textRem {
  font-size: 30px;
}
</style>
