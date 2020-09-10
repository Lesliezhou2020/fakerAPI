const User = require("../models/User");
const Company = require("../models/Company");

module.exports = {
    create: (req, res) => {
        res.json(new User());
    },

    create_both: (req, res) => {
        res.json([new User(), new Company()])
    }

}