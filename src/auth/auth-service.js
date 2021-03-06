const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

const AuthService = {

    getUserWithUserName(db, username) {
        return db('users')
            .where({ username })
            .first()
    },

    parseBasicToken(token) {
        return Buffer
            .from(token, 'base64')
            .toString()
            .split(':')
    },

    comparePasswords(pwd, hash) {
        return bcrypt.compare(pwd, hash)
    },

    createJwt(subject, payload) {
        return jwt.sign(payload, config.JWT_SECRET, {
            subject,
            expiresIn: config.JWT_EXPIRY,
            algorithm: 'HS256',
        })
    },

    verifyJwt(token) {
        return jwt.verify(token, config.JWT_SECRET, {
            algorithms: ['HS256'],
        })
    },

}

module.exports = AuthService