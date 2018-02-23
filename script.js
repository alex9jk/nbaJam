
//ie, reset, removeno
var data = new Object();

data['init'] = ['none','East or West?', 'east', 'East', 'west','West'];
data['east'] = ['none', 'Choose a difficulty!','eastRookie', 'rookie', 'eastVeteran', 'veteran', 'eastAllStar', 'Allstar'];
data['west'] = ['none', 'Choose a difficulty!','westRookie', 'rookie', 'westVeteran', 'veteran', 'westAllStar', 'Allstar'];
data['eastRookie'] =['none', 'Choose a game feature!', 'eTurbo','Unlimmited turbo', 'eBigHead', 'Big-Head Mode', 'eFire', '1 Shot Fire' ];
data['eastVeteran'] =['none', 'Choose a game feature!', 'eTurbo','Unlimmited turbo', 'eBigHead', 'Big-Head Mode', 'eFire', '1 Shot Fire' ];
data['eastAllStar'] =['none', 'Choose a game feature!', 'eTurbo','Unlimmited turbo', 'eBigHead', 'Big-Head Mode', 'eFire', '1 Shot Fire' ];

data['westRookie'] =['none', 'Choose a game feature!', 'wTurbo','Unlimmited turbo', 'wBigHead', 'Big-Head Mode',  'wFire', '1 Shot Fire' ];
data['westVeteran'] =['none', 'Choose a game feature!', 'wTurbo','Unlimmited turbo', 'wBigHead', 'Big-Head Mode', 'wFire', '1 Shot Fire' ];
data['westAllStar'] =['none', 'Choose a game feature!', 'wTurbo','Unlimmited turbo', 'wBigHead', 'Big-Head Mode', 'wFire', '1 Shot Fire' ];

var teamArr = new Array('Atlanta','Charlotte','Chicago','Cleveland','Detroit','Indiana','Boston','Miami','New Jersey','New York','Orlando','Philadelphia','Washington','L.A Clippers','L.A Lakers','Phoenix','Portland','Golden State','Seattle','Sacramento','Dallas','Denver','Houston','Minnesota');

	var teamObj = {
		east: {
			teams:['Atlanta','Charlotte','Chicago','Cleveland','Detroit','Indiana','Boston','Miami','New Jersey','New York','Orlando','Philadelphia','Washington'],
			levels:['eastRookie','Rookie','eastVeteran','Veteran','eastAllStar','AllStar'],
			play:['eTurbo','Unlimmited Turbo','eBigHead','Big-Head Mode', 'eFire','1 Shot Fire']

		},
		west: {
			teams:['L.A Clippers','L.A Lakers','Phoenix','Portland','Golden State','Seattle','Sacramento','Dallas','Denver','Houston','Minnesota'],
			levels:['westRookie','Rookie','westVeteran','Veteran','westAllStar','AllStar'],
			play:['wTurbo','Unlimmited Turbo','wBigHead','Big-Head Mode','wFire', '1 Shot Fire']
		}
	};
										
var imgID;
var result = "";
var pick = '';
var eastBool = false;
var hold;

/*
	*function that animates select options
	*/
		moveIt = function moveIt(){
				var sel = document.getElementsByTagName('select').length;	
			if(document.getElementsByTagName('select').length > 0){

				for(var i =0; i < sel;i++){
					var selT = document.getElementsByTagName('select')[i];

				}
					if(isNaN(parseInt(selT.style.left))){
						selT.style.left = "5px";
					}
					if(isNaN(parseInt(selT.style.top))){
						selT.style.top = "5px";
					}
					if(parseInt(selT.style.left) < 450 && parseInt(selT.style.top) < 400){
						selT.style.left = parseInt(selT.style.left) + 5 + 'px';
						selT.style.top = parseInt(selT.style.top) + 1 + 'px';
						
						setTimeout(moveIt, 5);
					}
				}		
			}

	/*
	*Function that validates form
	*/
	validate = function validate(){
		var valBool = false;
		var errorMsg = "Please complete the following fields: ";
		var re = /\S+@\S+\.\S+/;
		var firstName = document.getElementsByName('first-name')[0].value
		var lastName = document.getElementsByName('last-name')[0].value
		var emailLocal = document.getElementsByName('email')[0].value

			if(!document.getElementsByName('first-name')[0].value){
				errorMsg+= "First Name, ";
				valBool = true;
			}
			if(!document.getElementsByName('last-name')[0].value){
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

			if(localStorage){
				localStorage.setItem('first',firstName);
				localStorage.setItem('last',lastName);
				localStorage.setItem('email',emailLocal);
			}
			else{
				document.cookie = "first=" +firstName;
				document.cookie = "last=" + lastName;
				document.cookie = "email=" + emailLocal;
			}

			return true;
	}

	GetCookie = function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieVal (j);
			}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
		}
	return null;
}

	/*
*Function that creates the form element
*/
	goForm = function goForm(){
		var len = document.getElementById('west').getElementsByTagName('p').length;
		for(var i= 0; i <len;i++){
			document.getElementById('west').getElementsByTagName('p')[i].onclick = "";
			document.getElementById('east').getElementsByTagName('p')[i].onclick = "";
		}

		var lenE = document.getElementById('east2').getElementsByTagName('p').length;
		console.log(lenE);
		for(var i=0; i< lenE; i++){
			document.getElementById('east2').getElementsByTagName('p')[i].onclick = "";
			
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


		if(localStorage){
			var fLocal = localStorage.getItem('first');
			input.setAttribute('value', fLocal);
		}
		else {
			var fCook = document.GetCookie('first');
			input.setAttribute('value', fCook);
		}
		form.appendChild(p);
		form.appendChild(input);
		
		var textLast = document.createElement('p');
		textLast.appendChild(document.createTextNode('Last Name:'));
		var inputLast = document.createElement('input');
		inputLast.setAttribute('type', 'text');
		inputLast.setAttribute('name', 'last-name');
		inputLast.setAttribute('maxlength', 10);

		if(localStorage){
			var lLocal = localStorage.getItem('last');
			inputLast.setAttribute('value', lLocal);
		}
		else {
			var lCook = document.GetCookie('last');
			inputLast.setAttribute('value', lCook);
		}
		form.appendChild(textLast);
		form.appendChild(inputLast);

		var textEmail = document.createElement('p');
		textEmail.appendChild(document.createTextNode('Email:'))
		var email = document.createElement('input');
		email.setAttribute('type', 'email');
		email.setAttribute('name', 'email');

		if(localStorage){
			var eLocal = localStorage.getItem('email');
			email.setAttribute('value', eLocal);
		}
		else {
			var eCook = document.GetCookie('email');
			input.setAttribute('value', eCook);
		}
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

	/*
	*Function that displays image of team selected.
	*/
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




	/*
	*Function that changes the background color of the team names
	*/
	change = function change(dom){
		dom.style.backgroundColor = "DeepSkyBlue";

	}

	/*
	*Function that changes back the background color of the team names
	*/
	changeBack = function changeBack(dom){
		dom.style.backgroundColor ="";

	}
/*
*Constructor function
*select element for argument
**/
function create(dom){
	
	var bod = document.getElementsByTagName('body')[0];
	bod.addEventListener('load',  moveIt, true);

	/*
	*Creating container div and logo image element
	*/
	

	if(typeof dom === 'string'){
		hold = data[dom];
		
		var init = document.createElement('div');
		init.setAttribute('id', 'container');
		//init.setAttribute('onload', 'moveIt()');
		document.getElementsByTagName('body')[0].appendChild(init);

		var logo = document.createElement('img');
		logo.setAttribute('src', 'media/logo3.png');
		logo.setAttribute('alt', '#');
		logo.setAttribute('id', 'logo');
		//logo.setAttribute('onload', 'moveIt();');
		
		document.getElementsByTagName('body')[0].appendChild(logo);

		var select = document.createElement('select');
		select.setAttribute('onchange', 'create(this)');
		//select.setAttribute('onchange', function(){create(this);});
		select.setAttribute('class', 'selStyle');
			
		select.addEventListener('change',  moveIt, true);
		
		var len = hold.length;
		
		for(var i=0; i < len; i+=2){
			var option = document.createElement('option');
			option.setAttribute('value', hold[i]);
			option.appendChild(document.createTextNode(hold[i+1]));
			select.appendChild(option);	

		}
		document.getElementById('container').appendChild(select);

	}
	if(typeof dom !== 'string'){
		hold = data[dom.value];
		while(dom!== document.getElementById('container').lastChild){
			document.getElementById('container').removeChild(document.getElementById('container').lastChild);
		}

		if(hold){
		
			var select = document.createElement('select');
			select.setAttribute('onchange', 'create(this)');
			//select.setAttribute('onchange', function(){create(this);});
			select.setAttribute('class', 'selStyle');
				
			select.addEventListener('change',  moveIt, true);
			
			var len = hold.length;
			
			for(var i=0; i < len; i+=2){
				var option = document.createElement('option');
				option.setAttribute('value', hold[i]);
				option.appendChild(document.createTextNode(hold[i+1]));
				select.appendChild(option);	
	
			}
			document.getElementById('container').appendChild(select);	
		}
	}

	var teamL = teamObj.west.play.length;
	for(var i = 0; i < teamL; i+=2){
		var playD = dom.value;
		if(teamObj.west.play[i] === playD){
			result += teamObj.west.play[i+1];
		}
		if(teamObj.east.play[i] === playD){
			result += teamObj.east.play[i+1];
		}
	}

	var teamLevel = teamObj.west.levels.length;
	for(var i =0; i < teamLevel; i+=2){
		var teamVal = dom.value;
		if(teamObj.east.levels[i] === teamVal){
			result += teamObj.east.levels[i+1];
		}
		if(teamObj.west.levels[i] === teamVal){
			result += teamObj.west.levels[i+1];
				console.log('west')
		}
	}
	var conf = dom.value;
		if(conf ===data.init[2]){
			eastBool = true;
		}

	
		

	if(!hold) {
		
		
		console.log('fas');
		document.getElementsByTagName('body')[0].removeChild(document.getElementById('logo'));

		// var selLeng = document.getElementsByTagName('select').length;
		// for(var i=0; i< selLeng;i++){
		// document.getElementById('container').removeChild(document.getElementsByTagName('select')[i])
		
		// 	console.log('working');
		// }	

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

	var stockImg = document.createElement('img');
	if(eastBool){
		
		var random =  11 + Math.floor((Math.random() * 13) + 1);
		stockImg.setAttribute('id', 'stockPic');
	}
	if(!eastBool){
		random = Math.floor((Math.random() * 13) + 1);
		stockImg.setAttribute('id', 'stockPick2');

	}
	stockImg.setAttribute('src', 'media/' +teamArr[random] +'.jpg');
	document.getElementById('container').appendChild(stockImg);
	console.log(teamObj.east.teams.length);
		for(var i=0, teamL = teamObj.east.teams.length; i< teamL; i++){
			var team = document.createElement('p');
			var teamID = teamObj.east.teams[i];
			team.setAttribute('id', teamObj.east.teams[i]);
			console.log(teamObj.east.teams[i]);
			team.appendChild(document.createTextNode(teamObj.east.teams[i]));
					team.setAttribute('onclick', 'pick(this);');
					team.setAttribute('onmouseover', 'change(this);');
					team.setAttribute('onmouseout', 'changeBack(this);');
				if(i > 6){
					divE2.appendChild(team);
				}
				else{
					divE.appendChild(team);
				}
		}
		
console.log(teamObj.west.teams.length);
// var teamW =teamObj.west.teams.length;
		for(var i=0; i< 11; i++){
			var teamW = document.createElement('p');
			//var teamIDW = teamObj.west.teams[i];
			teamW.setAttribute('id', teamObj.west.teams[i]);
			teamW.appendChild(document.createTextNode(teamObj.west.teams[i]));
			console.log(teamObj.west.teams[i]);
			
					teamW.setAttribute('onclick', 'pick(this);');
					teamW.setAttribute('onmouseover', 'change(this);');
					teamW.setAttribute('onmouseout', 'changeBack(this);');
				if(i > 5){
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
		
		else{
			var divW = document.getElementById('east').getElementsByTagName('p');
			var divW2 = document.getElementById('east2').getElementsByTagName('p');
			var divWL = divW.length;
			var divWL2 = divW2.length;
			for(var i =0;i < divWL; i++){
					divW[i].onclick = "";	
					console.log('hello');
			}
			for(var i =0;i < divWL2; i++){
					divW2[i].onclick = "";	
					console.log('hello');
			}

		}
		
	}
							
			
}
			






