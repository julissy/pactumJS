const { stash } = require('pactum');
const { faker } = require('@faker-js/faker');


stash.addDataTemplate({
    'newUser': {
        nome: faker.person.firstName(),
        email: faker.internet.email({provider: 'teste.com' }),
        password: faker.internet.password({ length: 6, prefix: 'test' }),
        administrador: "true"
    }
});

function newUserGenerate () {
    return {
        nome: faker.person.firstName(),
        email: faker.internet.email({provider: 'teste.com' }),
        password: faker.internet.password({ length: 6, prefix: 'test' }),
        administrador: "true"
    };
};

module.exports = {
    newUserGenerate
};
