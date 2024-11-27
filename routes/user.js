const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate')

const userController = require('../controller/userController');
router.get('/show',userController.show)
router.get('/add/:username/:email/:cin',userController.add);
  router.post('/add',validate,userController.add1);
   router.get('/showUser',userController.find)
   router.get('/showUser/:id',userController.findById)
   router.get('/showUsername/:username', userController.showUsername);
   router.put('/update/:id',validate,userController.update);
   router.delete('/delete/:id',userController.deleteUser);
module.exports = router;