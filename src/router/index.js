import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '到云后台系统', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '用户管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'user',
        name: 'Table',
        component: () => import('@/views/user/index'),
        meta: { title: '用户信息', icon: 'table' }
      },
      {
        path: 'authority',
        name: 'Tree',
        component: () => import('@/views/authority/index'),
        meta: { title: '角色权限管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'class',
        name: 'Form',
        component: () => import('@/views/class/index'),
        meta: { title: '课程管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '系统管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'order',
        component: () => import('@/views/nested/order/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '菜单管理' }
      },
      {
        path: 'dictionary',
        component: () => import('@/views/nested/dictionary/index'),
        name: 'Menu2',
        meta: { title: '数据字典管理' }
      },
      {
        path: 'structure',
        component: () => import('@/views/nested/structure/index'),
        name: 'Menu3',
        meta: { title: '组织结构管理' }
      },
      {
        path: 'parameter',
        component: () => import('@/views/nested/parameter/index'),
        name: 'Menu4',
        meta: { title: '系统参数管理' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
