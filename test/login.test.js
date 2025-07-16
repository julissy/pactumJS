const { spec } = require('pactum');
require('../data/userTemplates');

it('CT01:Login', async () => {
    await spec()
        .post(`https://serverest.dev/login`)
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
});









