import { store as homepage, router as homepageRouter } from '../homepage'
import { store as account, router as accountRouter } from '../account'
import { store as album, router as albumRouter } from '../album'

export { AuthDialog, authError } from '../account'

export const routes = [...homepageRouter, ...accountRouter, ...albumRouter]
export const modules = {
  homepage,
  account,
  album
}
