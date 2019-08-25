const Layout = () => import(/* webpackChunkName: 'index' */ '../page/layout')

const staticRoute = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/error',
        component: () => import(/* webpackChunkName: 'error' */ '../page/error'),
        children: [
            {
                path: '401',
                component: () => import(/* webpackChunkName: 'error' */ '../page/error/401')
            },
            {
                path: '403',
                component: () => import(/* webpackChunkName: 'error' */ '../page/error/403')
            },
            {
                path: '404',
                component: () => import(/* webpackChunkName: 'error' */ '../page/error/404')
            },
            {
                path: '500',
                component: () => import(/* webpackChunkName: 'error' */ '../page/error/500')
            }
        ]
    },
    {
        path: '/login',
        name:"登录",
        component: () => import(/* webpackChunkName: 'login' */ '../page/login')
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                name:"首页",
                component: () => import(/* webpackChunkName: 'home' */ '../page/home'),
            }
        ]
    },
    {
      path:'/high',
       name:"高级功能",
      component:Layout,
      children:[
          {
              path:'database',
              name:"数据库表管理",
              component:()=>import('../page/high/database')
          }
      ]
    },
    {
        path:'/user',
        name:"系统功能",
        component:Layout,
        children:[
            {
                path:'us',
                name:"用户管理",
                component:()=>import('../page/user/us'),
            },
            {
                path:'role',
                name:"角色管理",
                component:()=>import('../page/user/role'),
            },
            {
                path:'menu',
                name:"菜单管理",
                component:()=>import('../page/user/menu'),
            },
            {
                path:'domain',
                name:"域名管理",
                component:()=>import('../page/user/domain'),
            }
        ]
    },
    {
        path:'/indent',
        name:"订单功能",
        component:Layout,
        children:[
            {
                path:'order',
                name:"订单管理",
                component:()=>import('../page/indent/order')
            },
            {
                path:'lead',
                name:"导入订单",
                component:()=>import('../page/indent/lead')
            },
            {
                path:'allot',
                name:"分配订单",
                component:()=>import('../page/indent/allot')
            }
        ]
    },
    {
        path:'/port',
        name:"接口管理",
        component:Layout,
        children:[
            {
                path:'fish',
                name:"飞鱼CRM",
                component:()=>import('../page/port/fish')
            },
            {
                path:'leaf',
                name:"枫叶",
                component:()=>import('../page/port/leaf')
            },
            {
                path:'help',
                name:"趣头条-自助建站",
                component:()=>import('../page/port/help')
            },
            {
                path:'hare',
                name:"趣头条-赤兔建站",
                component:()=>import('../page/port/hare')
            },
        ]
    },
    {
        path: '*',
        redirect: '/error/404'
    }
]

export default staticRoute
