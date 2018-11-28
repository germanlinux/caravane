var express = require('express');
var router = express.Router();
var db  =require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
         data = ''
 //        res.render('partial_hdpvuejs', { title: 'jecoute94', eves : data });
         res.render('anyquestion', { title: 'jecoute94', eves : data });
})
router.get('/admin/stat/a_ventiler', function(req, res, next) {
  db.connect(function(){console.log('connection base depuis GETADMINVENTILE')
    });
  db.get().one("select count(*) as a_ventiler from reponses;")
    .then((data)=> {
  //       console.log(data);
         data.a_ventiler =Number(data.a_ventiler);
         res.send(data);
             });
 });
router.get('/admin/a_ventiler', function(req, res, next) {
  db.connect(function(){console.log('connection base depuis GETADMINVENTILE')
    });
  db.get().any("select *  from reponses;")
    .then((data)=> {
           console.log(data);
           let tab = [];
           for (i = 0; i < data.length; i++) {
              xdata = JSON.parse(data[i].ligne_reponse);
              tab.push(xdata);
           }
//         data.a_ventiler =Number(data.a_ventiler);
           res.setHeader('Content-Type', 'application/json');

           res.send(JSON.stringify(tab));
 //          res.send(data);
             });
 });
router.get('/admin/ventiler', function(req, res, next) {
  db.connect(function(){console.log('connection base depuis GETADMINVENTILE')
    });
  db.get().any("select *  from reponses;")
    .then((data)=> {
           console.log(data);
           let tab = [];
           for (i = 0; i < data.length; i++) {
              xdata = JSON.parse(data[i].ligne_reponse);
              tab.push(xdata);
           }
           for (i = 0; i < tab.length; i++) {


           }
//         data.a_ventiler =Number(data.a_ventiler);

           res.setHeader('Content-Type', 'application/json');

           res.send(JSON.stringify(tab));
 //          res.send(data);
             });
 });




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
