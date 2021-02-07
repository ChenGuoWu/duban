<template>
  <div class="nofind">
    <van-empty description="404找不到页面" />
  </div>
</template>
<script>
import { Empty } from 'vant';
export default {
  components:{
    "van-empty":Empty,
  },
  data() {
    return{
      
    }
  },
  computed: {
  },
};
</script>

