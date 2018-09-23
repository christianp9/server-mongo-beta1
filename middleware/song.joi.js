const { Joi, celebrate } = require('celebrate');

module.exports = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    img: Joi.string().required(),
    img2: Joi.string().required(),
    des: Joi.string().required()
  })
})

