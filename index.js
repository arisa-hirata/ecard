//POPUP & EGG COUNTER

var EggNum = 1,
    EggCounter = document.getElementById("egg_counter"),

    bgR = document.getElementById("first_right"),
    bgL = document.getElementById("first_left"),
    bgSecond = document.getElementById("second_stage"),
    header = document.getElementById("header"),
    Title = document.getElementById("title"),
    Subtitle = document.getElementById("subtitle"),
    Conglatu = document.getElementById("conglatu"),

    PopBack = document.getElementById("popup_bg"),
    
    audio = new Audio("sound/pom.mp3"),
    Nintendo = new Audio("sound/NintendoSwitch.mp3"),
    Dance = new Audio("sound/dance.mp3"),
    Moving = new Audio("sound/move.mp3"),

    Close1 = document.getElementById("close1"),
    egg1 = document.getElementById("egg1"),
    popup1 = document.getElementById("popup1"),

    Close2 = document.getElementById("close2"),
    egg2 = document.getElementById("egg2"),
    popup2 = document.getElementById("popup2"),

    Close3 = document.getElementById("close3"),
    egg3 = document.getElementById("egg3"),
    popup3 = document.getElementById("popup3"),

    Close4 = document.getElementById("close4"),
    egg4 = document.getElementById("hole1"),
    egg4Rabbit = document.getElementById("rabbit2"),
    popup4 = document.getElementById("popup4"),

    Close5 = document.getElementById("close5"),
    egg5 = document.getElementById("eggrabbit1"),
    popup5 = document.getElementById("popup5"),

    Close6 = document.getElementById("close6"),
    egg6 = document.getElementById("eggrabbit2"),
    popup6 = document.getElementById("popup6"),

    Close7 = document.getElementById("close7"),
    egg7 = document.getElementById("eggrabbit3"),
    popup7 = document.getElementById("popup7"),

    Close8 = document.getElementById("close8"),
    egg8 = document.getElementById("egg10"),
    popup8 = document.getElementById("popup8"),

    Close9 = document.getElementById("close9"),
    egg9 = document.getElementById("bud"),
    bloom = document.getElementById("bloom"),
    BloomEgg = document.getElementById("bloom_egg"),
    popup9 = document.getElementById("popup9"),

    Close10 = document.getElementById("close10"),
    egg10 = document.getElementById("rabbit4"),
    popup10 = document.getElementById("popup10"),

    Close11 = document.getElementById("close11"),
    basket = document.getElementById("basket"),
    LastMessage = document.getElementById("last_message");


function EggCount() {
    EggCounter.innerHTML = EggNum++;
    document.getElementById("popup_bg").style.display = "block";
}

function EggGone(id) {
    document.getElementById(id).style.display = "none"; 
}

function Close() {
    PopBack.style.display = "none";
    Nintendo.play();
}


egg1.addEventListener('click', function(){
    EggCount();
    audio.play();
    popup1.style.display = "block";
    EggGone("egg1");
    
        Close1.onclick = function() {
            popup1.style.display = "none";
            Close();
    }
        
    if(EggCounter.innerHTML == 5) {
        Moving.play();
        bgR.style.right = "-1500px";
        bgL.style.left = "-1500px";
        bgSecond.style.bottom = "0px";
        setTimeout(function(){ 
        bgR.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        bgL.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        header.style.display = "none";
     }, 1100);
        
        
}    
},);

egg2.onclick = function() {
    EggCount();
    audio.play();
    popup2.style.display = "block";
    EggGone("egg2");
    
        Close2.onclick = function() {
            popup2.style.display = "none";
            Close();
    } 
        
    if(EggCounter.innerHTML == 5) {
        Moving.play();
        bgR.style.right = "-1500px";
        bgL.style.left = "-1500px";
        bgSecond.style.bottom = "0px";
        setTimeout(function(){ 
        bgR.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        bgL.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        header.style.display = "none";
     }, 1100);
}
}

egg3.onclick = function() {
    EggCount();
    audio.play();
    popup3.style.display = "block";
    EggGone("egg3"); 
        Close3.onclick = function() {
            popup3.style.display = "none";
            Close();
    }  
        
    if(EggCounter.innerHTML == 5) {
        Moving.play();
        bgR.style.right = "-1500px";
        bgL.style.left = "-1500px";
        bgSecond.style.bottom = "0px";
        setTimeout(function(){ 
        bgR.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        bgL.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        header.style.display = "none";
     }, 1100);
}

}

egg4.onclick = function() {
    EggCount();
    audio.play();
    popup4.style.display = "block";
    EggGone("hole1");
    EggGone("rabbit2"); 
        Close4.onclick = function() {
            popup4.style.display = "none";
            Close();
    } 
        
    if(EggCounter.innerHTML == 5) {
        Moving.play();
        bgR.style.right = "-1500px";
        bgL.style.left = "-1500px";
        bgSecond.style.bottom = "0px";
        setTimeout(function(){ 
        bgR.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        bgL.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        header.style.display = "none";
     }, 1100);
}

}    

egg5.onclick = function() {
    EggCount();
    audio.play();
    popup5.style.display = "block";
    EggGone("eggrabbit1"); 
        Close5.onclick = function() {
            popup5.style.display = "none";
            Close();
    } 
        
    if(EggCounter.innerHTML == 5) {
        Moving.play();
        bgR.style.right = "-1500px";
        bgL.style.left = "-1500px";
        bgSecond.style.bottom = "0px";
        setTimeout(function(){ 
        bgR.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        bgL.style.display = "none";
     }, 1100);
        setTimeout(function(){ 
        header.style.display = "none";
     }, 1100);
}

}   

egg6.onclick = function() {
    EggCount();
    audio.play();
    popup6.style.display = "block";
    EggGone("eggrabbit2");
        Close6.onclick = function() {
            popup6.style.display = "none";
            Close();
    } 
        
    if(EggCounter.innerHTML == 10) {
        
        bgSecond.classList.add("fadeout")
        setTimeout(function(){ 
        bgSecond.style.display = "none";
     }, 500);
        
        EggCounter.classList.add("fadeout")
        setTimeout(function() {
            EggCounter.style.display = "none";
        }, 1000);
        
        header.classList.add("fadein");
        setTimeout(function(){
           header.style.display = "block"; 
        }, 1000);
        Title.innerHTML = "CONGLATURATIONS!";
        Subtitle.innerHTML = "You Found 10 Eggs!";
        Title.classList.add("subtitle");
        Subtitle.classList.add("subtitle");
        header.style.marginTop = "50px";
        header.style.zIndex = "999";
        
        setTimeout(function(){ 
        Conglatu.style.bottom = "0";    
        }, 1000,);
        setTimeout(function(){
        Dance.play(); 
        }, 3000); 
        Conglatu.style.display = "block";
}   
}

egg7.onclick = function() {
    EggCount();
    audio.play();
    popup7.style.display = "block";
    EggGone("eggrabbit3");
        Close7.onclick = function() {
            popup7.style.display = "none";
            Close();
    } 
        
        if(EggCounter.innerHTML == 10) {
        
        bgSecond.classList.add("fadeout")
        setTimeout(function(){ 
        bgSecond.style.display = "none";
     }, 500);
            
            EggCounter.classList.add("fadeout")
        setTimeout(function() {
            EggCounter.style.display = "none";
        }, 1000);
        
        header.classList.add("fadein");
        setTimeout(function(){
           header.style.display = "block"; 
        }, 1000);
        Title.innerHTML = "CONGLATURATIONS!";
        Subtitle.innerHTML = "You Found 10 Eggs!";
        Title.classList.add("subtitle");
        Subtitle.classList.add("subtitle");
        header.style.marginTop = "50px";
        header.style.zIndex = "999";
            
        setTimeout(function(){ 
        Conglatu.style.bottom = "0";
        }, 1000);
        setTimeout(function(){
        Dance.play(); 
        }, 3000);  
	Conglatu.style.display = "block";	
}   
}

egg8.onclick = function() {
    EggCount();
    audio.play();
    popup8.style.display = "block";
    EggGone("egg10");
        Close8.onclick = function() {
            popup8.style.display = "none";
            Close();
    }  
    
    if(EggCounter.innerHTML == 10) {
        
        bgSecond.classList.add("fadeout")
        setTimeout(function(){ 
        bgSecond.style.display = "none";
     }, 500);
        
        EggCounter.classList.add("fadeout")
        setTimeout(function() {
            EggCounter.style.display = "none";
        }, 1000);
        
        header.classList.add("fadein");
        setTimeout(function(){
           header.style.display = "block"; 
        }, 1000);
        Title.innerHTML = "CONGLATURATIONS!";
        Subtitle.innerHTML = "You Found 10 Eggs!";
        Title.classList.add("subtitle");
        Subtitle.classList.add("subtitle");
        header.style.marginTop = "50px";
        header.style.zIndex = "999";
        
        setTimeout(function(){ 
        Conglatu.style.bottom = "0";  
        }, 1000); 
        setTimeout(function(){
        Dance.play(); 
        }, 3000);
	Conglatu.style.display = "block";    
}       
        
}

egg9.onclick = function() {
    EggCounter.innerHTML = EggNum++;
    audio.play();
    popup9.style.display = "block";
    
    setTimeout(function(){ 
        PopBack.style.display = "block";
     }, 1500);
    
    EggGone("bud");
    bloom.style.display = "block";
    BloomEgg.style.display = "block";
    BloomEgg.classList.add("fadeout");
    setTimeout(function(){ 
        EggGone("bloom_egg");
    }, 3000);
        Close9.onclick = function() {
            popup9.style.display = "none";
            Close();
    }
    
    if(EggCounter.innerHTML == 10) {
        
        bgSecond.classList.add("fadeout")
        setTimeout(function(){ 
        bgSecond.style.display = "none";
     }, 500);
        
        EggCounter.classList.add("fadeout")
        setTimeout(function() {
            EggCounter.style.display = "none";
        }, 1000);
        
        header.classList.add("fadein");
        setTimeout(function(){
           header.style.display = "block"; 
        }, 1000);
        Title.innerHTML = "CONGLATURATIONS!";
        Subtitle.innerHTML = "You Found 10 Eggs!";
        Title.classList.add("subtitle");
        Subtitle.classList.add("subtitle");
        header.style.marginTop = "50px";
        header.style.zIndex = "999";
        
        setTimeout(function(){ 
        Conglatu.style.bottom = "0";
        }, 1000);
        setTimeout(function(){
        Dance.play(); 
        }, 3000); 
	Conglatu.style.display = "block";    
}       
}

egg10.onclick = function() {
    EggCounter.innerHTML = EggNum++;
    audio.play();
    setTimeout(function(){
               popup10.style.display = "block"
               }, 1000);
    setTimeout(function(){
               PopBack.style.display = "block";
               }, 1000);
    egg10.style.bottom = "350px";
    setTimeout(function(){
               EggGone("rabbit4");
               }, 1000);
        Close10.onclick = function() {
            popup10.style.display = "none";
            Close();
    }  
    
    if(EggCounter.innerHTML == 10) {
        
        bgSecond.classList.add("fadeout")
        setTimeout(function(){ 
        bgSecond.style.display = "none";
     }, 500);
        
        EggCounter.classList.add("fadeout")
        setTimeout(function() {
            EggCounter.style.display = "none";
        }, 1000);
        
        header.classList.add("fadein");
        setTimeout(function(){
           header.style.display = "block"; 
        }, 1000);
        Title.innerHTML = "CONGLATURATIONS!";
        Subtitle.innerHTML = "You Found 10 Eggs!";
        Title.classList.add("subtitle");
        Subtitle.classList.add("subtitle");
        header.style.marginTop = "50px";
        header.style.zIndex = "999";
        setTimeout(function(){ 
        Conglatu.style.bottom = "0";
        }, 1000); 
        setTimeout(function(){
        Dance.play(); 
        }, 3000); 
	Conglatu.style.display = "block";    
}       
}

basket.onclick = function() {
    Switch.play();
    LastMessage.style.display = "block";
    PopBack.style.display = "block";
        Close11.onclick = function() {
            LastMessage.style.display = "none";
            Close();
    }
       
}

//SAKURA

var SAKURA = document.getElementById("hana");

header.onclick = function() {
    Nintendo.play();
    if (basket.classList.contains("cherry")) {
    var divSakura = document.createElement('div');	/* ぶち込むdiv */
	divSakura.id = "sakura";	

	
	divSakura.innerHTML = '<style>'+
	'html,body{overflow-x:hidden;}'+
	'.hana{'+
	'position:absolute;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;}'+
	'.hana::after{'+
	'content:"";display:block;position:absolute;top:-7px;left:-7px;height:0;width:0;'+
	'border: 10px solid pink;'+
	'border-radius: 15px;'+
	'border-top-right-radius: 0;'+
	'border-bottom-left-radius: 0;'+
	'transform: rotate(15deg);'+
	'}'+

	'.t1{border-color:#fff3f5;}'+
	'.t2{border-color:#ffe2e7;}'+
	'.t3{border-color:#ffd1d9;}'+
	'.t4{border-color:#ffc0cb;}'+
	'.t5{border-color:#ffafbd;}'+
	'.t6{border-color:#ffafbd;}'+
	'.t1::after{border-color:#fff3f5;}'+
	'.t2::after{border-color:#ffe2e7;}'+
	'.t3::after{border-color:#ffd1d9;}'+
	'.t4::after{border-color:#ffc0cb;}'+
	'.t5::after{border-color:#ffafbd;}'+
	'.t6::after{border-color:#ffafbd;}'+

	'.y1{animation:v1 10s infinite;animation:v1 10s infinite;}'+
	'.y2{animation:v2 10s infinite;animation:v2 10s infinite;}'+
	'.y3{animation:v3 9s infinite;animation:v3 9s infinite;}'+
	'.y4{animation:v4 9s infinite;animation:v4 9s infinite;}'+
	'.y5{animation:v5 8s infinite;animation:v5 8s infinite;}'+
	'.y6{animation:v6 8s infinite;animation:v6 8s infinite;}'+
	
	'@keyframes v1{'+
		'from{transform: rotate(0deg) scale(1);}'+
		'50%{transform: rotate(270deg) scale(1);}'+
		'to{transform: rotate(1deg) scale(1);}'+
	'}'+
	'@keyframes v2{'+
		'from{transform: rotate(-90deg) scale(.9);}'+
		'50%{transform: rotate(-360deg) scale(.9);}'+
		'to{transform: rotate(-89deg) scale(.9);}'+
	'}'+
	'@keyframes v3{'+
		'from{transform: rotate(30deg) scale(.8);}'+
		'50%{transform: rotate(300deg) scale(.8);}'+
		'to{transform: rotate(29deg) scale(.8);}'+
	'}'+
	'@keyframes v4{'+
		'from{transform: rotate(-120deg) scale(.7);}'+
		'50%{transform: rotate(-390deg) scale(.7);}'+
		'to{transform: rotate(-119deg) scale(.7);}'+
	'}'+
	'@keyframes v5{'+
		'from{transform: rotate(60deg) scale(.6);}'+
		'50%{transform: rotate(330deg) scale(.6);}'+
		'to{transform: rotate(59deg) scale(.6);}'+
	'}'+
	'@keyframes v6{'+
		'from{transform: rotate(-150deg) scale(.5);}'+
		'50%{transform: rotate(-420deg) scale(.5);}'+
		'to{transform: rotate(-149deg) scale(.5);}'+
	'}'+

	'</style>';

	document.body.appendChild(divSakura);

	var windowHeight = window.innerHeight;
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;	
	var styleZindex = 9999;	
	var styleTop = new Array();
	var styleLeft = new Array();
	var yuragi = new Array();	
	var sokudo = new Array();	
	var hanabiraId = new Array();	
	var yuragiConut = new Array();	
	var kazeCount = 0;	

	
	document.addEventListener('scroll', function(){ scroll = document.documentElement.scrollTop || document.body.scrollTop; }, false);

	
	for(var i = 0; i < 50; i++){
		var divHanabira = document.createElement('div');
		divHanabira.id = 'hanabira' + i;	
		styleTop[i] = Math.random() * -1000 + scroll;	
		styleLeft[i] = Math.random() * window.innerWidth;	
		divHanabira.setAttribute('style', 'z-index:' + (styleZindex + i) + ';top:' + styleTop[i] + 'px;left:' + styleLeft[i] + 'px;');	
		var hanabiraClass = 'hana t' + (Math.floor(Math.random() * 6) + 1) + ' y' + (Math.floor(Math.random() * 6) + 1);	
		divHanabira.setAttribute('class', hanabiraClass);	
		divSakura.appendChild(divHanabira);
		yuragi[i] = Math.random() * 40 + 5;	
		sokudo[i] = Math.random() * 5 + 2;	
		hanabiraId[i] = document.getElementById('hanabira' + i);
		yuragiConut[i] = 0;	
	}

	
	FlowerStorm = setInterval(function(){

		
		for(var i = 0; i < 50; i++){
			if(styleTop[i] < scroll + windowHeight - 40){	
				if(yuragi[i] >= yuragiConut[i]){	
					styleLeft[i] = styleLeft[i] + 0.5 + Math.random() * 0.5;
				}else{	
					styleLeft[i] = styleLeft[i] - 0.5 - Math.random() * 0.5;
				}
				if((yuragi[i] * 2) <= yuragiConut[i]){	
					yuragiConut[i] = 0;	
				}
			}else{	
				styleTop[i] = scroll - 40;	
				styleLeft[i] = Math.random() * window.innerWidth;	
			}

            /* 横風 */  

			if(kazeCount >= 100 && kazeCount <= 110){ styleLeft[i] = styleLeft[i] + 1; }
			else if(kazeCount >= 111 && kazeCount <= 120){ styleLeft[i] = styleLeft[i] + 3; }
			else if(kazeCount >= 121 && kazeCount <= 129){ styleLeft[i] = styleLeft[i] + 5; }
			else if(kazeCount >= 130 && kazeCount <= 137){ styleLeft[i] = styleLeft[i] + 7; }
			else if(kazeCount >= 138 && kazeCount <= 144){ styleLeft[i] = styleLeft[i] + 9; }
			else if(kazeCount >= 145 && kazeCount <= 300){ styleLeft[i] = styleLeft[i] + 11; }
			else if(kazeCount >= 301 && kazeCount <= 311){ styleLeft[i] = styleLeft[i] + 9; }
			else if(kazeCount >= 312 && kazeCount <= 322){ styleLeft[i] = styleLeft[i] + 7; }
			else if(kazeCount >= 323 && kazeCount <= 335){ styleLeft[i] = styleLeft[i] + 5; }
			else if(kazeCount >= 336 && kazeCount <= 349){ styleLeft[i] = styleLeft[i] + 3; }
			else if(kazeCount >= 350 && kazeCount <= 354){ styleLeft[i] = styleLeft[i] + 1; }


			else if(kazeCount >= 500 && kazeCount <= 510){ styleLeft[i] = styleLeft[i] - 1; }
			else if(kazeCount >= 511 && kazeCount <= 520){ styleLeft[i] = styleLeft[i] - 3; }
			else if(kazeCount >= 521 && kazeCount <= 529){ styleLeft[i] = styleLeft[i] - 5; }
			else if(kazeCount >= 530 && kazeCount <= 537){ styleLeft[i] = styleLeft[i] - 7; }
			else if(kazeCount >= 538 && kazeCount <= 544){ styleLeft[i] = styleLeft[i] - 9; }
			else if(kazeCount >= 545 && kazeCount <= 700){ styleLeft[i] = styleLeft[i] - 11; }
			else if(kazeCount >= 701 && kazeCount <= 711){ styleLeft[i] = styleLeft[i] - 9; }
			else if(kazeCount >= 712 && kazeCount <= 722){ styleLeft[i] = styleLeft[i] - 7; }
			else if(kazeCount >= 723 && kazeCount <= 735){ styleLeft[i] = styleLeft[i] - 5; }
			else if(kazeCount >= 736 && kazeCount <= 749){ styleLeft[i] = styleLeft[i] - 3; }
			else if(kazeCount >= 750 && kazeCount <= 754){ styleLeft[i] = styleLeft[i] - 1; }

			else if(kazeCount >= 900){ kazeCount = 0; }	/* リセット */

/* ここまで横風 */ 

			styleTop[i] = styleTop[i] + sokudo[i];	
			hanabiraId[i].style.top = styleTop[i] + 'px';	
			hanabiraId[i].style.left = styleLeft[i] + 'px';	
			yuragiConut[i]++;	
		}
		kazeCount++;	
	}, 45);
        
        basket.classList.remove("cherry"); 
        
        
    }   else {
        clearInterval(FlowerStorm);
        basket.classList.add("cherry");
        var target = document.getElementById("sakura");
        if(target.parentNode) {
            target.parentNode.removeChild(target);
        }
    } 
        
}


var Switch = new Audio("sound/switch.mp3");

document.getElementById("yes_btn").onclick = function() {
    location.reload();
    Switch.play();
}
document.getElementById("no_btn").onclick = function() {
    LastMessage.style.display = "none";
    PopBack.style.display = "none";
    Switch.play();
}


// SUN & MOON & Castle

var audio2 = new Audio("sound/explosion3.mp3");
var castle = document.getElementById("castle");
var bg = document.getElementById("backgroundImage");
var star11 = document.getElementById("star1_1");
var star12 = document.getElementById("star1_2");
var star21 = document.getElementById("star2_1");
var star22 = document.getElementById("star2_1");
var moon = document.getElementById("moon");

    castle.onclick = function() {
        audio2.play();
        
        if(header.classList.contains("night")) {　
             bg.classList.add("background_color");
             star11.classList.add("star1");
             setTimeout(function(){ 
             star11.style.display = "block"; 
           }, 1000);
             star12.classList.add("star1");
             setTimeout(function(){ 
             star12.style.display = "block"; 
           }, 1000);
             star21.classList.add("star2");
             setTimeout(function(){ 
             star21.style.display = "block"; 
           }, 1000);
             star22.classList.add("star2");
             setTimeout(function(){ 
             star22.style.display = "block"; 
           }, 1000);
             moon.classList.add("moon");
             setTimeout(function() {
             moon.style.display = "block"; 
             }, 800); 
             header.style.color = "#fff";
            header.classList.remove("night");
            bg.classList.remove("background_color2");
            
            star11.classList.remove("fadeout");
            star12.classList.remove("fadeout");
            star21.classList.remove("fadeout");
            star22.classList.remove("fadeout");
            moon.classList.remove("fadeout");
            
        } else {
            bg.classList.remove("background_color");
            header.classList.add("night");
            bg.classList.add("background_color2");
            star11.classList.add("fadeout");
             setTimeout(function(){ 
             star11.style.display = "none"; 
           }, 1000);
             star12.classList.add("fadeout");
             setTimeout(function(){ 
             star12.style.display = "none"; 
           }, 1000);
             star21.classList.add("fadeout");
             setTimeout(function(){ 
             star21.style.display = "none"; 
           }, 1000);
             star22.classList.add("fadeout");
             setTimeout(function(){ 
             star22.style.display = "none"; 
           }, 1000);
             moon.classList.add("fadeout");
             setTimeout(function() {
             moon.style.display = "none"; 
             }, 800); 
            header.style.color = "#5CB15D";
        }
       
}



//HUNTING RABBIT

var hunting = document.getElementById("rabbit3");
var catching = document.getElementById("rabbit5");
var audio3 = new Audio("sound/whip1.mp3");

hunting.addEventListener("mouseover", function() {
    hunting.style.display = "none";
    audio3.play();
    catching.style.display = "block";
    
});

catching.addEventListener("mouseout", function() {
    catching.style.display = "none";
    hunting.style.display = "block";
});






	
 	


          
    
