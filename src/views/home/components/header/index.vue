<template>
  <div class="el-header">
    <el-row>
      <el-col :span="4">
        <div>good</div>
      </el-col>
      <el-col :span="16">
        <div>
        <header-navs v-if='showNavs'/>
        </div>
        <!--        <div class="tab-nav">-->
        <!--          -->
        <!--        </div>-->
      </el-col>

    </el-row>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, watch, ref,ComputedRef} from "vue"
import headerNavs from './header-nav/index.vue'
import {useRoute} from "vue-router";

export default defineComponent({
  components: {
    headerNavs
  },
  setup() {
    const route = useRoute()
    const isShow = ref(true)
    const showNavRouteNames = [
      'PersonalRecommendation',
      'SongList',
      'AnchorStation',
      'Leaderboard',
      'Singer',
      'LatestMusic',
      'SystemNotification'
    ]

    // const currentRouteName = computed(() => {
    //   console.log(route.name)
    //   return route.name
    // });

    const showNavs = computed(() => {
          debugger
          console.log(route.name, showNavRouteNames.includes(route.name))
          return showNavRouteNames.includes(route.name)
        }
    );
    return {
      showNavs,
    }
  }

})
</script>
<style lang="scss">
.el-header {
  background-color: indianred;
  /*color: var(--el-text-color-primary);*/
  text-align: center;
  line-height: 60px;
}
</style>
