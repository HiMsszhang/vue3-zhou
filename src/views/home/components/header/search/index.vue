<template>
  <div class="demo-input-suffix">
    <el-row>
      <el-input
          v-model="input2"
          placeholder="搜索"
          clearable
          :prefix-icon="Search"
      />
    </el-row>
  </div>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import {Search} from '@element-plus/icons-vue'

const input2 = ref('')

</script>
<style lang="scss">
.demo-input-suffix {
  position: absolute;
  right: 30px;
  top: 15px;
  .el-input__inner{
    width: 150px;
    height: 20px;
    border-radius: 20px;
    background: #fff;
    border: none;
    font-size: 8px;
    color: #000;
  }
  .el-icon {
    text-align: center;
    display: inline-block;
    position: relative;
    fill: currentColor;
    color: black;
    font-size: inherit;
  }
}
</style>
