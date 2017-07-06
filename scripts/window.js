function showWindow(event){
	event.preventDefault();
	$(".container__window").show();
}

function hideWindow(){
	$(".container__window").hide();
}

$(".header__login_btn").click(showWindow);
$(".avail-heading__close").click(hideWindow);