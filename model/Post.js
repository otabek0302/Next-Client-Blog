const { Schema, model } = require('mongoose')
const schema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  imgUrl: { type: String, required: true },
})

module.exports = model("Post", schema);

