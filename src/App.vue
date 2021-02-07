<template>
  <div id="app">
    <loading v-show="showloading"></loading>
    <router-view />
  </div>
</template>
<script>
import loading from "@/components/loading.vue";
import { mapState } from "vuex";
import { getUserInfoes } from "@/api/api";
export default {
  name: "App",
  components: { loading },
  computed: {
    ...mapState(["showloading"]),
  },
  mounted() {
    let that = this;
    //安卓调用
    // let userinfo = {
    //   userName: "rongbaomin",
    //   userId: "rongbaomin",
    //   token: "da1b5d8b185b4be7a59c302e50f2a32e",
    //   mobileType: "Android",
    // };
    //安卓传参调用  userinfo为模拟安卓传的参数
    window.getUserInfo = function (userinfo) {
      // userinfo = JSON.parse(userinfo)
      //获取用户信息
      that.getUserinfos(userinfo);
    };
    // window.getUserInfo(userinfo);
  },
  methods: {
    //获取userinfo
    getUserinfos(userinfo) {
      let that = this;
      window.isTypePhone = userinfo.mobileType;
      //这儿赋值获取token 保证getUserinfos接口获取成功
      that.$store.commit("setUserinfo", userinfo);
      getUserInfoes({
        params: { username: userinfo.userName },
      }).then((res) => {
        const useinfo = {
          userId: userinfo.userId,
          token: userinfo.token,
          mobileType: userinfo.mobileType,
        };
        useinfo.user = res;
        // alert(useinfo)
        that.$store.commit("setUserinfo", useinfo);
      });
    },
   
  },
};
</script>
<style lang="scss" >
#app{
  color: black;
}
.home_title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
}
</style>
