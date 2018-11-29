'use strict';

const concore = require('../db/index');

exports.get = async() => {
    const res = concore.init();
    return res;
}