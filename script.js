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

										





var imgID;
var result = "";
var pick = '';
var eastBool = false;


function create(dom){
	var teamArr = new Array('Atlanta','Charlotte','Chicago','Cleveland','Detroit','Indiana','Boston','Miami','New Jersey','New York','Orlando','Philadelphia','Washington','L.A Clippers','L.A Lakers','Phoenix','Portland','Golden State','Seattle','Sacramento','Dallas','Denver','Houston','Minnesota');

	
		moveIt = function moveIt(dom){
				console.log(parseInt(dom.style.left));
				
				if(parseInt(dom.style.left) < 600){
					//my pos = my old pos + x

					dom.style.left = parseInt(dom.style.left) + 20 + 'px';
					
					//wraper function when you have arguments
					setTimeout(function(){moveIt(dom);}, 5);
				
				}
				
			
			
			}
	validate = function validate(){
		var valBool = false;
		var errorMsg = "Please complete the following fields: ";
		var re = /\S+@\S+\.\S+/;
			if(!document.getElementsByName('first-name').value){
				errorMsg+= "First Name, ";
				valBool = true;
			}
			if(!document.getElementsByName('last-name').value){
				errorMsg+= "Last Name, ";
				valBool = true;
			}
			if(!re.test(document.getElementsByName('email')[0].value)){
				errorMsg += "email ";
				valBool = true;
			}

			if(valBool){

				var feedBack = document.createElement('div');
				feedBack.setAttribute('id', 'feedBack');
				feedBack.appendChild(document.createTextNode(errorMsg));
				document.getElementById('results').appendChild(feedBack);
				return false;
			}

			return true;



	}
	
	pick = function pick(p) {
		if(document.getElementById('team')){
			document.getElementById('container').removeChild(document.getElementById('team'));
		}
		if(document.getElementById('team2')){
			document.getElementById('container').removeChild(document.getElementById('team2'));

		}
		
		 imgID = p.id;
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

	goForm = function goForm(){
		var len = document.getElementById('west').getElementsByTagName('p').length;
		for(var i= 0; i <len;i++){
			console.log('hey');
			document.getElementById('west').getElementsByTagName('p')[i].onclick = "";
			document.getElementById('east2').getElementsByTagName('p')[i].onclick = "";
		}

		var lenE = document.getElementById('east').getElementsByTagName('p').length;
		console.log(lenE);
		for(var i=0; i< lenE; i++){
			
			document.getElementById('east').getElementsByTagName('p')[i].onclick = "";
		}

		var lenW = document.getElementById('west2').getElementsByTagName('p').length;
		for(var i=0; i< lenW; i++){
			document.getElementById('west2').getElementsByTagName('p')[i].onclick = "";
		}


		var divForm = document.createElement('div');
		divForm.setAttribute('id', 'formDiv');

		var form = document.createElement('form');
		form.setAttribute('action', 'index.html');
		form.setAttribute('method', 'get');
		form.setAttribute('onsubmit', 'return validate();');

		result += "Team: " + imgID;
		var resultDiv = document.createElement('div');
		resultDiv.setAttribute('id', 'results');
		var order = document.createElement('h1');
		order.appendChild(document.createTextNode('Your Order Summary:'));
		var orderP = document.createElement('p');
		orderP.appendChild(document.createTextNode(result));
		resultDiv.appendChild(order);
		resultDiv.appendChild(orderP);
		divForm.appendChild(resultDiv);

		
		
		var p = document.createElement('p');
		p.appendChild(document.createTextNode('First Name:'));
		var input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('name', 'first-name');
		input.setAttribute('maxlength', 10);
		form.appendChild(p);
		form.appendChild(input);
		

		var textLast = document.createElement('p');
		textLast.appendChild(document.createTextNode('Last Name:'));
		var inputLast = document.createElement('input');
		inputLast.setAttribute('type', 'text');
		inputLast.setAttribute('name', 'first-name');
		inputLast.setAttribute('maxlength', 10);
		form.appendChild(textLast);
		form.appendChild(inputLast);

		var textEmail = document.createElement('p');
		textEmail.appendChild(document.createTextNode('Email:'))
		var email = document.createElement('input');
		email.setAttribute('type', 'email');
		email.setAttribute('name', 'email');
		form.appendChild(textEmail);
		form.appendChild(email);

		var box = document.createElement('p');
		box.appendChild(document.createTextNode('Email:'));
		var textArea = document.createElement('textarea');
		textArea.setAttribute('rows', '5');
		textArea.setAttribute('cols', '30');
		form.appendChild(box);
		form.appendChild(textArea);

		var submit = document.createElement('input');
		submit.setAttribute('type', 'submit');
		form.appendChild(submit);


		divForm.appendChild(form);
		

		document.getElementById('container').appendChild(divForm);

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
		logo.setAttribute('onmouseover', 'moveIt(this)');
		
	
		document.getElementsByTagName('body')[0].appendChild(logo);


		
			


	}
	else{
		hold = data[dom.value];
		if(dom.value === 'east'){
			eastBool = true;


		}

		if(dom.value === 'eastRookie' || dom.value === 'westRookie'){
			result += "Level: Rookie";
		}
		if(dom.value === 'eastVeteran' || dom.value === 'westVeteran'){
			result += "Level: Veteran";
		}
		if(dom.value === 'eastAllStar' || dom.value === 'westAllStar') {
			result +="Level: Allstar";
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
		if(dom.value === 'wrTurbo' || dom.value === 'wvTurbo' || dom.value === 'waTurbo' || dom.value === 'erTurbo' || dom.value === 'evTurbo' || dom.value === 'eaTurbo'){
			result += "Feature: Unlimmited Turbo";
		}
		if(dom.value === 'erBigHead' || dom.value === 'evBigHead' || dom.value === 'eaBigHead' || dom.value === 'wrBigHead' || dom.value === 'wvBigHead' || dom.value === 'waBigHead'){
			result += "Feature: Big-Head Mode";
		}
		if(dom.value === 'erFire' || dom.value === 'evFire' || dom.value === 'eaFire' || dom.value === 'wrFire' || dom.value === 'wvFire' || dom.value === 'waFire'){
			result += "Feature: 1 Shot Fire";
		}
		console.log("done!");
		document.getElementsByTagName('body')[0].removeChild(document.getElementById('logo'));
		document.getElementById('container').removeChild(document.getElementsByTagName('select')[0]);

		var choose = document.createElement('img');
		choose.setAttribute('src','media/choose.png');
		choose.setAttribute('alt', '#');
		choose.setAttribute('id', 'choose');

		document.getElementById('container').appendChild(choose);

		var playButton = document.createElement('button');
		playButton.setAttribute('type', 'button');
		playButton.setAttribute('id', 'playButton');
		playButton.appendChild(document.createTextNode("Let's Play!"));
		playButton.setAttribute('onclick', 'goForm();')
		document.getElementsByTagName('body')[0].appendChild(playButton);

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
		var random =  11 + Math.floor((Math.random() * 13) + 1);
		stockImg.setAttribute('src', 'media/' +teamArr[random] +'.jpg');
		stockImg.setAttribute('id', 'stockPic');
		document.getElementById('container').appendChild(stockImg);

		for(var i=0; i< 24; i++){
			var team = document.createElement('p');
			var teamID = teamArr[i];
			team.setAttribute('id', teamArr[i]);
			team.appendChild(document.createTextNode(teamArr[i]));
			
				if(i <= 6){
					team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this)');
					team.setAttribute('onmouseout', 'changeBack(this)');
					divE.appendChild(team);
	
				}
				if(i >6 && i < 13){
					team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this)');
					team.setAttribute('onmouseout', 'changeBack(this)');
					divE2.appendChild(team);
	
				}
				if(i >= 13 && i < 19){
					divW.appendChild(team);
	
				}
				 if (i >= 19){
					divW2.appendChild(team);
	
				}
			}					
			
		}
		else {

			var stockImg2 = document.createElement('img');
			var random2 =  Math.floor((Math.random() * 12) + 1);
			stockImg2.setAttribute('src', 'media/' +teamArr[random2] +'.jpg');
			stockImg2.setAttribute('id', 'stockPic2');
			document.getElementById('container').appendChild(stockImg2);

			for(var i=0; i< 24; i++){
			var team = document.createElement('p');
			var teamID = teamArr[i];
			team.setAttribute('id', teamArr[i]);
			team.appendChild(document.createTextNode(teamArr[i]));
			
				if(i <= 6){
					divE.appendChild(team);
	
				}
				if(i >6 && i <13){
					divE2.appendChild(team);
	
				}
				if(i >= 13 && i < 19){
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


