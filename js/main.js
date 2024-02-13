var a = prompt("Yoshni kiriting")
if(a == 18){
       var elTitle = document.querySelector(".title")
       elTitle.textContent = "siz men bilan tengsiz, demak men bilan dost ekansiz "
}
if(a > 18){
       var elTitle = document.querySelector(".title")
       elTitle.textContent = "siz mendan kattasiz, demak menga aka ekansiz "
}
if(a < 18){
       var elTitle = document.querySelector(".title")
       elTitle.textContent = "siz mendan kichkinasizsiz, demak menga ka ekansiz "
}