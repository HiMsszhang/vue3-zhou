<template>
  <el-row class="content">
    <el-avatar :size="40"
               @click="jumpToUserinfo"
               :src='"https://p4.music.126.net/LPQL9qLQdO9ogNrhc8rxwA==/1364493989487332.jpg?param=80y80"'></el-avatar>
    <el-row class="username" @click="showUserinfo">
      <span>用户名</span>
      <svg class="icon" width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
           data-v-365b8594="" color="#666">
        <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
      </svg>
    </el-row>
  </el-row>

</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {
    const showUserinfo = (): void => {
          console.log('showUserinfo')
        },
        jumpToUserinfo = (): void => {
          console.log('to userinfo page')
        }
    return {
      showUserinfo,
      jumpToUserinfo
    }
  }
})
</script>
<style lang="scss">
.content {
  margin: 10px;
  align-items: center;
  color: #333;

  .username {
    margin-left: 10px;
    align-items: center;
    font-size: 14px;
  }
}
</style>
