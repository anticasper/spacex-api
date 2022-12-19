const axios = require('axios')
const baseApiUrl = 'https://api.spacexdata.com/v4'

const getGeneric = async (route) => {
  return await axios.get(route).catch((err) => {
    return {
      error: {
        code: err.code,
        message: err.message,
      },
    }
  })
}

const getLastLaunch = async () => {
  const url = `${baseApiUrl}/launches/latest`
  return await getGeneric(url)
}

const getPastLaunch = async () => {
  const url = `${baseApiUrl}/launches/past`
  return await getGeneric(url)
}

const getNextLaunch = async () => {
  const url = `${baseApiUrl}/launches/next`
  return await getGeneric(url)
}

const getUpcommingLaunch = async () => {
  const url = `${baseApiUrl}/launches/upcoming`
  return await getGeneric(url)
}

module.exports = { getLastLaunch, getPastLaunch, getNextLaunch, getUpcommingLaunch }
