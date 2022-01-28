import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c5412ec = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _692ee4c5 = () => interopDefault(import('../pages/contatti.vue' /* webpackChunkName: "pages/contatti" */))
const _49ad73c2 = () => interopDefault(import('../pages/piante.vue' /* webpackChunkName: "pages/piante" */))
const _77f874b4 = () => interopDefault(import('../pages/thanks.vue' /* webpackChunkName: "pages/thanks" */))
const _1bffe5ae = () => interopDefault(import('../pages/servizi/_uid.vue' /* webpackChunkName: "pages/servizi/_uid" */))
const _6a568437 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _8ccbb388 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _4c5412ec,
    name: "prismic-preview"
  }, {
    path: "/contatti/",
    component: _692ee4c5,
    pathToRegexpOptions: {"strict":true},
    name: "contatti"
  }, {
    path: "/piante/",
    component: _49ad73c2,
    pathToRegexpOptions: {"strict":true},
    name: "piante"
  }, {
    path: "/thanks/",
    component: _77f874b4,
    pathToRegexpOptions: {"strict":true},
    name: "thanks"
  }, {
    path: "/servizi/:uid?/",
    component: _1bffe5ae,
    pathToRegexpOptions: {"strict":true},
    name: "servizi-uid"
  }, {
    path: "/",
    component: _6a568437,
    pathToRegexpOptions: {"strict":true},
    name: "index"
  }, {
    path: "/:uid/",
    component: _8ccbb388,
    pathToRegexpOptions: {"strict":true},
    name: "uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
