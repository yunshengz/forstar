export default [
  {
    path: '/account',
    name: 'AccountLayout',
    props: true,
    component: () => import('@/views/account-layout'),
    children: [
      {
        path: 'detail',
        name: 'AccountDetail',
        props: true,
        component: () => import('@/views/account-detail')
      },
      {
        path: 'edit',
        name: 'AccountEdit',
        props: true,
        component: () => import('@/views/account-edit')
      }
    ]
  },
  {
    path: '/account/login',
    name: 'AccountLogin',
    component: () => import('@/views/account-login')
  },
  {
    path: '/account/reg',
    name: 'AccountReg',
    component: () => import('@/views/account-reg'),
    props: () => {
      return {
        a: 1,
        b: 2
      }
    }
  }
]
