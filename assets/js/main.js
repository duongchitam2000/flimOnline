var btnResponsive = document.querySelector('.bar-reponsive')
var overLay = document.querySelector('.modal');
var menuMobile = document.querySelector('.menu-reponsive-wapper');
var menuclose = document.querySelector('.close-menu');

var dropdow = document.querySelector('.menu-reponsive-item > .dropdown');


// hiện over-lay và hiện mobile menu

btnResponsive.onclick = function(){
	menuMobile.style.transform = "translateX(0%)";
	overLay.style.display = "block";
 }
// bỏ over-lay và mobile menu
overLay.onclick = function(){
	menuMobile.style.transform = "translateX(-100%)";
	overLay.style.display = "none";
	
	// formloginwapper.style.display = 'none';
 }
 menuclose.onclick = function(){
	menuMobile.style.transform = "translateX(-100%)";
	overLay.style.display = "none";
	// 
 }

 var accodrion = document.querySelectorAll('.menu-reponsive-item');
 console.log(accodrion);
 for (i = 0; i < accodrion.length; i++){
	accodrion[i].onclick = function(){
		this.classList.toggle('active');
	 }
 }

 //login
 var closeform = document.querySelector('.close-form');
 var formloginwapper = document.querySelector('.form-login-wapper');
 var btnlogin = document.querySelector('.login-top');

 btnlogin.onclick = function(){
	formloginwapper.style.display = 'block';
	overLay.style.display = "block";
 }
 closeform.onclick = function(){
	formloginwapper.style.display = 'none';
	overLay.style.display = "none";
 }

// reagister
 var registerTop = document.querySelector('.register-top');
 registerTop.onclick = function(){
	alert('Chức năng đang phát triển! ');
 }
// contact
 var contact = document.querySelector('.contact');
 contact.onclick = function(){
	alert('Chức năng đang phát triển! ');
 }
 var btndownload = document.querySelector('.btn-download');
 btndownload.onclick = function(){
	alert('Chức năng đang phát triển! ');
 }
// tabs sidebar

const tabsall = document.querySelectorAll('.tab-list-item')
const tabsContentall = document.querySelectorAll('.tabs-content')
tabsall.forEach((tab, index) =>{
	tab.addEventListener("click", () =>{
		tabsContentall.forEach((tabContent)=>{
			tabContent.classList.remove('active')
		}) 
		tabsall.forEach((tab)=>{
			tab.classList.remove('active')
		}) 

		tabsall[index].classList.add('active')
		tabsContentall[index].classList.add('active')	
		
	})
})