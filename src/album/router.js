import AlbumLayout from './views/layout'
import AlbumCreate from './views/create'
import AlbumList from './views/list'
import AlubmsEdit from './views/edit'
export default [
  {
    path: '/album',
    component: AlbumLayout,
    children: [
      {
        path: 'create',
        name: 'AlbumCreate',
        component: AlbumCreate
      },
      {
        path: 'edit/:aid',
        name: 'AlbumEdit',
        component: AlubmsEdit,
        props: true
      },
      {
        path: 'list',
        name: 'AlbumList',
        component: AlbumList
      }
    ]
  }
]
