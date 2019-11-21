const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bodyParser = require('body-parser')
const lodashId = require('lodash-id')
const cookieParser = require('cookie-parser')

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
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: () => {
    return {
      entry: {
        app: path.resolve('./src/global/app.js')
      },
      resolve: {
        plugins: [
          new DirectoryNamedWebpackPlugin({
            exclude: /node_modules/
          })
        ]
      }
    }
  },
  devServer: {
    before(app) {
      const db = getDb()
      app.use(cookieParser())
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
  }
}
