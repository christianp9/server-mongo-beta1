

module.exports = (app) => {
  const musicController = require('./controller/music.controller')

  const songJoi=require('./middleware/song.joi')

  app.get('/1',    
    (req, res) => {
      res.end('<h1>bienvenido</h1>');
    });

  app.get('/', musicController.render_song);

  
  app.post('/registro', songJoi  , musicController.add_song);

  app.get('/login/:user', (req, res) => {

    res.end(`<h1>Hola ${req.params.user} </h1>`);
    res.render('login');

  });

  app.get('/push/:datos', (req, res) => {

    arr.push(req.params.datos)
    res.redirect('/1/1223')

  })

  app.get('*', (req, res) => {
    res.status(500).send({ err: 'servido no encontrado' });
  })

};
