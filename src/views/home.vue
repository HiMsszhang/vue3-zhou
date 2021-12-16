<template>

  <h1 :style="{backgroundColor:titleInfo.color}">
    {{ titleInfo.value }}
  </h1>
  <input type="text" v-model="todoName" @keydown.enter="newTodo(addTodo(todoName))">
  <div v-for="item in items" :key="item.id">
    <div v-if="!item.completed" @click="onTap(item.id)">
      <div>{{ item.id }}</div>
      <div>{{ item.name }}</div>
    </div>
  </div>
  <button @click="jumpToAxios">Axios</button>
</template>
<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import {TitleInfo, Todo} from "../types";
import {useRouter, RouteLocationOptions} from 'vue-router'
import router from "../router";


export default defineComponent({
  setup() {
    const router: Router = useRouter()
    let counter: number = ref(1),
        items: Todo[] = ref([
          {id: 1, name: 'vue', completed: false,},
          {id: 2, name: 'vue2', completed: false,},
          {id: 3, name: 'vue3', completed: false,},
        ]),
        todoName: string = ref(''),
        titleInfo: TitleInfo = ref({
          value: '整理',
          color: 'green',
        }),
        onTap = (id: number): void => {},
        newTodo = () => {},
        addTodo = () => {},
        jumpToAxios = () => {
          console.log('跳转到Axios')
          router.push({
            name: 'axios',
          } as RouteLocationOptions)
        }
    return {
      counter,
      items,
      todoName,
      titleInfo,
      onTap,
      newTodo,
      addTodo,
      jumpToAxios
    }
  }
})
</script>
