var buttons = document.getElementsByTagName('button');
for(var button of buttons){
	button.onclick = btnClick;
}
function btnClick(e){
	console.log(e.target.id);
	var action = document.getElementById(e.target.id).innerHTML;
	var res = document.getElementById('res');
	switch(action){
		case 'C': res.innerHTML = '';
					break;
		case 'E': var expr = res.innerHTML;
					var regEx = /(\d+)/g;
					/* convert binary digit expr to decimal expr */
					expr = expr.replace(regEx, function(binary){
						return parseInt(binary, 2);
					});
					/* convert decimal back to binary and display */
					res.innerHTML = Math.floor(eval(expr).toString(2));
					break;
		default: res.innerHTML += action;
				break;
	}
}