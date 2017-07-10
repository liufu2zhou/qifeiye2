$(function () {		
	function setCookie (name,pw) {
		var dateNow = new Date();
		dateNow.setDate(dateNow.getDate()+10);
		document.cookie = "userName"+"="+name+";"+"userPassword"+"="+pw+";"+"expires"+"="+dateNow.toString();
	}
	
	function getCookie (name) {
		var cookieStr = document.cookie;
		var cookiePairs = cookieStr.split(";");
		for (var i=0;i<cookiePairs.length;i++){
			var keyValue = cookiePairs[i].split("=");
			if (keyValue[0]==name) {
				return keyValue[1];
			}
		}
	}
	
	function removeCookie (name,pw) {
		var dateNow = new Date();
		dateNow.setDate(dateNow.getDate()-10000);
		document.cookie = "userName"+"="+name+";"+"userPassword"+"="+pw+";"+"expires"+"="+dateNow.toString();
	}
	
	function cookieIsEmpty () {
		var userName = getCookie("userName");
		var userPassword = getCookie("userPassword");
		if (userName==undefined || userName==null || userName==" ") {
			$("#remenber").prop("checked",false);
			console.log("cookieIsEmpty1:"+userName+","+userPassword);
			console.log("cookieIsEmpty1:"+$("#remenber").prop("checked"));
		} else{
			$("#account").val(userName);
			$("#passWord").val(userPassword);
			$("#remenber").prop("checked",true);
			console.log("cookieIsEmpty2:"+userName+","+userPassword);
		}
	}
	
	$("#remenber").prop("checked","false");
	cookieIsEmpty();
	
	$("#remenber").click(function () {
		var name = $("#account").val();
		var pw = $("#passWord").val();
		if ($(this).prop("checked")==true) {			
			setCookie(name,pw);	
			console.log("remenber true:"+name+","+pw);
		} else{
			removeCookie(name,pw);
		}
		
	})
	
})
