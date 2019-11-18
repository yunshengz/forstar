import Layout from './views/layout'
import Login from './views/login'
import Register from './views/register'
export default [
  {
    path: '/account',
    name: 'AccountLayout',
    component: Layout,
    children: [
      {
        path: 'login',
        name: 'AccountLogin',
        component: Login
      },
      {
        path: 'register',
        name: 'AccountRegister',
        component: Register
      }
    ]
  }
]
