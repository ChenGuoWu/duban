<template>
  <div>
    <van-dialog
      class="dialog"
      v-model="treeDialog"
      :title="treetitle"
      show-cancel-button
      :beforeClose="chargeBtn"
    >
      <el-tree
        :data="treedata"
        ref="treeRef"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[1]"
        :props="defaultProps"
        check-on-click-node
      ></el-tree>
    </van-dialog>
  </div>
</template>
<script>
import { Dialog } from "vant";
import {Tree} from 'element-ui';
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
    "el-tree":Tree,
  },
  props: {
    treetitle: {
      type: String,
      default: "",
    },
    treedata: {
      type: Array,
      default: () => [],
    },
    //控制弹框显示的开关变量
    flagTree: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  computed: {
    treeDialog: {
      get: function () {
        return this.flagTree;
      },
      set: function () {
        //点击取消需要修改变量父组件传来的
        this.$emit("initFalse");
      },
    },
  },
  watch: {},
  methods: {
    //弹出框
    chargeBtn(action, done) {
      if (action === "cancel") {
        //取消按钮
        done();
      } else if (action === "confirm") {
        //取消全选的勾勾数据
        let treeList = this.$refs.treeRef.getCheckedNodes().filter(item=>{
          return item.children==undefined;
        });
        if (treeList.length != 1) {
          this.$toast("请选择一位");
          return done(false);
        }
        //赋值给页面
        this.$emit('confirm',treeList[0])
        done();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/tree.scss";
</style>
