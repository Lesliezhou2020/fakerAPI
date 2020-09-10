const faker = require('faker');

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name =faker.company.companyName();
        this.address = `${faker.address.streetName()} ${faker.address.city()} ${faker.address.state()} ${faker.address.zipCode()} ${faker.address.country()}`;
    }
}

module.exports = Company;