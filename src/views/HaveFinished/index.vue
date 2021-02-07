<template>
  <div class="Upcoming">
    <headeres>
      <div class="home_title">历史填报</div>
    </headeres>
    <div class="Upcoming-content">
      <my-history :historyList='historyListSelect'></my-history>
    </div>
  </div>
</template>
<script>
import MyHistory from "@/components/History.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    headeres: Header,
     myHistory: MyHistory,
  },
  created() {

  },
  data() {
    return {
         historyListSelect:[
            {time:'232121-21-212',qingkuang:'232121-21-212',jihua:'232121-21-212'},
            {time:'232121-21-212',qingkuang:'232121-21-212',jihua:'232121-21-212'},
            {time:'232121-21-212',qingkuang:'232121-21-212',jihua:'232121-21-212'},
        ],
      pageNum: 1, //第一页
      arrHaving: [
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
        {title:'关于2018年8月份续办事项督办通知',bianhao:'001',type:'续班时之',time:'2010-21-11'},
      ], //已办数据列表
      totalHaving:null,//总页数
    };
  },
  computed: {
  },
  methods: {
    //获取已办列表
   
    
    //上拉刷新事件
    async pullRefreshHaving() {
      this.arrHaving =[];
      this.pageNum = 1;
     
      this.$refs.mychild.reset();
      this.$toast('刷新成功');
    },
    //下拉加载事件
     async onLoadingHaving(){
      if (this.arrHaving.length<this.totalHaving) {
        this.pageNum++;
       
        this.$refs.mychild.loadingFalse();
      }
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/sass/tasksign/tasksignindex.scss";
</style>

