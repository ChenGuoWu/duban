<template>
    <div class="loading">
         <van-loading size="44px" vertical>加载中...</van-loading>
    </div>
</template>
<script>
import { Loading } from 'vant';
export default {
    components:{
        'van-loading':Loading
    },
    name:'loading',
    data(){        
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
    .loading{
        height: 90%;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000000;
    }
</style>