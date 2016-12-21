$(document).ready(function(){
    $(".likebutton").click(function(){
        $(this).css('color', '#F48B94');
    });
    $( "p" ).click(function() {
	$( this ).toggleClass( "click" );
	});
	var x = sessionStorage.x;
	document.getElementById("detail_title").innerHTML = x;
	document.title += x;

});