 $(document).ready(function(){
    $.getJSON( "https://raw.githubusercontent.com/thomcopp/thomcopp.github.io/master/json/ghentlemanFood.json", function( data ) {
        var id = 0;
        var restaurant = [];
        console.log(data);
        for (var i = 0; i < data.food.length; i++) {
            if(data.food[i].categorie == "restaurant")
            {
                restaurant[id] = data.food[i];
                $('.food_places').append("<div class=\'" + "detail_Scroll \'" + "style=\' background-image: url(\" " + restaurant[id].image+ " \")\'>" +
    "<div><a class=\'food_place\' href=\'detailpage.html\'><h1>" + restaurant[id].naam + "</h1><h2>" + restaurant[id].location[0].street + " " + restaurant[id].location[1].number + "</h2></a></div></div>");
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