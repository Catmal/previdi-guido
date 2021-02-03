import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b608db1 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _67ae84c4 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2d10a70c = () => interopDefault(import('../pages/services/_uid.vue' /* webpackChunkName: "pages/services/_uid" */))
const _bc1f2988 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7954ca97 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _0b608db1,
    name: "prismic-preview"
  }, {
    path: "/inspire",
    component: _67ae84c4,
    name: "inspire"
  }, {
    path: "/services/:uid?",
    component: _2d10a70c,
    name: "services-uid"
  }, {
    path: "/",
    component: _bc1f2988,
    name: "index"
  }, {
    path: "/:uid",
    component: _7954ca97,
    name: "uid"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
