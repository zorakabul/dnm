
$(document).ready(function(){
	//global vars
	var form = $("#form");
	var name = $("#name");
	var nameMsg = $("#nameMsg");
	var email = $("#email");
	var emailMsg = $("#emailMsg");
	var passport = $("#passport");
	var passportMsg = $("#passportMsg");
	var mobile = $("#mobile");
	var mobileMsg = $("#mobileMsg");
	var tckn = $("#tckn");
	var tcknMsg = $("#tcknMsg");
	
	//On blur
	name.blur(validateName);
	email.blur(validateEmail);
	passport.blur(validatePassport);
	mobile.blur(validateMobile);
	tckn.blur(validateTCKN);
	//On key press
	name.keyup(validateName);
	email.keyup(validateEmail);
	passport.keyup(validatePassport);
	mobile.keyup(validateMobile);
	tckn.keyup(validateTCKN);
	//On Submitting
	form.submit(function(){
		if(validateName() & validateEmail() & validatePassport() & validateMobile() & validateTCKN())
			return true
		else
			return false;
	});
	
	//validation functions
	function validateEmail(){

		var a = $("#email").val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;

		//Geçerliyse email
		if(filter.test(a)){
			email.removeClass("error");
			emailMsg.text("Email adresinizi giriniz");
			emailMsg.removeClass("error");
			return true;
		}
		//Geçerli değilse
		else{
			email.addClass("error");
			emailMsg.text("Lütfen geçerli bir email adresi giriniz");
			emailMsg.addClass("error");
			return false;
		}
	}
	function validateName(){
		//Geçerli değilse isim
		if(name.val().length < 6){
			name.addClass("error");
			nameMsg.text("İsim alanı en az 6 karakter içermelidir");
			nameMsg.addClass("error");
			return false;
		}
		//Geçerliyse
		else{
			name.removeClass("error");
			nameMsg.text("İsim giriniz");
			nameMsg.removeClass("error");
			return true;
		}
	}
	function validatePassport(){
		var a = $("#passport");
		//var b = $("#password2");

		//Geçerli değilse
		if(passport.val().length <10){
			passport.addClass("error");
			passportMsg.text("Pasaport No: At least 10 characters: letters, numbers and '-'");
			passportMsg.addClass("error");
			return false;
		}
		//Geçerliyse
		else{			
			passport.removeClass("error");
			passportMsg.text("At least 10 characters: letters, numbers and '_'");
			passportMsg.removeClass("error");
			validatePass2();
			return true;
		}
	}
	function validateMobile(){
		var a = $("#mobile").val();;
		var filter = /^[0-9 ]{10,14}$/;
		//Geçerliyse
		if( filter.test(a) ){
			mobile.removeClass("error");
			mobileMsg.text("Confirm mobile");
			mobileMsg.removeClass("error");
			return true;
		}
		//Geçerli değilse
		else{
			mobile.addClass("error");
			mobileMsg.text("Sadece rakamlardan (ve boşluktan) oluşabilir (10-14)");
			mobileMsg.addClass("error");
			return false;
		}
	}
	function validateTCKN(){
		
		var a = $("#tckn").val();
		var filter = /^[0-9]{11}$/;
		//Geçerliyse TCKN
		if(filter.test(a)){
			tckn.removeClass("error");
			tcknMsg.text("Confirm TCKN");
			tcknMsg.removeClass("error");
			return true;
		}
		//Geçerli değilse
		else{			
			tckn.addClass("error");
			tcknMsg.text("TCKN must be 11 digits");
			tcknMsg.addClass("error");
			return false;
		}
	}
});