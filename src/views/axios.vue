<template>
  <div class="common-layout">
<!--    <el-container>-->
<!--      <el-header>Header</el-header>-->
<!--      <div class="content">-->
<!--        <el-aside>-->
<!--          <div>dada</div>-->
<!--        </el-aside>-->
<!--        <el-main>good</el-main>-->
<!--      </div>-->
<!--      <el-container>-->
<!--        <el-footer>Footer</el-footer>-->
<!--      </el-container>-->

<!--    </el-container>-->
    <div class="el-header"></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import {defineComponent, PropType} from "vue";
</script>
<style>
.content {
  display: flex
}

.el-header,
.el-footer {
  background-color: indianred;
  /*color: var(--el-text-color-primary);*/
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  /*line-height: 750px;*/
  height: 750px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  /*margin-bottom: 40px;*/
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
