import express, { response } from 'express'

const app = express()

app.get('/test', (request, response) => {
  response.send("It's all good, man! 🤟🏾")
})

app.get('/', (request, response) => response.send('Welcome to ur first API'))

app.get('/error', (request, response) => {
response
.status(500)
.send({message:'Something went wrong', success: false})
})
app.listen(3030, () => console.log('Listening on http://localhost:3030...'))
