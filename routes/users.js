var express = require('express');
var router = express.Router();

router.get('/:prenom([a-z]+)', function(req, res, next){
	res.render('update-user');
});
router.put('/:prenom([a-z]+)', function(req, res, next) {
	res.send('The new name is ' + req.body.text);
});



router.get('/:numero(\\d+)', function(req, res, next){
	res.render('delete-user');
});
router.delete('/:numero(\\d+)', function(req, res, next) {
	res.send('No more user with id ' + req.params.numero);
});



module.exports = router;
