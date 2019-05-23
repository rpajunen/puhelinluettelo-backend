const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())

morgan.token('body', (req) => JSON.stringify(req.body))

app.use(bodyParser.json())
app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Martti Tienari",
    "number": "040-123456",
    "id": 2
  },
  {
    "name": "Arto Järvinen",
    "number": "040-123456",
    "id": 3
  },
  {
    "name": "Martti Tienari",
    "number": "040-123456",
    "id": 4
  }
]

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.get('/info', (req, res) => {
  res.send(`<div><p>Puhelinluettelossa on ${persons.length} henkilon tiedot</p><p>${new Date()}</p></div>`)
})

app.get('/persons', (req, res) => {
  res.json(persons)
})

app.get('/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) res.json(person)
  else res.status(404).end()
})

app.delete('/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
  } else {
    res.status(404).end()
  }
})

app.post('/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return res.status(404).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  res.json(person)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})