'use strict';
window.onload = main;
let count = 0;
let arr = [];
let arr2 = [];
let images = "InitialImage.jpg";
let stop = false;
let true_false_l = false;
let true_false_s = false;
let true_false_r = false;
let interval = null;


function main() {
    document.querySelector(".load").addEventListener("click", image_load);
    document.querySelector(".previous").addEventListener("click", prev);
    document.querySelector(".next").addEventListener("click", next);

    document.querySelector(".last").onclick = function last_pic(){
        if (!true_false_l || stop) {
            document.querySelector("#meg").innerHTML = "Error: you must load data first";
            return; 
        }
        stop = false;
        document.querySelector("#main").innerHTML = `<img src="${arr[arr.length-1]}">`;
        document.querySelector("#photo_display").placeholder = `${arr[arr.length-1]}`;
    }

    document.querySelector(".first_photo").onclick = function loading(){
        if (!true_false_l || stop) {
            document.querySelector("#meg").innerHTML = "Error: you must load data first";
            return;
        }
        stop = false;
        document.querySelector("#main").innerHTML = `<img src="${arr[0]}">`;
        document.querySelector("#photo_display").placeholder = `${arr[0]}`;
    }
    
    
    document.querySelector(".slide").addEventListener("click", slide);
    document.querySelector(".random").addEventListener("click", random);
    document.querySelector(".stop").onclick = function stop_pic(){
        if (true_false_s) {
            clearInterval(interval);
            true_false_r = false;
            stop = true;
            true_false_s = false;
        }
    }
}

function image_load() {

    let first_name = document.querySelector(".photo_folder").value;
    let common_name = document.getElementById("common_name").value;
    let start_photo = Number(document.getElementById("start_photo").value);
    let end_photo = Number(document.getElementById("end_photo").value);
    arr = [];
    arr2=[];
    
    let add_first_common = first_name+ common_name;
    if (start_photo > end_photo) {
        document.querySelector("#meg").innerHTML = "Error: Invalid Range";
        return;
    }
    else{
    for (let i = start_photo; i <= end_photo; i++) {
     
        arr2.push(String(add_first_common) + String(i) + ".jpg");
        arr.push(String(add_first_common) + String(i) + ".jpg");
    }
    }
    if (arr.length != 0) {
        images = arr[0];
    }


    document.querySelector("#main").innerHTML = `<img src="${images}">`;
    document.querySelector("#photo_display").placeholder = `${images}`;
    document.getElementById("meg").innerHTML = "Photo Viewer System";
    true_false_l = true;
    stop = false;
}

function prev() {
    //Need to check load is true or not
    if (!true_false_l || stop) {
        document.querySelector("#meg").innerHTML = "Error: you must load data first";
        return;
    }
    stop = false;
    if (images === arr[0]) {
        images = arr[arr.length - 1];
    } else {
        images = arr[arr.indexOf(images) - 1];
    }
    document.querySelector("#main").innerHTML = `<img src="${images}">`;
    document.querySelector("#photo_display").placeholder = `${images}`;
}
/*random function, this function will shuffle the array */
function random(){
    if (!true_false_l) {
        document.querySelector("#meg").innerHTML = "Error: you must load data first";
        return;
    }
    true_false_r = true;
    stop = false;
    arr2 = shuffle(arr2);
    images = arr2[0];
    slide();
}

function next() {
    if (!true_false_l || stop) {
        document.querySelector("#meg").innerHTML = "Error: you must load data first";
        return;
    }
    stop = false;
    if (true_false_r) {
        if (images === arr2[arr2.length - 1]){
            images = arr2[0];
        } 
        else {
            images = arr2[arr2.indexOf(images) + 1];
        }
        document.querySelector("#main").innerHTML = `<img src="${images}">`;
        document.querySelector("#photo_display").placeholder = `${images}`;
        count = count + 1;
        
        if (count===arr.length-1){
            count = 0;
            arr2 = arr2.sort((a, b) => 0.5 - Math.random());
           
        }
    } 
    else{
        if(images === arr[arr.length - 1]){
            images = arr[0];
        } 
        else{
            images = arr[arr.indexOf(images) + 1];
        }
        document.querySelector("#main").innerHTML = `<img src="${images}">`;
        document.querySelector("#photo_display").placeholder = `${images}`;
    }
}




function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
  return arr;
  
  }

  function slide() {
    stop = false;
    /*need to check whether true_false_load is true or not for the message*/
    if (!true_false_l) {
        document.querySelector("#meg").innerHTML = "Error: you must load data first";
        return;
    }
    true_false_s = true;
    clearInterval(interval)
    let number = 1000;
    interval = setInterval(next, number);
}