        function start(){
            var ul = document.querySelectorAll('ul');
            ul[0].style.opacity = '0';
			setTimeout(function() {
                ul[0].style.opacity = '1';
			}, 10);
		}
        start();


        function letterAnimation(tag){
            var name = tag;
            var changer = document.getElementById('changer');
            changer.innerHTML = '<embed class="graven" src="Svg/' + name + '.svg">';
            //document.getElementsByTagName("embed")[1].setAttribute("src", "Svg/" + name + ".svg"); 
            tester(name);
            var e = true;
            var skyline = document.querySelectorAll('.graven');
            skyline[0].style.bottom= '-5vw';
            skyline[0].style.right= '0';
            var i=1;
            setTimeout(function() {               
                skyline[0].style.opacity= '.7';
            }, 10);
            function tester(cont){
                var str = cont;
                var c = str.length + 70;
                var res = str.substring(0, i);
                document.getElementById('test').innerHTML = res;
                if (i<=c && e==true){
                    i++;
                }
                if (i == 3){
                    document.getElementById('test').style.opacity = "1";
                }
                if (i != c){
                    setTimeout(function(){ tester(cont); }, 30);
                }
                if (i == c){
                    e = false;
                }
                if (e == false){
                    document.getElementById('test').style.opacity = "0";
                    setTimeout(function(){ close(); }, 1200);
                }
            }
            function close() {
                skyline[0].style.opacity= '0';
                i = 0;
                //break tester;
            }
        }   



        var places_slider = [
            'stam',
            'graslei',
            'Gent sint pieters',
            'gravensteen',
        ];


        var j = 0;
        function testener(){
            cont = places_slider[j];
            letterAnimation(cont);
            j++;
            if (j == places_slider.length){
                j = 0;
            }
            setTimeout(function(){ testener(); }, 7000);
        }

        testener();