const { spec } = require('pactum');

it('Testando status e body', async () => {
    await spec()
        .get('https://fakerestapi.azurewebsites.net/api/v1/Activities')
        .expectStatus(200)
        .expectJsonLikeAt('[0]',
            {
                "id": 1,
                "title": "Activity 1"
            });
});
