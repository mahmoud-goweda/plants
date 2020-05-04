var ar = document.getElementById("ar")
var eng = document.getElementById("en")
var lang = document.getElementById("bootAr")


ar.addEventListener('click', function(e){
  lang.setAttribute("href","https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css")
  ar.parentElement.parentElement.parentElement.parentElement.style.direction='rtl'
  console.log(ar.parentElement.parentElement.parentElement.parentElement.style.direction='rtl');
  
})

eng.addEventListener('click', function(){
    ar.parentElement.parentElement.parentElement.parentElement.style.direction='ltr'
  lang.setAttribute("href","bootstrab/bootstrap.min.css")
})