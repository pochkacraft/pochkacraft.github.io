var BackModal = document.querySelector('.modal-back');
var Modal = document.querySelector('.modal');

function OpenModal(){
	BackModal.style.display = "block";
	Modal.style.display = "block";
	Modal.classList.add("popup-anim");
	/*setTimeout(CheckModalClicks, 400);*/
}

/*
function CheckModalClicks(){
window.addEventListener('click', function(e){
  if (Modal.contains(e.target)){
    // Clicked in box
  } else{
    	CloseModal();
  }
});
}
*/


function CloseModal(){
	Modal.classList.add("popup-anim-close");
	setTimeout(CloseModalComplete, 360);
	history.pushState(null, null, "/");
}

function CloseModalComplete(){
	Modal.classList.remove("popup-anim-close");
	Modal.classList.remove("popup-anim");
	BackModal.style.display = "none";

	Modal.style.background = "none";
	Modal.style.backgroundColor = "white";
	Modal.style.color = "black";
}


function CopyToClipboard() {
  var copyText = "pochkacraft.com";

  navigator.clipboard.writeText(copyText);

  OpenMessage();
}
//Variables message
var Msg = document.querySelector('.modal-message-container');
var ProgressBar = document.querySelector('.msg-progress-bar');

function OpenMessage(){
	Msg.style.display = "block";
	setTimeout(CloseMessage, 3000);
	ProgressBar.classList.add("progress-loaded");

}
function CloseMessage(){
	Msg.classList.add("msg-anim-close");
	setTimeout(function(){Msg.style.display = "none"; Msg.classList.remove("msg-anim-close");}, 600);
}


//OnScroll Events
  $(window).scroll(function () {
if ($(window).scrollTop() >= 0.2) {
$('.nav-div').css('background','rgba(255, 255, 255, 0.9)');
$('.nav-div').css('box-shadow','0 4px 30px rgba(0, 0, 0, 0.1)');
/*$('.nav-div').css('backdrop-filter','blur(12.4px)');
$('.nav-div').css('-webkit-backdrop-filter','blur(12.4px)');*/
} else {
$('.nav-div').css('background','transparent');
$('.nav-div').css('box-shadow','none');
/*$('.nav-div').css('backdrop-filter','none');
$('.nav-div').css('-webkit-backdrop-filter','none');*/
}
});

/*MODAL CONTENT*/
var Modal = document.querySelector('.modal');
var ModalContent = document.querySelector('.modal-content');

function ModalPlasmovoice(){
	ModalContent.innerHTML = '<h1>Плагин для голосового чата</h1><div class = "flexbox plasmo"><div><h2>FORGE</h2> <a href = "files/plasmovoice-forge-1.19.1-1.2.19.jar"><button>Скачать</button></a></div> <div><h2>FABRIC</h2><a href = "files/plasmovoice-fabric-1.19.1-1.2.19.jar"><button>Скачать</button></a></div> </div><div class = "instruct-div"><a href="#faq" class = "instruct" onclick="CloseModal()">Как установить?</a></div>';
	history.pushState(null, null, "/plasmovoice");
}

function ModalHistory(){
	ModalContent.innerHTML = '<h1>Прошлые сезоны</h1><div class = "flexbox history"><h2>1 Сезон</h2> <span class = "info-history">25.09.2021 - 1.16.5</span> <a href = "https://drive.google.com/uc?export=download&id=1fvt-3xF-XH2H3ajxGu25K30eygWN7Xr2"><button>Скачать карту</button></a></div> <div class = "flexbox history"><h2>2 Сезон</h2> <span class = "info-history">01.12.2021 - 1.16.5</span><a href="https://drive.google.com/uc?export=download&id=11-rmihQbqtSqgmj3nDDxV2fMpB25ZnZb"><button>Скачать карту</button></a></div> <div class = "instruct-div"><a href="https://drive.google.com/file/d/1KbXZDlluLVhnoQXkBYDBI9e_FRnSAI_E/view?usp=sharing" class = "instruct">Инструкция</a></div>';
}

function ModalPremium(){
	Modal.style.background = "rgb(123,31,193)";
	Modal.style.background = "linear-gradient(90deg, rgba(123,31,193,1) 0%, rgba(255,23,23,1) 100%)";
	Modal.style.color = "white";


	ModalContent.innerHTML = '<div class="ModalPremium"><h1>Поддержите сервер и получите <span class = "gradient-title">Pochka Premium</span></h1><h2>1,5$ ≈ 55 UAH</h2><div class="flexbox choose-payment"><a href="https://new.donatepay.ru/@pochka-craft"><button class="card"><img src="img/donatepay_logo.png" width="200px" ></button></a><a href="https://donatello.to/pochkacraft"><button class="card"><img src="img/logo-donatello.svg" width="200px"></button></a><h4>Все отправленые средства рассматриваються как пожертвования. Возврат средств не предоставляется. </h4></div></div>';
}

/*MOB*/

var Mobmenu = document.querySelector('.mobile-menu');
var MobContainer = document.querySelector('.mobile-menu-container');

function CheckMobMenuClicks(){
window.addEventListener('click', function(e){
  if (MobContainer.contains(e.target)){
    // Clicked in box
  } else{
    	CloseMobMenu();
    	console.log('UGGHHH');
  }
});
}

function OpenMobMenu(){
	Mobmenu.style.display = "block";
	CheckMobMenuClicks();
}
function CloseMobMenu(){
	Mobmenu.classList.add("mob-closing");
	setTimeout(function(){Mobmenu.style.display = "none"; Mobmenu.classList.remove("mob-closing");}, 550);
}