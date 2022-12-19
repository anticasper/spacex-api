const controller = require('../integration/spacex')

const getLastLaunch = async (req, res) => {
  const raw = await controller.getLastLaunch()
  if (raw.data) {
    return res.status(200).send(raw.data)
  }
  return res.status(302).send(raw.error)
}

const getPastLaunch = async () => {
  const raw = await controller.getPastLaunch()
  if (raw.data) {
    return res.status(200).send(raw.data)
  }
  return res.status(302).send(raw.error)
}

const getNextLaunch = async () => {
  const raw = await controller.getNextLaunch()
  if (raw.data) {
    return res.status(200).send(raw.data)
  }
  return res.status(302).send(raw.error)
}

const getUpcommingLaunch = async () => {
  const raw = await controller.getUpcommingLaunch()
  if (raw.data) {
    return res.status(200).send(raw.data)
  }
  return res.status(302).send(raw.error)
}

module.exports = { getLastLaunch, getPastLaunch, getNextLaunch, getUpcommingLaunch }
