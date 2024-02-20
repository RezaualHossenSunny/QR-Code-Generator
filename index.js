const imgbox =document.getElementById("imgbox");
const imgqr =document.getElementById("imgqr");
const qrtext =document.getElementById("qrtext");




function genarateqr(){
    if(qrtext.value.length >0){
        imgqr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
        imgbox.classList.add("show-img")
    }else{
        qrtext.classList.add("eroor");

        setTimeout(()=>{
        qrtext.classList.remove("eroor")
        },1000)
    }
 
}