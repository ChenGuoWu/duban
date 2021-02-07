<template>
  <div class="Upcoming">
    <headeres>
      <div class="home_title">详情</div>
    </headeres>
    <div class="Upcoming-content">
      <my-list></my-list>
      <div class="history_title">历史填报</div>
      <my-history :historyList='historyListSelect' :isSelect='selectTrue'></my-history>

      <div class="footer">
        <van-button plain type="info">取消</van-button>
        <van-button type="info">签收</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import MyDetailList from "@/components/DetailList.vue";
import MyHistory from "@/components/History.vue";
import { Button } from "vant";
export default {
  components: {
    headeres: Header,
    myList: MyDetailList,
    myHistory: MyHistory,
    "van-button": Button,
  },
  created() {},
  data() {
    return {
      selectTrue:false,//放大字体
        historyListSelect:[
            {time:'232121-21-212',qingkuang:'232121-21-212',jihua:'232121-21-212'},
            {time:'232121-21-212',qingkuang:'232121-21-212',jihua:'232121-21-212'},
            {time:'232121-21-212',qingkuang:'232121-21-212',jihua:'232121-21-212'},
        ]
    };
  },
  computed: {},
  methods: {
    //获取已办列表
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/detailcommon.scss";
</style>
<style lang="scss" scoped>
.history_title{
    margin-top: 10px;
   padding-top:20px ;
    
    padding-left:10px ;
    background: white;
    font-weight: bold;
}
</style>

