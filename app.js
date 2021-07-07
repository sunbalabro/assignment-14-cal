function getNum(num) {

    var screen = document.getElementById("screen");
screen.value += num;
}
function getoperator(opera) {

    var screen = document.getElementById("screen");
if(screen.value == ""){
  alert("First please some num");
}else{
    screen.value += opera;
}
    
}
function clearRsl(){
    var screen = document.getElementById("screen");
    screen.value = "";
}

function showresult(){
    var screen = document.getElementById("screen");
 if(screen.value == ""){
   alert("Didn't find something for sum")
 }else{
     
     screen.value = eval(screen.value);
 }
}