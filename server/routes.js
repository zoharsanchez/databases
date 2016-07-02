var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.options('/messages', controller.options);

router.options('/users', controller.options);

router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

