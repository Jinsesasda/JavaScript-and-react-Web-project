var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/processForm', function(req, res, next) {
  let result = "";
  let true_or_false = false;
  if (isNaN(req.body.phoneFirstPart) || isNaN(req.body.phoneSecondPart) || isNaN(req.body.phoneThirdPart)){
    result += "Invalid phone number\n";
    true_or_false = true;
  }
  if (!req.body.highBloodPressure && !req.body.diabete && !req.body.glaucoma
    && !req.body.asthma&& !req.body.none){
      true_or_false = true;
      result += "No conditions selected\n";
    }
   if (req.body.none == "None") {
      if (req.body.highBloodPressure ="High Blood Pressure" ||
       req.body.diabetes =="Diabetes" || req.body.diabetes =="Glaucoma"|| req.body.asthma =="Asthma") {
          true_or_false = true;
         result +="Invalid conditions selection";       
      }
    } 
/*
   if (req.body.lessthanayear && req.body.never&&req.body.onetotwo && req.body.morethantwo) {
       result += "No time period selected\n";
       true_or_false = true;
   }*/
   if (req.body.firstFourDigits[0] !== 'A' || req.body.secondFourDigits[0] !== 'B' 
   || isNaN(req.body.firstFourDigits.slice(1, 3)) 
   || isNaN(req.body.secondFourDigits.slice(1, 3))) {
     result+= "Invalid study id\n";
    true_or_false = true;
}




   if(true_or_false == false){
  var temp = "";
  if (req.body.period == "OneToTwoYears")
    temp = "One To Two Years"

  if (req.body.period == "LessThanAYear")
    temp = "Less Than A Year"  
    
  if (req.body.period == "MoreThanTwoYears")
    temp = "More Than Two Years"

  if (req.body.period == "never")
    temp = "Never"  

  res.render('result', { title: 'Database Entry Confirmation',
                        firstName: req.body.firstname,
                        lastName: req.body.lastname,
                        phoneFirstPart: req.body.phoneFirstPart,
                        phoneSecondPart: req.body.phoneSecondPart,
                        phoneThirdPart: req.body.phoneThirdPart,
                        email: req.body.email,
                        age: req.body.age,
                        heightFeet: req.body.heightFeet,
                        heightInches: req.body.heightInches,
                        weight: req.body.weight,
                        highBloodPressure: req.body.highBloodPressure,
                        diabetes: req.body.diabetes,
                        glaucoma: req.body.glaucoma,
                        asthma: req.body.asthma,
                        none: req.body.none,
                        period: temp,
                        studyType: req.body.studyType,
                        firstFourDigits: req.body.firstFourDigits,
                        secondFourDigits: req.body.secondFourDigits,
                        comments: req.body.comments
                      });
  console.log(req.body);
                    }

                    else{
                      res.status(404).json(result);
                    }

});


module.exports = router;
