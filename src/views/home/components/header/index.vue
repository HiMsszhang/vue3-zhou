<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <opt></opt>
      </el-col>
      <el-col v-show='showNavs' :span="16">
        <header-navs/>
      </el-col>
    </el-row>
    <Search/>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, watch, ref, ComputedRef} from "vue"
import headerNavs from './header-nav/index.vue'
import Opt from './opt/index.vue'
import Search from './search/index.vue'
import {useRoute} from "vue-router";

export default defineComponent({
  components: {
    headerNavs,
    Opt,
    Search
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
.header {
  background-color: indianred;
  //text-align: center;
  //align-items: center;
  //vertical-align:middle;
  height: 50px;
  position: relative;
}
</style>
