import Ajax from '@/lib/ajax'
export const createArticle = () => {
  return Ajax.create('/article/create', 'post').on('netSuccess', function(
    data
  ) {
    console.log(data)
  })
}

export const listArticle = () => {
  return Ajax.create('/article/list', 'get')
}
