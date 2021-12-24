<template>
  <el-row class="opt-content">
    <svg class="icon" width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
         data-v-365b8594=""
         @click="routerBack"
         color="#fff">
      <path fill="currentColor"
            d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
    </svg>
    <svg class="icon" width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
         data-v-365b8594=""
         @click="routerGo"
         color="#fff">
      <path fill="currentColor"
            d="M338.752 104.704a64 64 0 000 90.496l316.8 316.8-316.8 316.8a64 64 0 0090.496 90.496l362.048-362.048a64 64 0 000-90.496L429.248 104.704a64 64 0 00-90.496 0z"></path>
    </svg>
  </el-row>
</template>
<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import {useRouter, useRoute} from "vue-router"
import {Calendar, Search} from '@element-plus/icons-vue'

export default defineComponent({
  setup() {

   // const iconColor=computed(()=>{
   //
   // })
    const router = useRouter();
    const routerGo = () => {
      router.go(1)
    };
    const routerBack = () => {
      router.back()
    };
    return{
      routerGo,
      routerBack
    }
  }
})
</script>
<style lang="scss">
.opt-content {
  margin-left: 10px;
  margin-top: 10px;
  .icon{
    cursor:pointer;
  }
}
</style>
