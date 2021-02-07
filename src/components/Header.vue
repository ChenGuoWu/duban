<template>
  <div class="header">
    <div class="header_title">
      <div class="header_title_left">
        <van-icon name="arrow-left" @click="goBack" />
      </div>
      <div class="header_title_center" @click="dropOut">
        <van-icon name="cross" />
      </div>
      <slot></slot>
      <img src="../assets/img/search.png" alt="" class="header_title_search" v-if="this.$route.meta.search">
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  components: {
    "van-icon": Icon,
  },

  methods: {
    goBack() {
      if (this.$route.path == "/") {
        this.dropOut();
      } else {
        this.$router.go(-1);
      }
    },
    dropOut() {
      // 退出前清除本地存储数据
      localStorage.clear();
      if (window.isTypePhone == "Android") {
        railsMobilePlatform.closepage();
      } else {
        window.webkit.messageHandlers.closepage.postMessage("");
      }
    },
  },
  props: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/header.scss";
</style>
