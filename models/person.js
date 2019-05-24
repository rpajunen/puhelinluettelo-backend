const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)

// eslint-disable-next-line
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 3 },
  number: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => {
        return /[0-9]{8}/.test(v)
      },
      message: props => `Number entered (${props.value}) should be at least 8 digits long.`
    },
  },
  id: Number
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)