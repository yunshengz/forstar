import Ajax from './lib/ajax'
export const login = () => Ajax.create('/account/login', 'post')
export const register = () => Ajax.create('/account/register', 'post')
export const getUserinfo = () => Ajax.create('/account/profile', 'get')
export const logout = () => Ajax.create('/account/logout', 'get')

export const createAlbum = () => Ajax.create('/album/create', 'post')
export const getAlbumDetail = () => Ajax.create('/album/detail', 'get')
export const listAlbum = () => Ajax.create('/album/list', 'get')
export const deleteAlbum = () => Ajax.create('/album/delete', 'get')
export const editAlbum = () => Ajax.create('/album/update', 'post')
