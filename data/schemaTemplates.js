const Joi = require('joi');

const loginSchema = Joi.object({
    message: Joi.string().required(),
    authorization: Joi.string().required()
});

const createNewUserSchema = Joi.object().keys({
    message: Joi.string().required(),
    _id: Joi.string().required()
})

module.exports = { loginSchema, createNewUserSchema };

