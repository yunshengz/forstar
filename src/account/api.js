import { Ajax } from './imports'
export const login = () => Ajax.create('/account/login', 'post')
export const register = () => Ajax.create('/account/register', 'post')
export const getUserinfo = () => Ajax.create('/account/profile', 'get')
export const logout = () => Ajax.create('/account/logout', 'get')
