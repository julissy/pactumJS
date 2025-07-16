require('dotenv').config();
const Joi = require('joi');
const { spec } = require('pactum');
const { loginSchema } = require('../data/schemaTemplates');

it('CT01:Login', async () => {
    const baseUrl = process.env.BASE_URL;

    const { json } = await spec()
        .post(`${baseUrl}/login`)
        .withHeaders({
            'Content-Type': 'application/json'
        })
        .withBody({
            "email": "fulano@qa.com",
            "password": "teste"
        })
        .expectStatus(200)
        .expectJsonLike({
            "message": "Login realizado com sucesso"
        });
        Joi.assert(json, loginSchema);
});









