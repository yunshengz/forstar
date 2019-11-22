import { Ajax } from './imports'
export const createAlbum = () => Ajax.create('/album/create', 'post')
export const getAlbumDetail = () => Ajax.create('/album/detail', 'get')
export const listAlbum = () => Ajax.create('/album/list', 'get')
export const deleteAlbum = () => Ajax.create('/album/delete', 'get')
export const editAlbum = () => Ajax.create('/album/update', 'post')
