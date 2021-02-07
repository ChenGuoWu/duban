<template>
  <div class="home">
    <headeres>
      <div class="home_title">首页</div>
    </headeres>
    <div class="home_title_approve">
      <div class="home_title_approve_title">督办任务</div>
      <div class="home_title_approve_content">
        <div
          v-for="(item, index) in showapprovlistSign"
          :key="index"
          class="home_title_approve_show"
          @click="goclickapprove(item.url)"
        >
          <div class="home_title_approve_img">
            <img :src="imgsrc(item.img)" />
          </div>
          <div class="home_title_approve_contents">{{ item.content }}</div>
          <div v-if="item.queryTotal" class="home_title_approve_jiaobiao">
            {{ item.queryTotal }}
          </div>
        </div>
      </div>
      <div class="home_title_approve_title">督办进展</div>
      <div class="home_title_approve_content">
        <div
          v-for="(item, index) in showapprovlistRem"
          :key="index"
          class="home_title_approve_show"
          @click="goclickapprove(item.url)"
        >
          <div class="home_title_approve_img">
            <img :src="imgsrc(item.img)" />
          </div>
          <div class="home_title_approve_contents">{{ item.content }}</div>
          <div v-if="item.queryTotal" class="home_title_approve_jiaobiao">
            {{ item.queryTotal }}
          </div>
        </div>
      </div>
       <div class="home_title_approve_title">领导批示</div>
      <div class="home_title_approve_content">
        <div
          v-for="(item, index) in showapprovlistLeader"
          :key="index"
          class="home_title_approve_show"
          @click="goclickapprove(item.url)"
        >
          <div class="home_title_approve_img">
            <img :src="imgsrc(item.img)" />
          </div>
          <div class="home_title_approve_contents">{{ item.content }}</div>
          <div v-if="item.queryTotal" class="home_title_approve_jiaobiao">
            {{ item.queryTotal }}
          </div>
        </div>
        </div>
       <div class="home_title_approve_title">综合查询</div>
      <div class="home_title_approve_content">
        <div
          v-for="(item, index) in showapprovlistSelect"
          :key="index"
          class="home_title_approve_show"
          @click="goclickapprove(item.url)"
        >
          <div class="home_title_approve_img">
            <img :src="imgsrc(item.img)" />
          </div>
          <div class="home_title_approve_contents">{{ item.content }}</div>
          <div v-if="item.queryTotal" class="home_title_approve_jiaobiao">
            {{ item.queryTotal }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    headeres: Header,
  },
  data() {
    return {
      showapprovlistSign: [
        {
          content: "任务签收",
          url: "TaskSign",
          img: "taskSign.png",
        },
        {
          content: "任务签报",
          url: "TaskReminder",
          img: "taskReminder.png",
        },
      ],
      showapprovlistRem: [
        {
          content: "填报",
          url: "TaskFillIn",
          img: "fillin.png",
        },
        {
          content: "已办结",
          url: "HaveFinished",
          img: "finished.png",
        },
        {
          content: "已延期",
          // url: "TaskReminder",
          img: "postponed.png",
        },
      ],
      showapprovlistLeader: [
        {
          content: "任务批示",
          // url: "TaskSign",
          img: "leader.png",
        },
      ],
      showapprovlistSelect: [
        {
          content: "查询",
          url: "ComprehensiveSleect",
          img: "select.png",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    //导入图片地址
    imgsrc(item) {
      return require("@/assets/img/" + item);
    },
    //点击跳转对应的页面
    goclickapprove(val) {
      //赋值store中的from
      this.$router.push({
        name: val,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/home.scss";
</style>

