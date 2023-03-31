import MenuOne from '@/views/MenuOne'
import MenuTwo from '@/views/MenuTwo'
import MenuTh3 from '@/views/MenuTh3'
import MenuTh4 from '@/views/MenuTh4'
import MenuTh5 from '@/views/MenuTh5'
import MenuTh6 from '@/views/MenuTh6'
import MenuTh7 from '@/views/MenuTh7'
// import MenuTh8 from '@/views/MenuTh8'
const rou = [
  {
    path: 'm1',
    name: 's1',
    component: MenuTh6,
    meta: {
      name: '订单管理',
      icon: 'example'
    },
    children: [
      {
        path: 'menuone',
        component: MenuOne,
        name: 's2',
        meta: {
          name: '工作台',
          icon: 'table'
        }
      },
      {
        path: 'menutwo',
        component: MenuTwo,
        name: 's3',
        meta: {
          name: '分析页',
          icon: 'table'
        }
      },
      {
        path: 'menu3',
        component: MenuTh3,
        name: 's4',
        meta: {
          name: '订单列表3',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: 'm2',
    name: 's5',
    component: MenuTh7,
    meta: {
      name: '产品管理',
      icon: 'user'
    },
    children: [
      {
        path: 'menu4',
        component: MenuTh4,
        name: 's6',
        meta: {
          name: '订单列表4',
          icon: 'table'
        }
      },
      {
        path: 'menu5',
        component: MenuTh5,
        name: 's7',
        meta: {
          name: '订单列表5',
          icon: 'table'
        }
      },
      {
        path: 'menu6',
        component: MenuTh6,
        name: 's8',
        meta: {
          name: '订单列表6',
          icon: 'table'
        }
      }
    ]
  }
  // ,
  // {
  //   path: '/m3',
  //   name: 's9',
  //   meta: {
  //     name: '产品管理998',
  //     icon: 'user'
  //   },
  //   children: [
  //     {
  //       path: '/menu7',
  //       component: MenuTh7,
  //       name: 's10',
  //       meta: {
  //         name: '订单列表7',
  //         icon: 'table'
  //       }
  //     },
  //     {
  //       path: '/menu8',
  //       component: MenuTh8,
  //       name: 's11',
  //       meta: {
  //         name: '订单列表8',
  //         icon: 'table'
  //       }
  //     }
  //   ]
  // }
]

export default rou
