const { spec } = require('pactum');
const { newUserGenerate } = require('../data/userTemplates');

it('CT02:Busca usuário', async () => {
    await spec()
        .get(`https://serverest.dev/usuarios`)
        .withHeaders({
            'Content-Type': 'application/json'
        })
        .expectStatus(200)
});

it('CT03: Criação do usuário', async () => {
    await spec()
        .post(`https://serverest.dev/usuarios`)
        .withHeaders({
            'Content-Type': 'application/json'
        })
        .withBody({
            '@DATA:TEMPLATE@': 'newUser'
        })
        .expectStatus(201)
        .expectJsonLike({
            message: "Cadastro realizado com sucesso"
        });
});

it('CT04: Busca do usuário por id', async() => {
    const newUser = newUserGenerate()
    let { json } = await spec()
            .post('https://serverest.dev/usuarios')
            .withHeaders({
                'accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .withBody(newUser)
            .expectStatus(201)

        await spec()
            .get(`https://serverest.dev/usuarios/${json._id}`)
            .expectStatus(200)
            .expectJsonLike({
                nome: newUser.nome,
                email: newUser.email,
                password: newUser.password,
                administrador: newUser.administrador
            })
    });

    it('CT05: Exclusão do usuário por id', async() => {
    const newUser = newUserGenerate()
    let { json } = await spec()
            .post('https://serverest.dev/usuarios')
            .withHeaders({
                'accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .withBody(newUser)
            .expectStatus(201)

        await spec()
            .delete(`https://serverest.dev/usuarios/${json._id}`)
            .expectStatus(200)
            .expectJsonLike({
                message: "Registro excluído com sucesso"
            })
    });


