// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

// const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  version: '/v0',
  config: {
    databaseURL: 'https://www.yy.com'
  }
})

if (api.onServer) {
  warmCache()
}
