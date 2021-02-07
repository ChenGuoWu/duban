import Vue from "vue";
import VueRouter from "vue-router";
// import store from '@/store/index.js'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("@/views/Home.vue"),
    meta: {
      tittle: '首页'
    }
  },
  {
    path: "/taskSign",
    name: "TaskSign",
    component: () =>
      import("@/views/TaskSign"),
    meta: {
      tittle: '任务签收首页',
      search:true,//带搜索框
      path:'taskSignDetail',//跳转详情地址
    }
  },
  {
    path: "/taskSignDetail",
    name: "TaskSignDetail",
    component: () =>
      import("@/views/TaskSign/TaskSignDetail"),
    meta: {
      tittle: '任务签收详情',
      
    }
  },
  {
    path: "/taskReminder",
    name: "TaskReminder",
    component: () =>
      import("@/views/TaskReminder"),
    meta: {
      tittle: '任务催办首页',
      
    }
  },
  {
    path: "/taskFillIn",
    name: "TaskFillIn",
    component: () =>
      import("@/views/TaskFillIn"),
    meta: {
      tittle: '任务填报首页',
      search:true,
      path:'taskFillInDetail'
    }
  },
  {
    path: "/taskFillInDetail",
    name: "TaskFillInDetail",
    component: () =>
      import("@/views/TaskFillIn/TaskFillInDetail"),
    meta: {
      tittle: '任务填报详情',
   
    }
  },
  {
    path: "/haveFinished",
    name: "HaveFinished",
    component: () =>
      import("@/views/HaveFinished"),
    meta: {
      tittle: '已办结首页',
   
    }
  },
  {
    path: "/comprehensiveSleect",
    name: "ComprehensiveSleect",
    component: () =>
      import("@/views/ComprehensiveSleect"),
    meta: {
      tittle: '综合事务查询首页',
      path:'comprehensiveSleectDetail'
    }
  },
  {
    path: "/comprehensiveSleectDetail",
    name: "ComprehensiveSleectDetail",
    component: () =>
      import("@/views/ComprehensiveSleect/ComprehensiveSleectDetail"),
    meta: {
      tittle: '综合事务查询详情',
    }
  },
  {
    path: "/processView",
    name: "ProcessView",
    component: () =>
      import("@/components/ProcessView.vue"),
    meta: {
      tittle: '流程跟踪'
    }
  },
  {
    path: "*",
    component: () =>
      import("@/views/Not.vue"),
    meta: {
      tittle: '404'
    }
  }
];
const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
});
// router.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem('userToken')) {
//     // 如果用户在登录页面
//     next();
//   } else {
//     if (to.name === 'Home') {
//       next();
//     } else {
//       next({ path: '/' })
//     }
//   }
// })
//解决from  home  to  ligin的 报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default router;
