// const faker = require('faker');
const generatePersonsData = (number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: Math.random(),
            // name: faker.name.firstName(),
            // description: faker.lorem.paragraphs(2),
            // picture: faker.image.avatar(),
            // country: faker.address.country(),
            // joining_date: faker.date.future(),
        });
        number--;
    }
    return persons;
};

console.log(generatePersonsData(10));