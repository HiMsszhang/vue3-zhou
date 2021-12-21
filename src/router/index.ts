import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'
import Home from '../views/home/home.vue'
import Vuex from '../views/vuex.vue'
import Axios from "../views/axios.vue";

/**
 * 实现路由懒加载的工具函数
 * @param {string} viewPath  view的相对路径，相对于src目录
 */
// export function lazyLoad(viewPath: string) {
//     const modules = import.meta.glob("../views/**/*.vue");
//     return modules[`../views/${viewPath}.vue`];
// }
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path:'/',
                name:'PersonalRecommendation',
                component:()=>import('../views/home/components/main-content/components/views/personal_recommendation/index.vue'),
            },
            {
                path:'/videoList',
                name:'VideoList',
                component:()=>import('../views/home/components/main-content/components/views/video-list/index.vue'),
            },{
                path:'/songList',
                name:'SongList',
                component:()=>import('../views/home/components/main-content/components/views/song-list/index.vue'),
            },{
                path:'/anchorStation',
                name:'AnchorStation',
                component:()=>import('../views/home/components/main-content/components/views/anchor-station/index.vue'),
            },{
                path:'/leaderboard',
                name:'Leaderboard',
                component:()=>import('../views/home/components/main-content/components/views/leader-board/index.vue'),
            },{
                path:'/singer',
                name:'Singer',
                component:()=>import('../views/home/components/main-content/components/views/singer/index.vue'),
            },{
                path:'/latestMusic',
                name:'LatestMusic',
                component:()=>import('../views/home/components/main-content/components/views/later-music/index.vue'),
            },{
                path:'/systemNotification',
                name:'SystemNotification',
                component:()=>import('../views/home/components/main-content/components/views/system-notification/index.vue'),
            },
        ] as Array<RouteRecordRaw>
    },
    {
        path: '/axios',
        name: 'axios',
        component: Axios/*import('../views/axios.vue')*/ // 懒加载组件
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
