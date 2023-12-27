//count of 108

let cnt;
if(localStorage.getItem("count")){
  cnt=JSON.parse(localStorage.getItem("count"));
}
else{
  cnt=0;
}
document.getElementById("today").innerText=cnt
localStorage.setItem("count",JSON.stringify(cnt));

//108 cal..................
let numofRounds;//it is the number of 108 round in a single day
if(localStorage.getItem("108count")){
  let c=JSON.parse(localStorage.getItem("108count"));
  if(c<0){
    numofRounds=0;
  }
  else{
    numofRounds=c;
  }
}
else{
  numofRounds=0;
}
document.getElementById("t108").innerText=numofRounds;
//108 in one day----------------------

let lifeTimeCount;//count the total number of mantras you have taken till now
if(localStorage.getItem("lifeTimecnt")){
  lifeTimeCount=JSON.parse(localStorage.getItem("lifeTimecnt"));
}
else{
  lifeTimeCount=JSON.parse(localStorage.getItem("count"));
}
document.getElementById("lifetime").innerText=lifeTimeCount;
localStorage.setItem("lifeTimecnt",JSON.stringify(lifeTimeCount));

//display

let dis;
if(localStorage.getItem("count")){
  let a=JSON.parse(localStorage.getItem("count"));
  dis=a%108
}
else{
  dis=0;
}
document.getElementById("display").innerText=dis
localStorage.setItem("disp",JSON.stringify(dis));
//--------------------------------------------------

//lf108

let lf108;
lf108=Math.floor(lifeTimeCount/108);
document.getElementById("lf108").innerText=lf108;
localStorage.setItem("lf108",JSON.stringify(lf108));




// function getlcl(user){
//   return JSON.parse(localStorage.getItem("user-copy"));

// }
// function setlcl(user){
  
//   localStorage.setItem("user-copy",JSON.stringify(user));
// }
function increment(){
  lifeTimeCount++;
  cnt++;

  if(cnt%108==0)numofRounds++;
  
  localStorage.setItem("108count",JSON.stringify(numofRounds));

  localStorage.setItem("count",JSON.stringify(cnt));
  
  
  let r=localStorage.getItem("count");
  document.getElementById("today").innerText=r;
  document.getElementById("t108").innerText=localStorage.getItem("108count");
  localStorage.setItem("lifeTimecnt",JSON.stringify(lifeTimeCount));
  document.getElementById("lifetime").innerText=localStorage.getItem("lifeTimecnt");



  // display

  dis=cnt%108;
  // console.log(dis);
  localStorage.setItem("disp",JSON.stringify(dis));
  document.getElementById("display").innerText=localStorage.getItem("disp");


  // lf108

  lf108=Math.floor(lifeTimeCount/108);
  localStorage.setItem("lf108",JSON.stringify(lf108));
  document.getElementById("lf108").innerText=localStorage.getItem("lf108");

 

}
function decrement(){
  let check=JSON.parse(localStorage.getItem("count"));
  if(check<=0){
    if (confirm("You have reached the minimum value. Reset count and rounds?")) {
    cnt = 0;
    numofRounds = 0;
  } else {
    return; // Prevent further execution if user doesn't want to reset
  }
}
  else{
  lifeTimeCount--;
  cnt--;
  if(cnt%108==0)numofRounds--;
  if(numofRounds<0){
    numofRounds=0;
  }
  localStorage.setItem("108count",JSON.stringify(numofRounds));
  localStorage.setItem("count",JSON.stringify(cnt));
  let r=localStorage.getItem("count");


  document.getElementById("today").innerText=r;
  //seting the total cnt
  document.getElementById("t108").innerText=localStorage.getItem("108count");



  localStorage.setItem("lifeTimecnt",JSON.stringify(lifeTimeCount));
  document.getElementById("lifetime").innerText=localStorage.getItem("lifeTimecnt");



  dis=cnt%108;
  // console.log(dis);
  localStorage.setItem("disp",JSON.stringify(dis));
  document.getElementById("display").innerText=localStorage.getItem("disp");


  lf108=Math.floor(lifeTimeCount/108);
  localStorage.setItem("lf108",JSON.stringify(lf108));
  document.getElementById("lf108").innerText=localStorage.getItem("lf108");
  }
}



function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}




function isTwelvePM() {
  const now = new Date();
  return now.getHours() === 0 && now.getMinutes() === 0;
}

// Clear cnt if it's 12 PM
if (isTwelvePM()) {
  clearCnt();
}

function clearCnt() {
  cnt = 0;
  dis=0;
  numofRounds=0;
  localStorage.setItem("count", JSON.stringify(cnt));
  localStorage.setItem("108count",JSON.stringify(numofRounds));
  localStorage.setItem("disp",JSON.stringify(dis));
  document.getElementById("display").innerText=dis
  document.getElementById("today").innerText = "0";
  document.getElementById("t108").innerText="0";
}

