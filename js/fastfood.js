$(document).ready(function(){
    $.getJSON( "https://raw.githubusercontent.com/thomcopp/thomcopp.github.io/master/json/ghentlemanFood.json", function( data ) {
        var id = 0;
        var fastfood = [];
        console.log(data);
        for (var i = 0; i < data.food.length; i++) {
            if(data.food[i].categorie == "fastfood")
            {
                fastfood[id] = data.food[i];
                $('.food_places').append("<div class=\'" + "detail_Scroll \'" + "style=\' background-image: url(\" " + fastfood[id].image+ " \")\'>" +
            "<div><a class=\'food_place\' href=\'detailpage.html\'><h1>" + fastfood[id].naam + "</h1><h2>" + fastfood[id].location[0].street + " " + fastfood[id].location[1].number + "</h2></a></div></div>");
                id++;

            }
        }
        $('a').on('click', 'h1', function() {
        //alert( $(this).text() );
        var active = $(this).text();
            sessionStorage.setItem("x", active);  
        });
    });
});