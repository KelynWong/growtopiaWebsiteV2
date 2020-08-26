function validateForm() {
  var a = document.getElementById("name");
  var b = document.getElementById("worldName");
  var c = document.getElementById("email");
  var d = document.getElementById("phone");

  // Growtopia name validation
  if (a.value == "") {
    a.style.border= "solid 1px red";
    document.getElementById("gtName").innerHTML= "*Name cannot be left blank!"
    return false;
  }

  // Growtopia world name validation
  if(b.value == ""){
    
    b.style.border= "solid 1px red";
    document.getElementById("gtWorldName").innerHTML= "*World name cannot be left blank!"
    return false;
  }
 
  
  if((b.value.length <= 3) || (b.value.length >= 20)){
   
    b.style.border= "solid 1px red";
    document.getElementById("gtWorldName").innerHTML= "*World name cannot be less than 4 letters or more than 20 letters!"
    return false;
  }

  // Email validation
  if(c.value == ""){
    c.style.border= "solid 1px red";
    document.getElementById("gtEmail").innerHTML= "*Email cannot be left blank!"
    return false;
  }
 
  console.log(c.value.indexOf("@"));
  if(c.value.indexOf("@") <= 0) {
    c.style.border= "solid 1px red";
    document.getElementById("gtEmail").innerHTML= "*Email is invalid!"
    return false;
  }

  // Phone number validation
  if(d.value == ""){
    
    d.style.border= "solid 1px red";
    document.getElementById("gtPhone").innerHTML= "*Phone number cannot be left blank!"
    return false;
  }
  if(!isNaN(d)){
    d.style.border= "solid 1px red";
    document.getElementById("gtPhone").innerHTML= "*Phone numbers are not in alphabets!"
    return false;
  }
  if(d.value.length !=8){
    d.style.border= "solid 1px red";
    document.getElementById("gtPhone").innerHTML= "*Phone numbers are 8 numbers!"
    return false;
  }
} 