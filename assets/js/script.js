const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
var count = 0;

btn1.addEventListener("click",function (det) {
  if (count==0) {
    document.querySelector(".ans1").style.display="block"
    count = 1;
  }else{
    document.querySelector(".ans1").style.display="none"
    count = 0;
  }
} )
btn2.addEventListener("click",function (det) {
  if (count==0) {
    document.querySelector(".ans2").style.display="block"
    count = 1;
  }else{
    document.querySelector(".ans2").style.display="none"
    count = 0;
  }
} )
btn3.addEventListener("click",function (det) {
  if (count==0) {
    document.querySelector(".ans3").style.display="block"
    count = 1;
  }else{
    document.querySelector(".ans3").style.display="none"
    count = 0;
  }
} )




