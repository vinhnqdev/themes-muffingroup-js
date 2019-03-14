document.addEventListener('DOMContentLoaded',function(){
	var button = document.querySelectorAll('ul.icon-bar li');
	/*Check Button voi Slide tuong ung*/
	for(let i=0;i<=button.length-1;i++){
		if(button[i].classList[0] === 'active'){
			var slide_current = document.getElementById(button[i].getAttribute('data-hienthi'));
			
		}
	}
},false);