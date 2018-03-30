var Mock = require('mockjs');
const api = require('../app/utils/config');

module.exports = {
    [`POST /sss/ss`]: function e(req, res) {
        res.json({ success: true, message: 'Ok' });
    }
};