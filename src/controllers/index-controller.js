'use strict';

const config = require('../config');

exports.get = (req, res, next) => {
    res.status(200).send({
        message: 'Concore SDK Test 0.0.1'
    });
}