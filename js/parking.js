$(document).ready(function(){
    $.getJSON("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json", function(data) {
        var id = 0;
        var parking = [];
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i]);
            $('.parking_name').append("<li ><a href=\'detailpage.html\'>" + data[i].name +"</a></li>")
        }
    });


    $('ul').on('click', 'li', function() {
    //alert( $(this).text() );
    var active = $(this).text();
        //console.log(active);
        sessionStorage.setItem("x", active);  
    });


    //document.getElementById("detail_title").innerHTML = active.text();
    //$('#result').load('detailpage.html #detail_title');

});