if(!document.getElementById){
		window.location = 'https://www.mozilla.org/en-US/';
	}


var data = new Object();
data['init'] = ['none','Choose a GamePlay!', 'head', 'Head to Head', 'team', 'Team Play'];
data['head'] = ['none','Choose a difficulty!', 'headDiff', 'difficult', 'headEasy', 'Easy'];
data['headDiff'] = ['none','East or West?', 'headDiffEast', 'East', 'headDiffWest', 'West'];
data['headEasy'] = ['none','East or West?', 'headEasyEast', 'East', 'headEasyWest', 'West' ];
data['team'] = ['none','Choose a difficulty!', 'teamDiff', 'Difficult', 'teamEasy', 'Easy'];
data['teamDiff'] = ['none','East or West?', 'teamDiffEast', 'East', 'teamDiffWest', 'West'];
data['teamEasy'] = ['none','East or West?', 'teamEasyEast', 'East', 'teamEasyWest', 'West'];

var west = new Array('Golden State','L.A Clippers','L.A Lakers','Phoenix','Portland','Seattle','Sacramento','Dallas','Denver','Houston','Minnesota','San Antonio','Utah');
var east = new Array('Atlanta','Charlotte','Chicago','Cleveland','Detroit','Indiana','Boston','Miami','New Jersey','New York','Orlando','Philadelphia','Washington');

function moveIt(img){
	console.log('yo');
		if(parseInt(img.style.left) < 300){
				console.log('this');	
			img.style.left = parseInt(img.style.left) + 20 + 'px';
			setTimeout(function(){moveIt(img);}, 5);
		}
	
	}



function create(dom){

	var teamPlay = false;
	var headPlay = false;
	var eastPlay = false;
	var westPlay = false;

	
	function pick(span) {
		span.style.backgroundColor = "blue";
		var id = span.id;
		var img = document.createElement('img');
		img.setAttribute('alt', '#');
		img.setAttribute('src', 'id'+ '.jpg');
		img.setAttribute('id', 'team');


	}

	if(typeof dom === 'string'){
		hold = data[dom];
		var init = document.createElement('div');
		init.setAttribute('id', 'container');
		document.getElementsByTagName('body')[0].appendChild(init);

		var logo = document.createElement('img');
		logo.setAttribute('src', 'logo3.png');
		logo.setAttribute('alt', '#');
		logo.setAttribute('id', 'logo');
	
		document.getElementsByTagName('body')[0].appendChild(logo);
		var move = document.getElementById('logo');
			if(parseInt(move.style.left) < 300){
				console.log('this');	
			move.style.left = parseInt(move.style.left) + 300 + 'px';
			
		}


	}
	else{
		hold = data[dom.value];

		if(dom.value === 'head'){
			headPlay = true;

		}
		else if(dom.value === 'east'){
			eastPlay = true;
		}
	
		if(dom.value === 'team'){
			teamPlay = true;

		}

		else if(dom.value === 'east'){
			eastPlay = true;
		}

	}

	if(hold){
		
		
		console.log("elladsfo");
		var select = document.createElement('select');
		select.setAttribute('onchange', 'create(this);');
		select.setAttribute('class', 'selStyle');

		var len = hold.length;
		
		for(var i=0; i < len; i+=2){
			console.log('h');
			var option = document.createElement('option');
			option.setAttribute('value', hold[i]);
			option.appendChild(document.createTextNode(hold[i+1]));
			select.appendChild(option);	

		}

		document.getElementById('container').appendChild(select);

		while(dom !== document.getElementById('container').lastChild){
		 	document.getElementById('container').removeChild(dom);
		 	console.log("elladsfo");
		}
	}
	else {
		console.log("done!");
		document.getElementsByTagName('body')[0].removeChild(document.getElementById('logo'));
		document.getElementsByTagName('body')[0].style.backgroundImage = "url(choose.png)";

		for(var i=0, len =west.length; i< len; i++){
			var team = document.createElement('span');
			team.setAttribute('id', 'west[i]');
			team.appendChild(document.createTextNode(west[i]));

			var divW = document.createElement('div');
			divW.setAttribute('id', 'west');
			divW.appendChild(team);

			document.getElementById('containter').appendChild(divW);

			var teamE = document.createElement('span');
			teamE.setAttribute('onclick', 'pick(this);');
			teamE.setAttribute('id', 'east[i]');
			teamE.appendChild(document.createTextNode(east[i]));

			var divE = document.createElement('div');
			divE.setAttribute('id', 'east');
			divW.appendChild(teamE);
			document.getElementById('containter').appendChild(divE);		
			
		}
		
			if(teamPlay && eastPlay){
				var ran = Math.floor((Math.random() * 15) + 1);
				var comp = document.createElement('img');
				comp.setAttribute('id', 'west');
				comp.setAttribute('src', west[ran]);
				for(var i=0; i <west.length; i++){
					document.getElementsByTagName('span')[i].onclick = "";

				}
			

			}
		console.log("elladsfo");


	}

console.log('shit');
}


