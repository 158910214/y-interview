import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'

Vue.use(Router)

const base = 'interview'

export default new Router({
  mode: process.env.NODE_ENV === 'development' ? 'history' : 'hash',
  base,
  routes
})
