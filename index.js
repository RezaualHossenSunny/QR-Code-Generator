const imgbox =document.getElementById("imgbox");
const imgqr =document.getElementById("imgqr");
const qrtext =document.getElementById("qrtext");




function genarateqr(){
  imgqr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
  imgbox.classList.add("show-img")
}