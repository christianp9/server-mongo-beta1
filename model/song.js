const Db = require('../config/mongoose')

const Song_model = Db.Schema({
  name: {
    type: String
  },
  img: {
    type: String
  },
  img2: {
    type: String
  },
  des: {
    type: String
  }
})

module.exports = Db.model('Song', Song_model)