<template>
  <div class="pdf">
    <headeres><div class="home_title">用车管理</div></headeres>
    <iframe :src="pdfUrl" id="iframe"></iframe>  
  </div>
</template>
<script>
// import { viewUrl } from "@/api/api";
import headeres from './Header.vue'
export default {
  name: "Pdf",

  data() {
    return {
      pdfUrl: "",
    };
  },
  mounted() {
    // this.getInstanceDetailapi();
  },
  components: {
            headeres: headeres,
        },
  methods: {
    // getInstanceDetailapi() {
    //     this.pdfUrl = viewUrl(this.$route.params.instanceId)
    // }
  }
};
</script>
<style scope>
.pdf{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #iframe{
    width: 100%;
    flex: 1;
    overflow: auto;
    border: none!important;
  }
</style>
