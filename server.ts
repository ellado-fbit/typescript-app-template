import express from 'express'

const app = express()
const port = 3000

app.get('/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`)
})

app.listen(port, () => { console.log(`Server running on port ${port}`) } )
