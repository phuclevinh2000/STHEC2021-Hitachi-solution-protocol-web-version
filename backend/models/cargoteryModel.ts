import mongoose from "mongoose"

const cargoterySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Cargotery = mongoose.model('Cargotery', cargoterySchema)

export default Cargotery