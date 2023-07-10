const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))

app.get('/', (request, response) => {
  response.send('This is simple server')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
//docker image build -t myimage .
//docker container run -itd --name myhttpd -p 9001:80 httpd