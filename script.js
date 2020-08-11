// var timecounter = document.getElementById("timepart");
// console.log(timecounter.innerText);

//   var intervalid = setInterval ( function() {
//      var timetext = timecounter.innerText;
//      if(timetext>0){
//      timetext -= 1;
//      timecounter.innerText= timetext;
//      }
//      else {
//          clearInterval(intervalid);
//      }
//      console.log("interval!!!");


// }, 1000);


var hourele = document.getElementById("hour");
var minele = document.getElementById("minute");
var secele = document.getElementById("second");

function latesttime(){
    hourele.innerText = new Date().getHours();
    minele.innerText = new Date().getMinutes();
    secele.innerText = new Date().getSeconds();
}

setInterval(latesttime,1000);
