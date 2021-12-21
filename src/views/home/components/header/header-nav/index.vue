<template>
  <div>
    <el-row>
      <el-row v-for="(tab,index) in navs" :key="index">
        <div class="nav"
             :class="[tab.active?'active':'nav']"
             @click="jumpToPage(tab.url,index)">
          {{ tab.text }}
        </div>
      </el-row>
    </el-row>
  </div>
  <!--  <ul class="navbar" v-for="{tab} in tabList" :key="tab.name">-->
  <!--    <li @click="jumpToPage(tab.url)">-->
  <!--      {{ tab.name }}-->
  <!--    </li>-->
  <!--  </ul>-->


</template>

<script lang="ts">
import {reactive, defineComponent, watch, onMounted,toRefs} from 'vue'
import {useRouter, useRoute} from "vue-router";
import {Nav} from "../../../../../types";

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      navs: [
        { text: "个性推荐", url: "/", active: true },
        { text: "歌单", url: "/songList", active: false },
        { text: "主播电台", url: "/anchorStation", active: false },
        { text: "排行榜", url: "/leaderboard", active: false },
        { text: "歌手", url: "/singer", active: false },
        { text: "最新音乐", url: "/latestMusic", active: false },
        { text: "系统通知", url: "/systemNotification", active: false },
      ] as Array<Nav>,
    });
    watch(route,
        ({path}) => {
          debugger
          state.navs = state.navs.map((item) => ({
            ...item,
            active: item.url === path,
          }));
          console.log(state,111)
        },
        {
          immediate: true,
          deep: true
        }
    );
    /**
     * 点击nav高亮当前nav并跳转到指定的路由
     */
    const jumpToPage = (url: string, index: number) => {
      state.navs = state.navs.map((nav, idx) => ({
        ...nav,
        active: idx === index,
      }));
      router.push(url);
    };
    onMounted(() => {
      state.navs = state.navs.map((item) => ({
        ...item,
        active: item.url === route.path,
      }));
    });


    return {
      ...toRefs(state),
      // tabList,
      jumpToPage
    }
  }
})
</script>

<style lang="scss" scoped>
.nav {
  display: inline-flex;
  //align-items: center;
  margin-right: 28px;
  color: gray;
  line-height: 60px;
  Vertical-Align: middle;
  font-size: 14px;
  height: 100%;
  margin-left: 25px;
  cursor: pointer;

  &:hover {
    color: #000;
    font-weight: bolder;
  }
}

.active {
  color: #000;
  font-weight: bolder;
}

//.navbar {
//  display: flex;
//  align-items: center;
//  list-style: none;
//  height: 100%;
//  line-height: 100%;
//  margin-left: 30px;
//

//}
</style>
