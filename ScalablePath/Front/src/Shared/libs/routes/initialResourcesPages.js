import routes from './routes'

const initialResourcesPages = new Set([
  routes.dashboard,
  routes.menus,
  routes.products,
  routes.promotions,
  routes.coupons,
  routes.branches,
  routes.account,
])

export default initialResourcesPages
