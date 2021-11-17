import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AppIndex from '../components/home/AppIndex'
import Home from '../components/home/Home'
// import BarChart from '../components/chart/BarChart'
// import LineChart from '../components/chart/LineChart'
import DashBoard from '../components/dashBoard/DashBoard'
import UserInfo from '../components/user/UserInfo'
import UserDetail from '../components/user/UserDetail'
import ShowInfo from '../components/user/ShowInfo'
import HelloWorld from '../components/HelloWorld'
// import {param} from '../utils'
import 'element-ui/lib/theme-chalk/index.css'
import EditUserInfo from '../components/user/EditUserInfo'
import UserSexCount from '../components/user/UserSexCount'
import UserSexPieChart from '../components/countData/UserSexPieChart'
import IndexImg from '../components/home/IndexImg'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      hidden: true
    },
    {
      path: '/user/editUserInfo',
      name: '用户编辑',
      component: EditUserInfo,
      hidden: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/dashBoard/dashBoard',
      name: '数据统计',
      component: DashBoard,
      meta: {
        icon: 'el-icon-menu'
      },
      // redirect: '/index',
      children: [
        {
          path: '/user/userSexCount',
          name: '用户统计',
          component: UserSexCount,
          meta: {
            requireAuth: true
          },
        },
      ]
    },
    {
      path: '/dashBoard/dashBoard',
      name: '用户管理',
      component: DashBoard,
      show: true,
      meta: {
        icon: 'el-icon-s-custom'
      },
      // redirect: '/index',
      children: [
        {
          path: '/home/indexImg',
          name: '首页',
          component: IndexImg,
          hidden: true,
          meta: {
            requireAuth: true,
            icon: 'el-icon-user'
          },
        },
        {
          path: '/index',
          name: '首页',
          component: AppIndex,
          hidden: true,
          meta: {
            requireAuth: true,
            icon: 'el-icon-user'
          },
        },
        {
          path: '/user/userInfo',
          name: '用户信息',
          component: UserInfo,
          meta: {
            requireAuth: true,
            icon: 'el-icon-user'
          },
        },
        {
          path: '/user/userDetail',
          name: '添加用户',
          component: UserDetail,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/user/showInfo',
          name: '用户查询',
          component: ShowInfo,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
  ]
})
