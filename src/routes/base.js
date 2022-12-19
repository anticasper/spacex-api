const route = '/launch'
const api = require('../api/base')

module.exports = (router) => {
  router.route(`${route}/last`).get(api.getLastLaunch)
  router.route(`${route}/next`).get(api.getNextLaunch)
  router.route(`${route}/history`).get(api.getPastLaunch)
  router.route(`${route}/upcomming`).get(api.getUpcommingLaunch)
}
