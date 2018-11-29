'use strict';

const userrepository = require('../repositories/user-repository');

exports.get = async(req, res, next) => {
    res.status(200).send({
        message: 'Usuário'
    });
}