import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus';//为vue3项目特别更新的版本
import 'element-plus/dist/index.css';

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
