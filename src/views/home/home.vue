<template>
  <div id="content">
    <el-row class="wrapper">
      <el-col class="left-content-wrapper" :span="4">
        <!-- left-content -->
        <left-content></left-content>
      </el-col>
      <el-col class="right-content-wrapper" :span="20">
        <!-- main-content -->
        <main-content></main-content>
      </el-col>
    </el-row>
  </div>
  <!-- footer -->
  <!-- 歌曲详情组件 -->
  <!--  <song-detail />-->
  <!-- 播放器组件 -->
  <music-player/>
</template>

<script lang="ts" setup>
import LeftContent from "./components/left-content/index.vue";
import MainContent from "./components/main-content/index.vue";
import MusicPlayer from "./components/music-player/index.vue";
// import { computed, defineComponent, onMounted } from "vue";
// export default defineComponent({
//   // name: "Home",
//   // components: {
//   //   LeftContent,
//   //   MainContent,
//   //   "mp-player": MusicPlayer,
//   //   // "song-detail": SongDetail
//   // },
//   // setup(){
//   //
//   // }
// })
</script>

<style lang="scss" scoped>
#content {
  width: 100%;
  height: calc(100% - 50px);

  .wrapper {
    height: 100%;

    .left-content-wrapper {
      height: 100%;
      background-color: #ededed;
      border-bottom-left-radius: 8px;
    }

    .right-content-wrapper {
      height: 100%;
    }
  }
}
</style>
