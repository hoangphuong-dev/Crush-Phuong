const CONFIG = {
 InTitle: 'Tớ cũng thích cậu lắm á',
 FBLink:'https://www.facebook.com/messages/t/100026958732567',
 ConfirmBtnText: 'Yes',
 PopTitle: 'Chào crush tương lai',
 PopText: 'cậu lại vô trang của tớ à ?',
 PopConfim: 'Yepp',
 MessText: 'nhắn tin với tớ nha <3',
}
$("#btnYes, #btnNo, #ED").hide();
function stpopup(){
   Swal.fire({
      title: CONFIG.PopTitle,
      text: CONFIG.PopText ,
      confirmButtonText: CONFIG.PopConfim,
      imageUrl: 'image/love.jpg',
      imageWidth: 400,
      imageHeight: 300 ,
      backdrop:`
         rgba(0,0,123,0.4)
         url("image/abcd.gif")
         left top
         no-repeat`    
    }).then((result) => {
       play();
       $("#btnYes, #btnNo, #ED").show(2000);
    })
}

function yesClick() 
 {
   Swal.fire({
      title: CONFIG.InTitle,
      text: CONFIG.MessText,
      confirmButtonText: CONFIG.ConfirmBtnText,
      imageUrl: 'image/abc.gif',
      imageWidth: 400,
      imageHeight: 400 ,
  }).then((result) => {
   if (result.isConfirmed) {
         window.location = CONFIG.FBLink;
   }
  })
}
  
function noHover()
 {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + "px";
    document.getElementById("btnNo").style.top = y + "px";
    document.getElementById("btnNo").style.transition = "0.3s";
}

 function play() {
   var audio = new Audio('music.mp3');
   audio.play();
}




