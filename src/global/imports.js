export { AuthDialog } from '@/account'

import { store as homepage, router as homepageRouter } from '@/homepage'
import { store as account, router as accountRouter } from '@/account'
import { store as album, router as albumRouter } from '@/album'

export const routes = [...homepageRouter, ...accountRouter, ...albumRouter]
export const storeModules = {
  homepage,
  account,
  album
}
