var data = [
    {
        path: '/home',
        name: '首页'
    },
    {
        name: '高级功能',
        path:"/high",
        child:[
            {
                path:'/high/database',
                name:'数据库表管理'
            }
        ]
    },
    {
        name: '系统功能',
        path:"/user",
        child:[
            {
                path:'/user/us',
                name:'用户管理'
            },
            {
                path:'/user/menu',
                name:'角色管理'
            },
            {
                path:'/user/us',
                name:'菜单管理'
            },
            {
                path:'/user/domain',
                name:'域名管理'
            },
        ]
    },
    {
        name: '订单功能',
        path:"/indent",
        child:[
            {
                path:'/indent/order',
                name:'订单管理'
            },
            {
                path:'/indent/lead',
                name:'导入订单'
            },
            {
                path:'/indent/allot',
                name:'分配订单'
            }
        ]
    },
    {
        name: '接口管理',
        path:"/port",
        child:[
            {
                path:'/port/fish',
                name:'飞鱼CRM'
            },
            {
                path:'/port/leaf',
                name:'枫叶'
            },
            {
                path:'/port/help',
                name:'趣头条-自助建站'
            },
            {
                path:'/port/hare',
                name:'趣头条-赤兔建站'
            }
        ]
    },

]

export default [{
    path: '/user/navlist',
    data: data
}]
