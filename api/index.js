// Dependencies
var express = require('express');
var router = express.Router();



// Models
var Task = require('./models/task');



/**
 * @api {get} /task Request Task information
 * @apiSampleRequest /api/task
 * @apiName GetTask
 * @apiGroup Task
 *
 * @apiSuccess {String} _id ID of the task.
 * @apiSuccess {Date} updatedAt updated date
 * @apiSuccess {Date} createdAt creation date
 * @apiSuccess {String} name name of the task
 * @apiSuccess {Date} dueDate due date of the task
 * @apiSuccess {Number} priority task priority
 * @apiSuccess {Number} __v version of the document
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  [
 *      {
 *           "_id": "570bfd4ffcc31d60194e38bd",
 *          "updatedAt": "2016-04-11T19:38:55.901Z",
 *           "createdAt": "2016-04-11T19:38:55.901Z",
 *           "name": "ewrwrwrwerwre",
 *           "dueDate": "2016-04-12T05:00:00.000Z",
 *           "priority": 4,
 *           "__v": 0
 *       }
 *   ]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 */

/**
 * @api {post} /task Creates a task
 * @apiSampleRequest /api/task
 * @apiName PostTask
 * @apiGroup Task
 *
 * @apiParam {String} name name of the task
 * @apiParam {Date} dueDate  Task due date
 * @apiParam {Number} priority Task priority
 *
 * @apiSuccess {String} _id ID of the task.
 * @apiSuccess {Date} updatedAt updated date
 * @apiSuccess {Date} createdAt creation date
 * @apiSuccess {String} name name of the task
 * @apiSuccess {Date} dueDate due date of the task
 * @apiSuccess {Number} priority task priority
 * @apiSuccess {Number} __v version of the document
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  [
 *      {
 *           "_id": "570bfd4ffcc31d60194e38bd",
 *          "updatedAt": "2016-04-11T19:38:55.901Z",
 *           "createdAt": "2016-04-11T19:38:55.901Z",
 *           "name": "ewrwrwrwerwre",
 *           "dueDate": "2016-04-12T05:00:00.000Z",
 *           "priority": 4,
 *           "__v": 0
 *       }
 *   ]
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 */

Task.methods(['get','put','post','delete']);

Task.register(router, '/task');





module.exports = router;