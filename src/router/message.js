export default [
  {
    path: '/message',
    name: 'MessageLayout',
    props: true,
    component: () => import('@/views/message-layout'),
    children: [
      {
        path: 'socket',
        name: 'MessageSocket',
        props: true,
        component: () => import('@/views/message-socket')
      }
    ]
  }
]
