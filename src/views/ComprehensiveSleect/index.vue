<template>
  <div class="Upcoming">
    <headeres>
      <div class="home_title">综合查询</div>
    </headeres>
    <div class="Upcoming-content">
      <mySelect
        :arrSelect="arrHaving"
        :total="totalHaving"
        :isSelect='selectTrue'
        @pullRefresh="pullRefreshHaving"
        @onLoading="onLoadingHaving"
        ref="mychild"
      ></mySelect>
    </div>
  </div>
</template>
<script>
import mySelect from "@/components/Select.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    headeres: Header,
    mySelect,
  },
  created() {

  },
  data() {
    return {
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
      selectTrue:true,//综合查询进入
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

