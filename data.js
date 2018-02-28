
/**
*Data for constructor
*/
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
		moveIt = function moveIt(ele){
				
					if(isNaN(parseInt(ele.style.left))){
						ele.style.left = "5px";
					}
					if(isNaN(parseInt(ele.style.top))){
						ele.style.top = "5px";
					}
					if(parseInt(ele.style.left) < 450 && parseInt(ele.style.top) < 400){
						ele.style.left = parseInt(ele.style.left) + 5 + 'px';
						ele.style.top = parseInt(ele.style.top) + 1 + 'px';
						
						setTimeout(function(){moveIt(ele);}, 5);
					}
		}
/**
*Function that get's a cookie
*/
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
	*Function that validates form
	*/
	validate = function validate(){
	
		var valBool = false;
		var errorMsg = "Please complete the following fields: ";
		var re = /\S+@\S+\.\S+/;
		var firstName = document.getElementById('first-name').value;
		var lastName = document.getElementById('last-name').value;
		var emailLocal = document.getElementById('email').value;
			if(!document.getElementById('first-name').value){
				errorMsg+= "First Name, ";
				valBool = true;
				
			}
			else{
				if(localStorage){
				 	if(!localStorage.getItem('first')){
                		localStorage.setItem('first', document.getElementById('first-name').value);
            		}
            	}
            	else{
            		if(GetCookie('first') == null){
                		document.cookie = "first=" + firstName;
            		}

			}
		}
			if(!document.getElementById('last-name').value){
				errorMsg+= "Last Name, ";
				valBool = true;	
			}
			else{
				if(localStorage){
				 	if(!localStorage.getItem('last')){
                		localStorage.setItem('last', document.getElementById('last-name').value);
            		}
            	}
            	else{
            		if(GetCookie('last') == null){
                		document.cookie = "last=" + lastName;
            		}
			}
		}
			if(!re.test(document.getElementById('email').value)){
				errorMsg += "email ";
				valBool = true;
			}
			else{
				if(localStorage){
				 	if(!localStorage.getItem('email')){
                		localStorage.setItem('email', document.getElementById('email').value);
            		}
            	}
            	else{
            		if(GetCookie('email') == null){
                		document.cookie = "email=" + firstName;
            		}

			}
		}

			if(valBool){
				
				var feedBack = document.getElementById('feed-BackDiv');

				var p =document.createElement('p');
				p.setAttribute('class', 'feed');
				p.appendChild(document.createTextNode(errorMsg));

				feedBack.appendChild(p);

				if(document.getElementsByClassName('feed').length>1){
					feedBack.removeChild(document.getElementsByClassName('feed')[0]);
				}	
				feedBack.style.display = "block";
	
				return false;
			}

			return true;		
	}

	/*
*Function that creates the form element
*/
	goForm = function goForm(){

		/**
		*Disables onclick for teams
		*/
		var len = document.getElementById('west').getElementsByTagName('p').length;
		for(var i= 0; i <len;i++){
			document.getElementById('west').getElementsByTagName('p')[i].onclick = "";
			document.getElementById('east').getElementsByTagName('p')[i].onclick = "";
		}

		var lenE = document.getElementById('east2').getElementsByTagName('p').length;
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

			if(ie7){
				form.setAttribute('onsubmit', function(){return validate();});
		
			}
			else {
				form.setAttribute('onsubmit', 'return validate();');
			}

		result += "Team: " + imgID;
		var resultDiv = document.createElement('div');
		resultDiv.setAttribute('id', 'results');
		var order = document.createElement('h1');
		order.appendChild(document.createTextNode('Your Order Summary:'));
		var orderP = document.createElement('p');
		orderP.appendChild(document.createTextNode(result));

		var feedBackDiv = document.createElement('div');
		feedBackDiv.setAttribute('id', 'feed-BackDiv');
		resultDiv.appendChild(order);
		resultDiv.appendChild(orderP);
		resultDiv.appendChild(feedBackDiv);
		divForm.appendChild(resultDiv);

		var p = document.createElement('p');
		p.appendChild(document.createTextNode('First Name:'));
		var input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.setAttribute('id', 'first-name');
		input.setAttribute('maxlength', 10);


		if(localStorage){
			
				input.value=localStorage.getItem('first');
		}
		else {
			input.value = GetCookie('first');
			
		}
		form.appendChild(p);
		form.appendChild(input);
		
		var textLast = document.createElement('p');
		textLast.appendChild(document.createTextNode('Last Name:'));
		var inputLast = document.createElement('input');
		inputLast.setAttribute('type', 'text');
		inputLast.setAttribute('id', 'last-name');
		inputLast.setAttribute('maxlength', 10);

		if(localStorage){
			if(localStorage.getItem('last')){

				inputLast.value=localStorage.getItem('last');
			}
			
		}
		else {
			inputLast.value = GetCookie('last');
		}
		form.appendChild(textLast);
		form.appendChild(inputLast);

		var textEmail = document.createElement('p');
		textEmail.appendChild(document.createTextNode('Email:'))
		var email = document.createElement('input');
		email.setAttribute('type', 'email');
		email.setAttribute('id', 'email');

		if(localStorage){
			if(localStorage.getItem('email')){

				email.value=localStorage.getItem('email');
			}
			
		}
		else {
			email.value = GetCookie('email');
		}
		form.appendChild(textEmail);
		form.appendChild(email);

		var box = document.createElement('p');
		box.appendChild(document.createTextNode('Special Requests:'));
		var textArea = document.createElement('textarea');
		textArea.setAttribute('rows', '5');
		textArea.setAttribute('cols', '30');
		form.appendChild(box);
		form.appendChild(textArea);

		var submit = document.createElement('input');
		submit.setAttribute('type', 'submit');
		submit.setAttribute('id','sub');
		submit.setAttribute('value','submit');
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
