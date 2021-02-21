export { default as Card } from '../../components/Card.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
