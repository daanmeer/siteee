$(document).ready(function(){
	var x = sessionStorage.x;
	document.getElementById("detail_title").innerHTML = x;
	document.title += x;

    $(".likebutton").click(function(){
        $(this).css('color', '#F48B94');
        localStorage.setItem(x , "true");
    });
    $( "p" ).click(function() {
      $( this ).toggleClass( "click" );
    });

    //Check if liked
    // for(var i=0; i<localStorage.length; i++) {
    //   var key = localStorage.key(i);
    //   var value = localStorage[key];
    //   console.log(key);
    //   console.log(value);
    //   if(key == x && (value == true))
    //   {
    //       console.log("dit is al geliked :)")
    //   }
    // }

    if(localStorage.getItem(x) == "true")
    {
      console.log('geliked');
      $(".likebutton").css('color', '#F48B94');
    }
	
	//Parking
	 $.getJSON("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json", function(data) {
        for (var i = 0; i < data.length; i++) {
            if(data[i].name == x)
            {
            $('.detail_content').append("<p><strong>Adres</strong>: " + data[i].address +"</p>")
            console.log(data[i].parkingStatus.availableCapacity);
            if(data[i].parkingStatusopen == true)
            {
                 $('.detail_content').append("<p><strong>Status</strong>: Open</p>")  
            }
            else
            {
                 $('.detail_content').append("<p><strong>Status</strong>: Gesloten</p>")  
            }
        	  $('.detail_content').append("<p><strong>Momenteel beschibaar</strong>: " + data[i].parkingStatus.availableCapacity + " / " + data[i].parkingStatus.totalCapacity +"</p>")
          }
        }
    });

	//Food
	$.getJSON( "https://raw.githubusercontent.com/thomcopp/thomcopp.github.io/master/json/ghentlemanFood.json", function( data ) {
        var id = 0;
        var food = [];
        for (var i = 0; i < data.food.length; i++) {
            if(data.food[i].naam == x)
            {
                food[i] = data.food[i];
               	//console.log(food[i].location[0].street);
               	$('.detail_content').append("<p><strong>Adres</strong>: " + food[i].location[0].street + " " + food[i].location[1].number +  "</p>" );
               	$('.detail_content').append("<p><strong>Postcode</strong>: " + food[i].location[4].postalcode + "</p>" );
                $('.detail_content').append("<p><strong>Prijscategorie</strong>: " + food[i].prijsklasse + "</p>" );

               	//console.log(food[i].links);
               	if(typeof food[i].links[0].personal == "undefined")
               	{
               		//alert('personal undefined');
               		//Geen personal site
    					        if(typeof food[i].links[0].facebook == "undefined")
    	               	{
    	               		//alert('facebook undefined');
    	               		//Geen personal en facebook
          						        if(typeof food[i].links[0].tripadvisor == "undefined")
          		               	{
          		               		//alert('tripadvisor undefined');
          		               		//Geen personal, facebook en tripadvisor
          		               	}
          		               	else
          		               	{
                                //Alleen tripadvisor
          		               		$('.detail_content').append("<p><a href=\'" + food[i].links[0].tripadvisor + " \'><strong>Tripadvisor</strong>:</a></p>" );
          		               	}
    	               	}
    	               	else
    	               	{
                               //Wel Facebook
          	               		 $('.detail_content').append("<p><a href=\'" + food[i].links[0].facebook + "\'<strong>Facebook</strong></a></p>" );
                               if(typeof food[i].links[1].tripadvisor == "undefined")
                               {
                                //geen tripadvisor
                               }
                               else
                               {
                                //Wel tripadvisor
                                $('.detail_content').append("<p><a href=\'" + food[i].links[1].tripadvisor + "\'<strong>Tripadvisor</strong></a></p>" );
                               }
    	               	}
               	}
               	else
               	{
                  //wel personal 
               		 $('.detail_content').append("<p><a href=\'" + food[i].links[0].personal + "\'<strong>Personal</strong></a></p>" );
                   if(typeof food[i].links[1].facebook == "undefined")
                   {
                        //Wel personal, geen facebook
                        if(typeof food[i].links[1].tripadvisor == "undefined")
                        {
                        //Wel personal, geen facebook en geen tripadvisor
                        }
                        else
                        {
                        //Wel personal, geen facebook, wel tripadvisor
                        $('.detail_content').append("<p><a href=\'" + food[i].links[1].tripadvisor + "\'<strong>Tripadvisor</strong></a></p>" );
                        }
                   }
                   else
                   {
                      //Personal en Facebook bestaat
                      $('.detail_content').append("<p><a href=\'" + food[i].links[1].facebook + "\'<strong>Facebook</strong></a></p>" );
                        if(typeof food[i].links[2].tripadvisor == "undefined")
                        {
                        //Wel personal en facebook, geen tripadvisor
                        }
                        else
                        {
                        //Personal, facebook en tripadvisor bestaan
                        $('.detail_content').append("<p><a href=\'" + food[i].links[2].tripadvisor + "\'<strong>Tripadvisor</strong></a></p>" );
                        }
                   }

               	}

            }
        }
    });
});