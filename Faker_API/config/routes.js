const User = require('../models/User');
const Company = require('../models/Company');

const user = require('../controllers/user');
const company = require('../controllers/company');

module.exports = (app) => {
    app.get('/api/users/new', user.create);
    app.get('/api/companies/new', company.create);
    app.get('/api/user/company', user.create_both);
};

