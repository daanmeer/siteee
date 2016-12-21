 $(document).ready(function(){
    $.getJSON( "https://raw.githubusercontent.com/thomcopp/thomcopp.github.io/master/json/ghentlemanFood.json", function( data ) {
        var id = 0;
        var dessert = [];
        console.log(data);
        for (var i = 0; i < data.food.length; i++) {
            if(data.food[i].categorie == "dessert")
            {
                dessert[id] = data.food[i];
                $('.food_places').append("<div class=\'" + "detail_Scroll \'" + "style=\' background-image: url(\" " + dessert[id].image+ " \")\'>" +
    "<div><a class=\'food_place\' href=\'detailpage.html\'><h1>" + dessert[id].naam + "</h1><h2>" + dessert[id].location[0].street + " " + dessert[id].location[1].number + "</h2></a></div></div>");
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
