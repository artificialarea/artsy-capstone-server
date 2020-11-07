const express = require('express')
const xss = require('xss')
const commentsRouter = express.Router()
const jsonParser = express.json()
const { requireAuth }= require('../middleware/jwt-auth')
const path = require('path')
const commentsService = require('./comments-service')
const UsersService = require('../users/users-service')

const serializeComment = (comment) => ({
    id: comment.id,
    comment: xss(comment.comment),
    user_id: comment.user_id,
})


commentsRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db')
        commentsService.getComments(knexInstance)
            .then(comments => {
                res.json(comments.map(serializeComment))
            })
            .catch(next)
    })
    .post(jsonParser, requireAuth, (req, res, next) => {

        const { comment } = req.body
        const knexInstance = req.app.get('db')
        console.log(req.user);
        if (comment === null)
            return res.status(400).json({
                error: {
                    message: `Missing description in request body.`
                }
            })

        const newComment = { comment, user_id: req.user.id }
        commentsService.insertComment(
            knexInstance,
            newComment
        )
            .then(comment => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${comment.id}`))
                    .json(serializeComment(comment))
            })
            .catch(next)
    })

commentsRouter
    .route('/:commentId')
    .get((req, res, next) => {
        const { commentId } = req.params;
        const knexInstance = req.app.get('db')

        commentsService.getCommentById(
            knexInstance,
            commentId
        )
            .then(comment => {
                if (!comment) {
                    return res.status(404).json({
                        error: {
                            message: `comment does not exist`
                        }
                    })
                }
                res.status(200).json(comment)
                next()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { desc } = req.body

        if (desc === null)
            return res.status(400).json({
                error: {
                    message: `missing ${desc} in request body`
                }
            })

        const updatedComment = { id, desc }

        UsersService.updateUser(
            req.app.get('db'),
            req.params.userid,
            userToUpdate
        )
            .then(updateUser => {
                res.status(200).json(serializeComment(updatedComment))
            })
            .catch(next)
    })
    .delete((req, res, next) => {
        const { id } = req.params
        commentsService.deleteComment(
            req.app.get('db'),
            id
        )
            .then(rowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })

module.exports = commentsRouter
