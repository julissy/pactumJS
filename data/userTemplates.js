const { stash } = require('pactum');
const { faker } = require('@faker-js/faker');

stash.addDataTemplate({
    'ACTIVITIES': {
        id: faker.number.int({ min: 0, max: 15 }),
        title: 'Activity' + faker.number.int({min:0, max:20}),
        dueDate: faker.date.recent(),
        completed: faker.datatype.boolean()
    }
});
console.log('Template ACTIVITIES carregado!');