'use strict';
window.onsubmit = main;


function main() {

    let true_or_false = false;
    let result = "";


    

    if (isNaN( document.querySelector(".phoneFirstPart").value) || 
    isNaN(document.querySelector(".phoneSecondPart").value) 
    || isNaN(document.querySelector(".phoneThirdPart").value)) {
        result += "Invalid phone number\n";
        true_or_false = true;
    }
    if (document.querySelector(".highBloodPressure").checked == false 
    && document.querySelector(".diabetes").checked == false 
    && document.querySelector(".glaucoma").checked == false && 
    document.querySelector(".asthma").checked == false && 
    document.querySelector(".none").checked == false) {
        result += "No conditions selected\n";
        true_or_false = true;

    } else if (document.querySelector(".none").checked) {
        if (document.querySelector(".highBloodPressure").checked ||
         document.querySelector(".diabetes").checked ||
          document.querySelector(".glaucoma").checked ||
           document.querySelector(".asthma").checked) {
            result += "Invalid conditions selection\n";
            true_or_false = true;

        }
    }

    if (document.querySelector(".lessthanayear").checked == false &&
     document.querySelector(".never").checked == false && 
     document.querySelector(".onetotwo").checked == false &&
     document.querySelector(".morethantwo").checked == false) {
        result += "No time period selected\n";
        true_or_false = true;
    }

    if (document.querySelector(".firstFourDigits").value[0] !== 'A' || 
    document.querySelector(".secondFourDigits").value[0] !== 'B' || 
    isNaN(document.querySelector(".firstFourDigits").value.slice(1, 3)) || 
    isNaN(document.querySelector(".secondFourDigits").value.slice(1, 3))) {
        result += "Invalid study id\n";
        true_or_false = true;
    }
    if (true_or_false) {
        alert(result);
        return false;
    } else {
        window.confirm("Do you want to submit the form data?");
        return true;
    }
}