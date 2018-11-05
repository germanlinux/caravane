var express = require('express');
var router = express.Router();
var db  =require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
         data = ''
         res.render('partial_hdpvuejs', { title: 'jecoute94', eves : data });
})
router.post('/maj', function(req, res, next) {
    db.connect(function(){console.log('connection base depuis POSTMAJ')
    });
    valeur =  req.body['resultat'];
    db.get().task(t => {
    iinsert= [];
    valeur.forEach(function(element) {
       if (element.search('{\"cle\":') >= 0) {
         // elemt = element.replace(/"/g,'\'');
           elemt = element;
           iinsert.push(t.none("INSERT into  reponses (ligne_reponse) VALUES ($1);",[elemt]));
       }
    })
    return t.batch(iinsert)
    .then(()=> {
        res.send('OK');
    })
    .catch(error => {
       res.send('KO');
    })
  });
});

module.exports = router;
