<template>
  <div class="left-content">
    <div>
      <Userinfo/>
    </div>
    <el-scrollbar class="scrollbar-reset">
      <NavList/>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import NavList from './components/nav-list/index.vue'
import Userinfo from './components/userinfo/index.vue'
</script>

<style lang="scss" scoped>
.left-content {
  width: 100%;
  height: calc(100% - 70px);
  .scrollbar-reset {
    height: calc(100% - 50px);
  }
}
</style>
