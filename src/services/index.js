import Ajax from '@/lib/ajax'
export const account = {
  reg: () => Ajax.create('/account/reg', 'POST'),
  login: () => Ajax.create('/account/login', 'post')
}
export const site = {
  create: () => Ajax.create('/site/create', 'POST')
}
