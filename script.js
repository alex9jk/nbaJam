if(!document.getElementById){
		window.location = 'https://www.mozilla.org/en-US/';
	}


var data = new Object();
// data['init'] = ['none','Choose a GamePlay!', 'head', 'Head to Head', 'team', 'Team Play'];
// data['head'] = ['none','Choose a difficulty!', 'headDiff', 'difficult', 'headEasy', 'Easy'];
// data['headDiff'] = ['none','East or West?', 'headDiffEast', 'East', 'headDiffWest', 'West'];
// data['headEasy'] = ['none','East or West?', 'headEasyEast', 'East', 'headEasyWest', 'West' ];
// data['team'] = ['none','Choose a difficulty!', 'teamDiff', 'Difficult', 'teamEasy', 'Easy'];
// data['teamDiff'] = ['none','East or West?', 'teamDiffEast', 'East', 'teamDiffWest', 'West'];
// data['teamEasy'] = ['none','East or West?', 'teamEasyEast', 'East', 'teamEasyWest', 'West'];

data['init'] = ['none','East or West?', 'east', 'East', 'west','West'];
data['east'] = ['none', 'Choose a difficulty!','eastRookie', 'rookie', 'eastVeteran', 'veteran', 'eastAllStar', 'Allstar'];
data['west'] = ['none', 'Choose a difficulty!','westRookie', 'rookie', 'westVeteran', 'veteran', 'westAllStar', 'Allstar'];
data['eastRookie'] =['none', 'Choose a game feature!', 'erTurbo','Unlimmited turbo', 'erBigHead', 'Big-Head Mode', 'erFire', '1 Shot Fire' ];
data['eastVeteran'] =['none', 'Choose a game feature!', 'evTurbo','Unlimmited turbo', 'evBigHead', 'Big-Head Mode', 'evFire', '1 Shot Fire' ];
data['eastAllStar'] =['none', 'Choose a game feature!', 'eaTurbo','Unlimmited turbo', 'eaBigHead', 'Big-Head Mode', 'eaFire', '1 Shot Fire' ];

data['westRookie'] =['none', 'Choose a game feature!', 'wrTurbo','Unlimmited turbo', 'wrBigHead', 'Big-Head Mode',  'wrFire', '1 Shot Fire' ];
data['westVeteran'] =['none', 'Choose a game feature!', 'wvTurbo','Unlimmited turbo', 'wvBigHead', 'Big-Head Mode', 'wvFire', '1 Shot Fire' ];
data['westAllStar'] =['none', 'Choose a game feature!', 'waTurbo','Unlimmited turbo', 'waBigHead', 'Big-Head Mode', 'waFire', '1 Shot Fire' ];









var pick = '';
var eastBool = false;


function create(dom){
	var teamArr = new Array('Atlanta','Charlotte','Chicago','Cleveland','Detroit','Indiana','Boston','Miami','New Jersey','New York','Orlando','Philadelphia','Washington','Golden State','L.A Clippers','L.A Lakers','Phoenix','Portland','Seattle','Sacramento','Dallas','Denver','Houston','Minnesota','San Antonio',
	'Utah');

	
		moveIt = function moveIt(dom){
				
				
				if(parseInt(dom.style.left) < 600){
					//my pos = my old pos + x

					dom.style.left = parseInt(dom.style.left) + 20 + 'px';
					
					//wraper function when you have arguments
					setTimeout(function(){moveIt(this);}, 5);
				
				}
				
			
			
			}
	
	pick = function pick(p) {
		if(document.getElementById('team')){
			document.getElementById('container').removeChild(document.getElementById('team'));
		}
		if(document.getElementById('team2')){
			document.getElementById('container').removeChild(document.getElementById('team2'));

		}
		
		var imgID = p.id;
		console.log(p.id);
		
		var img = document.createElement('img');
		img.setAttribute('alt', '#');
		img.setAttribute('src',  'media/' + imgID +'.jpg');
		
		if(eastBool){
			img.setAttribute('id', 'team');

		}
		else {
			img.setAttribute('id', 'team2');
		}
		document.getElementById('container').appendChild(img);


	}

	change = function change(dom){
		dom.style.backgroundColor = "DeepSkyBlue";

	}

	changeBack = function changeBack(dom){
		dom.style.backgroundColor ="";

	}

	if(typeof dom === 'string'){
		hold = data[dom];
		var init = document.createElement('div');
		init.setAttribute('id', 'container');
		document.getElementsByTagName('body')[0].appendChild(init);

		var logo = document.createElement('img');
		logo.setAttribute('src', 'media/logo3.png');
		logo.setAttribute('alt', '#');
		logo.setAttribute('id', 'logo');
		
	
		document.getElementsByTagName('body')[0].appendChild(logo);


		
			


	}
	else{
		hold = data[dom.value];
		if(dom.value === 'east'){
			eastBool = true;

		}

		

	}

	if(hold){
		
		
		console.log("elladsfo");
		var select = document.createElement('select');
		select.setAttribute('onchange', 'create(this);');
		select.setAttribute('class', 'selStyle');
		select.setAttribute('onmouseover', 'moveIt(this)');
		


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
		document.getElementById('container').removeChild(document.getElementsByTagName('select')[0]);

		var choose = document.createElement('img');
		choose.setAttribute('src','media/choose.png');
		choose.setAttribute('alt', '#');
		choose.setAttribute('id', 'choose');

		document.getElementById('container').appendChild(choose);

		var divW = document.createElement('div');
		divW.setAttribute('id', 'west');

		var divW2 = document.createElement('div');
		divW2.setAttribute('id', 'west2');

		var divE = document.createElement('div');
		divE.setAttribute('id', 'east');

		var divE2 = document.createElement('div');
		divE2.setAttribute('id', 'east2');


	if(eastBool){
		var stockImg = document.createElement('img');
		var random =  12 + Math.floor((Math.random() * 13) + 1);
		stockImg.setAttribute('src', 'media/' +teamArr[random] +'.jpg');
		stockImg.setAttribute('id', 'stockPic');
		document.getElementById('container').appendChild(stockImg);

		for(var i=0; i< 26; i++){
			var team = document.createElement('p');
			var teamID = teamArr[i];
			team.setAttribute('id', teamArr[i]);
			team.appendChild(document.createTextNode(teamArr[i]));
			
				if(i < 6){
					team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this)');
					team.setAttribute('onmouseout', 'changeBack(this)');
					divE.appendChild(team);
	
				}
				if(i >6 && i <= 13){
					team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this)');
					team.setAttribute('onmouseout', 'changeBack(this)');
					divE2.appendChild(team);
	
				}
				if(i > 13 && i <= 19){
					divW.appendChild(team);
	
				}
				 if (i > 19){
					divW2.appendChild(team);
	
				}
			}					
			
		}
		else {

			for(var i=0; i< 26; i++){
			var team = document.createElement('p');
			var teamID = teamArr[i];
			team.setAttribute('id', teamArr[i]);
			team.appendChild(document.createTextNode(teamArr[i]));
			
				if(i < 7){
					divE.appendChild(team);
	
				}
				if(i >7 && i <= 13){
					divE2.appendChild(team);
	
				}
				if(i > 13 && i <= 19){
					divW.appendChild(team);
					team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this)');
					team.setAttribute('onmouseout', 'changeBack(this)');
	
				}
				 if (i > 19){
					divW2.appendChild(team);
					team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this)');
					team.setAttribute('onmouseout', 'changeBack(this)');


				}
			}
		}

		document.getElementById('container').appendChild(divW);
		document.getElementById('container').appendChild(divW2);
		document.getElementById('container').appendChild(divE);
		document.getElementById('container').appendChild(divE2);
		
			// if(eastBool){
			// 	var ran = Math.floor((Math.random() * 15) + 1);
			// 	var comp = document.createElement('img');
			// 	comp.setAttribute('id', 'west');
			// 	comp.setAttribute('src', team[16 +ran]);

			// }
		console.log("elladsfo");


	}

console.log('shit');
}


