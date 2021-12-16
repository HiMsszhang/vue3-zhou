<script>
import {reactive} from 'vue'

export default {
  setup() {
    const state = reactive({
      name: '周某',
      age: 25,
      wife: [{
        name: 'bigBro',
        age: 18
      }, {
        name: 'little three',
        age: 18,
      },
      ]
    },)

    function updateCount() {
      state.name = 'longcan'
      state.age = 26
      state.wife[0].age = 20
      state.wife[0].name = 'zhanglihua'
      state.wife[1].name = 'mounvren'
      state.wife[1].age = 22
    }

    return {
      state,
      updateCount
    }
  }
}
// defineProps<{ msg: string }>()


</script>

<template>
  <h1>{{ msg }}</h1>

  <!--  <p>-->
  <!--    Recommended IDE setup:-->
  <!--    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>-->
  <!--    +-->
  <!--    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>-->
  <!--  </p>-->

  <!--  <p>See <code>README.md</code> for more information.</p>-->

  <!--  <p>-->
  <!--    <a href="https://vitejs.dev/guide/features.html" target="_blank">-->
  <!--      Vite Docs-->
  <!--    </a>-->
  <!--    |-->
  <!--    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>-->
  <!--  </p>-->
  <h2>myName:{{ state.name }}</h2>
  <h2>myAge:{{ state.age }}</h2>
  <ol v-for="wife in state.wife">
    <li>myWifeName:{{ wife.name }}</li>
    <li>myWifeAge:{{ wife.age }}</li>
  </ol>


  <button type="button" @click="updateCount">更新</button>
  <!--  <p>-->
  <!--    Edit-->
  <!--    <code>components/HelloWorld.vue</code> to test hot module replacement.-->
  <!--  </p>-->
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
