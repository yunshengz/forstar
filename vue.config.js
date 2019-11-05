const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bodyParser = require('body-parser')
const lodashId = require('lodash-id')

const getSchema = () => {
  try {
    const file = require.resolve(
      path.resolve(__dirname, './mocks/db.schema.js')
    )
    delete require.cache[file]
    const schema = require(file) || {}
    return schema
  } catch (err) {
    return {}
  }
}
const getDb = () => {
  const dbFile = path.resolve(__dirname, './mocks/db.json')
  const adapter = new FileSync(dbFile)
  const db = low(adapter)
  db._.mixin(lodashId)
  return db
}
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // modifyVars: {
        //   'primary-color': '#1DA57A',
        //   'link-color': '#1DA57A',
        //   'border-radius-base': '2px'
        // },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    before(app) {
      const db = getDb()
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({ extended: true }))
      app.use(async (req, res, next) => {
        if (/^\/mocks\//i.test(req.path)) {
          try {
            const file = require.resolve(
              path.resolve(__dirname, `.${req.path}`)
            )
            delete require.cache[file]
            const func = require(file)
            const schema = getSchema()
            db.defaults(schema).write()
            const sleep = (timeout = 0) => {
              return new Promise(resolve => {
                setTimeout(resolve, timeout)
              })
            }
            await func({ req, res, db, sleep, next })
          } catch (err) {
            next(err)
          }
        } else {
          next()
        }
      })
    },
    host: '0.0.0.0',
    // port: 93,
    disableHostCheck: true
    // proxy: {
    // 设置代理
    // '/mock': {
    //   target: 'http://api.dev.westartrack.com:90/',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/mock': '/'
    //   }
    // }
    // }
  }
}
