const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)

  let result = login(req.body.username, req.body.password)

  res.send(result)
})

app.get('/', (req, res) => {
  res.send('Hello UTeM')
})

app.get('/bye', (req, res) => {
  res.send('Bye Bye UTeM !')
})

app.get('/reg', (req, res) => {
  res.send('Assalamualaikum K')
})


app.post('/register',(req, res)=> {

  let result = register(
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email
  )
  res.send(result)
})

function login(reqUsername, reqPassword) {
  let matchUser = dbUsers.find(
      user => user.username == reqUsername      //=> what to do with user
  )
  if (!matchUser) return "User not found!"
  if (matchUser.password == reqPassword) {
      return matchUser
  } 
  else
  {
      return "Invalid password"
  }
  }

  function register(reqUsername, reqPassword, reqName, reqEmail)
   {
      dbUsers.push({
          username: reqUsername,
          password: reqPassword,
          name: reqName,
          email: reqEmail
      })
  }

  let dbUsers = [
    {
        username: "hazim",
        password: "123456",
        name: "zim",
        email: "hazim00@gmail.com"
    },
    {
        username: "firdaus",
        password: "654321",
        name: "Firdaus",
        email: "firdaus2210@gmail.com"
    },
    {
        username: "afnan",
        password: "7890",
        name: "afnan",
        email: "afnan76@gmail.com"
    }
]

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})