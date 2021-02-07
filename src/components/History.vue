<template>
  <div class="history">
    <div class="history_all" v-for="(item,index) in historyList" :key="index">
      <div class="history_left">
        <div class="history_yuan"></div>
        <div class="history_img">
          <img src="@/assets/img/splite.png" alt="" />
        </div>
      </div>
      <div :class="[isSelect?'history_right_select':'history_right']">
        <div class="history_right_time">{{item.time}}</div>
        <div class="history_right_content">进展情况:{{item.qingkuang}}</div>
        <div class="history_right_content">后续计划:{{item.jihua}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
  props: {
      historyList: {
      type: Array,
      default: () => [],
    },
      isSelect: {
      type: Boolean,
      default: true,
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/history.scss";
</style>
