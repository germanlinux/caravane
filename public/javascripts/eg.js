Date.prototype.yyyymmddhhmm = function() {
   var yyyy = this.getFullYear();
   var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
   var dd  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
   var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
   var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
   return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min);
  };

var eric = new  Vue({
  el: '#app' ,
  data: {
     nbitem : 0,
     message : 'Neuf4 j\'ecoute',
     question1: '',
     question2X1: '',
     question2X2: '',
     question2X3: '',
     question2X4: '',
     question2X5: '',
     question2X6: '',
     question3: '',
     question4:'',
     question5:'',
     question6:'',
     question7:'',
     question8:'',
     question9:'',



     sondeur: '',
     code: ''

  },
  mounted(){
      if (localStorage.getItem('_nbitem')) {
           this.nbitem = localStorage.getItem('_nbitem');
         }
         else {this.nbitem = 1 ;
                localStorage.setItem('_nbitem',this.nbitem);
         }

 },

  watch: {
    question1: function() {
      console.log('je passe');
      localStorage.setItem('question1', this.question1);
    },
    question2X1: function() {
      console.log('je passe');
      localStorage.setItem('question2X1', this.question2X1);
    },
    question2X2: function() {
      console.log('je passe');
      localStorage.setItem('question2X2', this.question2X2);
    },
    question2X3: function() {
      console.log('je passe');
      localStorage.setItem('question2X3', this.question2X3);
    },
    question2X4: function() {
      console.log('je passe');
      localStorage.setItem('question2X4', this.question2X4);
    },
    question2X5: function() {
      console.log('je passe');
      localStorage.setItem('question2X5', this.question2X5);
    },
    question2X6: function() {
      console.log('je passe');
      localStorage.setItem('question2X6', this.question2X6);
    },
    question3: function() {
      console.log('je passe');
      localStorage.setItem('question3', this.question3);
    },
    sondeur: function() {
      console.log('je passe');
      localStorage.setItem('_sondeur', this.sondeur);
    },
    code: function() {
      console.log('je passe');
      localStorage.setItem('_code', this.code);
    },
    question4: function() {
      console.log('je passe');
      localStorage.setItem('question4', this.question4);
    },
    question5: function() {
      console.log('je passe');
      localStorage.setItem('question5', this.question5);
    },
    question6: function() {
      console.log('je passe');
      localStorage.setItem('question6', this.question6);
    },
    question7: function() {
      console.log('je passe');
      localStorage.setItem('question7', this.question7);
    },
    question8: function() {
      console.log('je passe');
      localStorage.setItem('question8', this.question8);
    },
    question9: function() {
      console.log('je passe');
      localStorage.setItem('question9', this.question9);
    },

  },
  created: function() {

 },

  methods: {
    masque: function (ligne) {
          console.log(ligne);
         // console.log(ligne['type'])
          if (ligne) {
          if (ligne.hasOwnProperty('type')) {
             return(false)
          } else {
            console.log('EKO');
            return(true)
          }
        }
      },
    plusun: function (event) {
      console.log('je passe VALID');
      let ncle = Number(this.nbitem);
      this.nbitem = ncle +1;
      let cle = ncle.toString();
      let reponse = {};
      reponse.cle = cle;
      reponse.sondeur= this.sondeur;
      reponse.code= this.code;
      // ajout de la date de collecte
      madate = new Date();
      reponse.datetime = madate.yyyymmddhhmm();
      localStorage.setItem('_nbitem',ncle+1 );
      if (localStorage.getItem('question1')) {
           reponse.question1 = localStorage.getItem('question1');
      }
      let t_multi = [];
      if (localStorage.getItem('question2X1')) {
           t_multi.push(localStorage.getItem('question2X1'));
      } else {
           t_multi.push(false);


      }
      if (localStorage.getItem('question2X2')) {
           t_multi.push(localStorage.getItem('question2X2'));
      } else {
           t_multi.push(false);


      }
      if (localStorage.getItem('question2X3')) {
           t_multi.push(localStorage.getItem('question2X3'));
      } else {
           t_multi.push(false);


      }

      if (localStorage.getItem('question2X4')) {
           t_multi.push(localStorage.getItem('question2X4'));
      } else {
           t_multi.push(false);


      }
      if (localStorage.getItem('question2X5')) {
           t_multi.push(localStorage.getItem('question2X5'));
      } else {
           t_multi.push(false);


      }
      if (localStorage.getItem('question2X6')) {
           t_multi.push(localStorage.getItem('question2X6'));
      } else {
           t_multi.push(false);


      }
      reponse.question2 = t_multi;
      if (localStorage.getItem('question3')) {
           reponse.question3 = localStorage.getItem('question3');
      }
      if (localStorage.getItem('question4')) {
           reponse.question4 = localStorage.getItem('question4');
      }
      if (localStorage.getItem('question5')) {
           reponse.question5 = localStorage.getItem('question5');
      }
      if (localStorage.getItem('question6')) {
           reponse.question6 = localStorage.getItem('question6');
      }
      if (localStorage.getItem('question7')) {
           reponse.question7 = localStorage.getItem('question7');
      }
      if (localStorage.getItem('question8')) {
           reponse.question8 = localStorage.getItem('question8');
      }

      if (localStorage.getItem('question9')) {
           reponse.question9 = localStorage.getItem('question9');
      }


     console.log('STOP');
     console.log(reponse.cle);
     localStorage.setItem(cle,JSON.stringify(reponse));
     this.question1= '';
     this.question2X1= '';
     this.question2X2= '';
     this.question2X3= '';
     this.question2X4= '';
     this.question2X5= '';
     this.question2X6= '';
     this.question3=  '';
     this.question4=  '';
     this.question5=  '';
     this.question6=  '';
     this.question7=  '';
     this.question8=  '';
     this.question9=  '';
      window.location.href = "#debut";

 //    localStorage.setItem('nbitem',ncle);
    },
   plustous: function (event) {
     let result = [];
     for (var i = 0; i < localStorage.length; i++) {
     console.log(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
     result.push(localStorage.getItem(localStorage.key(i)));
      }
     console.log('TOTAL', result);
     var param = {};
     param['resultat'] = result;
      axios.post('/maj' , param)
    .then(response => {
       console.log (response);
       if (response.data == 'OK') {  // supprimer  les items
          let tab = [];
          console.log('long',localStorage.length );
          for (var i = 0; i < localStorage.length; i++) {
            let cle  = localStorage.key(i) ;
            console.log(cle);
            if (cle.indexOf('_') != 0)  {
//              setTimeout(function () { localStorage.removeItem(cle);
              tab.push(cle);
//              console.log('remove', cle); }, 0)
            }
          }
          for (var i = 0; i < tab.length; i++) {
            localStorage.removeItem(tab[i]);
          }
          localStorage.setItem('_nbitem', 1);
          this.nbitem = 1;
       }
    })
    .catch(error => {
       console.log(error);
    });
   }
  }
})
