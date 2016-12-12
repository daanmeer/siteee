var title = document.querySelectorAll(".titel");
function app(){
    var mq = window.matchMedia( "(min-width: 900px)" );
    if (mq.matches) {
        setTimeout(titleAnimation, 100);
    } 
};
function titleAnimation(){
    title[0].style.color = 'white';
    title[0].style.letterSpacing = '.5rem';
};
app();
var width = $(window).width();
$(window).resize(function(){
   if($(this).width() != width){
      width = $(this).width();
      if(width > 900){
        setTimeout(titleAnimation, 100);      
      }
      else {
        title[0].style.transition = '0';
        title[0].style.color = '#3E3E3E';
        title[0].style.letterSpacing = '0';
      }
   }
});
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
		$('.menu').toggleClass('menuClicked');
	})
})();

function ctaScroll(){
    var m = document.getElementById("scroll_icon");
    m.style.bottom = "0";
    up();
    function up(){
        m.style.bottom = "20px";
        setTimeout(down,400);
    }
    function down(){
        m.style.bottom = "0px";
        setTimeout(up,400);
    }
 }
ctaScroll();

/*

x = 0;
i = 0;
b = 1;

var cont = [
'gravensteen',
'graslei',
'stadshal',
'STAM',
'profile',
'budget',
    ];

var img = [
    "https://stad.gent/sites/default/files/styles/sidebar_full_width/public/page/images/BEZOEK_BvL_reserveren.jpg?itok=9rx1GEr4",
    "http://www.nic.gent/images/content/image3.jpg",
    "http://www.arrivalguides.com/s3/ag-images-eu/10/6e7407dba3cd45f12f7961d76fc721a9.jpg",
    "http://www.nic.gent/images/content/image3.jpg",
    "https://stad.gent/sites/default/files/styles/sidebar_full_width/public/page/images/BEZOEK_BvL_reserveren.jpg?itok=9rx1GEr4",
    "http://www.arrivalguides.com/s3/ag-images-eu/10/6e7407dba3cd45f12f7961d76fc721a9.jpg",
];
$(document).ready(function(){
    /*$(window).scroll(function(){
    });
        //$(".background_titel").css('background-image', 'url("http://www.arrivalguides.com/s3/ag-images-eu/10/6e7407dba3cd45f12f7961d76fc721a9.jpg")');
    
   //var iScrollPos = 0;
    
    $(window).scroll(function () {
        x++;
        switch(x){
           case 40:
                    i++;
                    x = 0;
                    b++;
                    $(".titel").text(cont[i]);
                    $(".titel").css('letter-spacing', b*0.5 +'rem');
                    $(".background_titel").fadeIn();
                    $(".background_titel").css('background-image', 'url('+ img[i]+ ')');
                break;
        }
    });
    


});
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            x++;
            $(".titel").text(x);
        } else {
            $(".titel").text(x);
            x--;
        }
        iScrollPos = iCurScrollPos;*/