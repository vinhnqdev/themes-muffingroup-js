document.addEventListener('DOMContentLoaded',function(){
	var button = document.querySelectorAll('ul.icon-bar li');
	for(let i = 0; i<=button.length -1; i++){
		button[i].addEventListener('click',function(){
		for(let i = 0; i<=button.length -1; i++){
			button[i].classList.remove('active');
		}
		this.classList.add('active');
	})
	}
},false);