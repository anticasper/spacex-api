const app = require('./app')

const port = 4000
const enviromnent = 'Dev'

app.listen(port, () => {
  console.log(`Server Up - Port: ${port}  - Env: ${enviromnent}`)
})
