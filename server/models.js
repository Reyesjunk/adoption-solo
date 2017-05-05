const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const shelterSchema = mongoose.Schema({
  name: {type:String, required: true},
  email: {type:String, required: true, unique: true},
  password: {type:String, required: true},
  street: {type:String, required: true},
  city: {type:String, required: true},
  state: {type:String, required: true},
  zipcode: {type:String, required: true},
  animalCount: {type: Number},
  animals: [{
    type: {type:String},
    name: {type:String},
    age: {type: String},
    status: {type: String},
    additionalInfo: {type: String}

  }]

})

shelterSchema.statics.hashPassword = function(password){
  return bcrypt.hash(password, 10)
}

shelterSchema.virtual('addressString').get(function() {`${this.street} ${this.city} ${this.state} ${this.zipcode}`.trim()})

shelterSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password)
}

shelterSchema.methods.apiRepr = function() {
  return {
    id: this.id,
    name: this.name,
    address: this.addressString,
    type: this.type,
    email: this.email,
    animals: this.animals
  }
}


const Shelter = mongoose.model('shelters', shelterSchema)

module.exports = {Shelter}