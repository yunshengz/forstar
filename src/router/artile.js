export default [
  {
    path: '/article/create',
    name: 'ArticleCreate',
    props: true,
    component: () => import('@/views/article-create')
  },
  {
    path: '/article/list',
    name: 'ArticleList',
    props: true,
    component: () => import('@/views/article-list')
  }
]
