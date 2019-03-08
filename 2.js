document.addEventListener('DOMContentLoaded', function(){
	var button = document.querySelectorAll('ul.icon-bar li');
	var slide = document.querySelectorAll('ul.slide-bar li');
	var default1 = document.getElementsByClassName('default-display')[0];	
	function check(){
		for(let i =0; i<=button.length-1;i++){
			if(button[i].classList[0] === 'active' && i<=button.length-2){
				button[i].classList.remove('active');
				button[i+1].classList.add('active');
				var slide_current = document.getElementById(button[i+1].getAttribute('data-hienthi'));
				default1.classList.remove('default-display');
				for(let i=0;i<=slide.length-1;i++){
					slide[i].classList.remove('display-slide');
				}
				slide_current.classList.add('display-slide');
				return;
			}else if(button[i].classList[0] === 'active' && i === button.length-1){
				button[i].classList.remove('active');
				button[0].classList.add('active');
				for(let i=0;i<=slide.length-1;i++){
					slide[i].classList.remove('display-slide');
				}
				var slide_current = document.getElementById(button[0].getAttribute('data-hienthi'));
				slide_current.classList.add('display-slide');
			}
			
		}
	}
	setInterval(check,4000);
})





