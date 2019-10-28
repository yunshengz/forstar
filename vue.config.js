const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
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
      app.use(async (req, res, next) => {
        if (/^\/mocks\//i.test(req.path)) {
          try {
            const mod = req.path.split('/')[2]
            const jsType = /\.js$/.test(req.path) ? '' : '.js'
            const file = path.resolve(__dirname, `.${req.path}${jsType}`)
            delete require.cache[file]
            const func = require(file)
            const getDb = mod => {
              const adapter = new FileSync(
                path.resolve(__dirname, './db', `${mod}.json`)
              )
              const db = low(adapter)
              return db
            }
            const db = getDb(mod)
            const sleep = (timeout = 0) => {
              return new Promise(resolve => {
                setTimeout(resolve, timeout)
              })
            }
            await func({ req, res, db, sleep, next, getDb })
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
