//<![CDATA[
create = function create(dom){

	/*
	*Creating container div and logo image element
	*/
	
	if(typeof dom === 'string'){
		 var hold = data[dom];
		
		var init = document.createElement('div');
		init.setAttribute('id', 'container');
		document.getElementsByTagName('body')[0].appendChild(init);

		var logo = document.createElement('img');
		logo.setAttribute('src', 'media/logo3.png');
		logo.setAttribute('alt', '#');
		logo.setAttribute('id', 'logo');
		document.getElementsByTagName('body')[0].appendChild(logo);
	
	}
	
	else {
		var  hold = data[dom.value];
		 var conf = dom.value;
		if(conf ===data.init[2]){
			eastBool = true;
		}
		
		while(dom!== document.getElementById('container').lastChild){
			document.getElementById('container').removeChild(document.getElementById('container').lastChild);
		}
}
		

		if(hold != undefined){
		
			var select = document.createElement('select');
			select.setAttribute('class', 'selStyle');

				if(ie7) {
					select.setAttribute('onchange', function(){create(this);});
				}
				else {
					if(document.addEventListener){
						select.addEventListener('mouseover',  function(){moveIt(this)}, true);

					}
					
					else {
						select.setAttribute('onmouseover', 'moveIt(this);');
					}
					
					select.setAttribute('onchange', 'create(this);');
				}
			
			var len = hold.length;
			
			for(var i=0; i < len; i+=2){
				var option = document.createElement('option');
				option.setAttribute('value', hold[i]);
				option.appendChild(document.createTextNode(hold[i+1]));
				select.appendChild(option);	
			}
			document.getElementById('container').appendChild(select);	
		}
	
	/*
	*Checking what gameplay and difficulty level the user choose
	*/
	var teamL = teamObj.west.play.length;
	for(var i = 0; i < teamL; i+=2){
		var playD = dom.value;
		if(teamObj.west.play[i] === playD){
			result += teamObj.west.play[i+1] + " ";
		}
		if(teamObj.east.play[i] === playD){
			result += teamObj.east.play[i+1] +" ";
		}
	}

	var teamLevel = teamObj.west.levels.length;
	for(var i =0; i < teamLevel; i+=2){
		var teamVal = dom.value;
		if(teamObj.east.levels[i] === teamVal){
			result += teamObj.east.levels[i+1] + " ";
		}
		if(teamObj.west.levels[i] === teamVal){
			result += teamObj.west.levels[i+1] + " ";
				
		}
	}
	var conf = dom.value;
		if(conf ===data.init[2]){
			eastBool = true;
		}
	
	if(!hold) {

		document.getElementById('container').removeChild(document.getElementsByTagName('select')[0]);
		document.getElementById('container').removeChild(document.getElementsByTagName('select')[1]);
		document.getElementById('container').removeChild(document.getElementById('container').firstChild);
		document.getElementsByTagName('body')[0].removeChild(document.getElementById('logo'));

		var choose = document.createElement('img');
		choose.setAttribute('src','media/choose.png');
		choose.setAttribute('alt', '#');
		choose.setAttribute('id', 'choose');
		document.getElementById('container').appendChild(choose);

		var playButton = document.createElement('button');
		playButton.setAttribute('id', 'playButton');
		playButton.appendChild(document.createTextNode("Let's Play!"));
		
		if(ie7) {
			playButton.setAttribute('onclick',function(){goForm();});
		}
		else{
			playButton.setAttribute('onclick', 'goForm();')
		}
		document.getElementById('container').appendChild(playButton);

		var divW = document.createElement('div');
		divW.setAttribute('id', 'west');
		if(document.attachEvent){
			divW.setAttribute('style', "top:27%;");
		}
		
		var divW2 = document.createElement('div');
		divW2.setAttribute('id', 'west2');
			if(document.attachEvent){
			divW2.setAttribute('style', "top:27%;");
		}
		
		var divE = document.createElement('div');
		divE.setAttribute('id', 'east');
			if(document.attachEvent){
			divE.setAttribute('style', 'top:27%;');
		}
		
		var divE2 = document.createElement('div');
		divE2.setAttribute('id', 'east2');
			if(document.attachEvent){
			divE2.setAttribute('style', 'stop:27%;');
		}
		
	var stockImg = document.createElement('img');
	var random =   Math.floor((Math.random() * 11) + 1);
	if(eastBool){
		stockImg.setAttribute('src', 'media/' +teamObj.west.teams[random] +'.jpg');
		stockImg.setAttribute('id', 'stockPic');
	}
	if(!eastBool){
		stockImg.setAttribute('id', 'stockPick2');
		stockImg.setAttribute('src', 'media/' +teamObj.east.teams[random] +'.jpg');
	}
	
	document.getElementById('container').appendChild(stockImg);
	
	/*
	*creating teams for the East for the user to select from
	*/
		for(var i=0, teamL = teamObj.east.teams.length; i< teamL; i++){
			var team = document.createElement('p');
			var teamID = teamObj.east.teams[i];
			team.setAttribute('id', teamObj.east.teams[i]);
			
			team.appendChild(document.createTextNode(teamObj.east.teams[i]));

			if(ie7){
				
				team.setAttribute('onclick', function(){pick(this);});
				team.setAttribute('onmouseover', function(){change(this);});
				team.setAttribute('onmouseout', function(){changeBack(this);});

			}
			else{
				team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this);');
					team.setAttribute('onmouseout', 'changeBack(this);');


			}
					
				if(i > 6){
					divE2.appendChild(team);
				}
				else{
					divE.appendChild(team);
				}
		}
		
		/**
		*Creating west teams for the user to select from
		*/
var teamOL = teamObj.west.teams.length;
		for(var i=0; i< teamOL; i++){
			var teamW = document.createElement('p');
			teamW.setAttribute('id', teamObj.west.teams[i]);
			teamW.appendChild(document.createTextNode(teamObj.west.teams[i]));

			if(ie7){
				teamW.setAttribute('onclick', function(){pick(this);});
				teamW.setAttribute('onmouseover', function(){change(this);});
				teamW.setAttribute('onmouseout', function(){changeBack(this);});
			}
			else{
				teamW.setAttribute('onclick', 'pick(this);');
				teamW.setAttribute('onmouseover', 'change(this);');
				teamW.setAttribute('onmouseout', 'changeBack(this);');

			}
				if(i > 3){
					divW2.appendChild(teamW);
				}
				else{
					divW.appendChild(teamW);
				}
		}
		
		document.getElementById('container').appendChild(divW);
		document.getElementById('container').appendChild(divW2);
		document.getElementById('container').appendChild(divE);
		document.getElementById('container').appendChild(divE2);
		
/**
*If the user selected the eastern conference then disable the onclick for western conference
*/
		if(eastBool){
			var divE = document.getElementById('west').getElementsByTagName('p');
			var divE2 = document.getElementById('west2').getElementsByTagName('p');
			var divEL = divE.length;
			var divEL2 = divE2.length
			for(var i =0;i < divEL; i++){
					divE[i].onclick = "";	
			}
			for(var i =0;i < divEL2; i++){
					divE2[i].onclick = "";	
			}

		}
		
		/**
		*If the user selected the western conference then disable the east
		*/
		else {		
			var divW = document.getElementById('east').getElementsByTagName('p');
			var divW2 = document.getElementById('east2').getElementsByTagName('p');
			var divWL = divW.length;
			var divWL2 = divW2.length;
			for(var i =0;i < divWL; i++){
					divW[i].onclick = "";	
					
			}
			for(var i =0;i < divWL2; i++){
					divW2[i].onclick = "";	
					
			}

		}
		
	}
							
			
}
//]]>
			





