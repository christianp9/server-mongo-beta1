//ultima version de js
'use strict'


let arr = [
  { name: 'X&Y', img: 'https://spreadingthesoundblog.files.wordpress.com/2015/04/616216_700x700min_1.jpg', des: 'X&Y' }, //el mismo
  { name: 'Amsterdam', img: 'https://www.elquintobeatle.com/wp-content/uploads/2017/08/coldplay-a-rush-of-blood-to-the-head-1.jpg', des: 'rush & blood to the head' }, // rush & blood to the head
  { name: 'Paradise', img: 'https://http2.mlstatic.com/coldplay-mylo-xyloto-cd-D_NQ_NP_979836-MLA26263069274_102017-F.jpg', des: 'Mylo Xyloto' } // Mylo Xyloto
];

const db_song = require('../model/song')


exports.render_song = (req, res) => {

  db_song.find({}, (err, data) => {
    console.log(data)
    res.render(
      'index.ejs',
      {
        arr: data
      }
    )
  })
}

exports.add_song = (req, res) => {

console.log(req.body)

  const misDatosParaGuardar = {
    name: req.body.name,
    img: req.body.img,
    img2:req.body.img2,
    des: req.body.des
    
  }

  db_song.create(misDatosParaGuardar, (err, data) => {
    console.warn(data)
    res.redirect('/')
  })

}

function get_Songs(req, res) {
  res.status(200).send(arr)
}



