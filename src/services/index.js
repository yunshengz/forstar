import Ajax from '@/lib/ajax'
export const account = {
  reg: () =>
    Ajax.create('/account/reg', 'POST').on('netSuccess', function() {
      console.log('res!')
    }),
  login: () => Ajax.create('/account/login', 'post')
}
export const site = {
  create: () => Ajax.create('/site/create', 'POST')
}
