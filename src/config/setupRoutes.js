const { Router } = require('express')
const fg = require('fast-glob')

module.exports = async (app) => {
  const router = Router()
  app.use(router)

  const destiny = '**/src/routes/**.js'

  await fg.sync(destiny).map(async (file) => {
    const route = await require(`../../${file}`)
    route(router)
  })

  router.route('/ping').all((req, res) => {
    res.status(200).send('Pong')
  })

  router.route('*').all((req, res) => {
    console.log(`Chamada Inválida - ${req.method} em ${req.path}`)
    res.sendStatus('404')
  })
}
