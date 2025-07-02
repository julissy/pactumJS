require('dotenv').config();
require('../data/userTemplates');
const { spec } = require('pactum');


it('CT001:Testando status e body', async () => {
    await spec()
        .get(`${process.env.BASE_URL}/api/v1/Activities`)
        .expectStatus(200)
        .expectJsonLikeAt('[0]',
            {
                "id": 1,
                "title": "Activity 1"
            });
});

it('CT002:Testando status', async () => {
    await spec()
        .post(`${process.env.BASE_URL}/api/v1/Activities`)
        .withJson({'@DATA:TEMPLATE@':'ACTIVITIES'})
        .expectStatus(200);
    console.log({'@DATA:TEMPLATE@':'ACTIVITIES'});
});
