<template>

  <el-scrollbar>
    <el-carousel :interval="5000" type="card" height="200px" class="banner-wrap">
      <el-carousel-item v-for="banner in state.bannerList" :key="banner.targetId">
        <div class="banner-img">
          <img :src="`${banner.imageUrl}?param=540y200`">
          <span :style="{backgroundColor: banner.titleColor}">{{ banner.typeTitle }}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-scrollbar>

  <!--    <ul v-for="(image,index) in bannerList">-->
  <!--      <li><img src="image.imageUrl"></li>-->
  <!--    </ul>-->

</template>
<script lang="ts">
import axios from "../../../../../../../utils/axios";
import {ref, computed, reactive, toRefs} from "vue";
import {BannerDetail} from "./interface";

export default {
  setup() {
    const state = reactive({
      bannerList: [] as BannerDetail[],
    })
    const getBanner = () => {
      axios.get('/banner').then(res => {
        console.log(res)
        state.bannerList = res.data.banners.map(((item: BannerDetail) => ({
          imageUrl: item.imageUrl,
          targetId: item.targetId,
          titleColor: item.titleColor,
          typeTitle: item.typeTitle,
          targetType: item.targetType,
          encodeId: item.encodeId,
          exclusive: item.exclusive,
          scm: item.scm,
        })))
      })
    }
    getBanner()
    return {
      getBanner,
      state
    }
  }
}

// bannerList.value = computed(() => axios.get('/banner').then(res => {
//   console.log(res)
//   // bannerList.value = res.data.banners;
//   // return JSON.parse(res.data.)
//
// }))

</script>
<style lang="scss" scoped>
.banner-wrap {
  margin: 20px;
  border-radius: 10px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.banner-img {
  width: 100%;
  height: 100%;
  display: flex;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  & > span {
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    right: 0;
    bottom: 0;
    color: white;
    padding: 4px 8px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 999;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
