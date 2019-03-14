document.addEventListener('DOMContentLoaded',function(){
	var button = document.querySelectorAll('ul.icon-bar li');
	var slide = document.querySelectorAll('ul.slide-bar li');
	var default1 = document.getElementsByClassName('default-display')[0];	
	/*Handle addClass in Slide*/
	function handleSlide(button_load,string){
		var slide_current = document.getElementById(button_load.getAttribute('data-hienthi'));
		var anm_tren = document.querySelector(`#${slide_current.getAttribute("id")} img.nautren`);
		var anm_duoito = document.querySelector(`#${slide_current.getAttribute("id")} img.nauduoi1`);
		var anm_duoinho = document.querySelector(`#${slide_current.getAttribute("id")} img.nauduoi2`);
		if(string === 'add'){
			anm_tren.classList.add('animation_tren');
			anm_duoito.classList.add('animation_duoito');
			anm_duoinho.classList.add('animation_duoinho');
		}else{
			anm_tren.classList.remove('animation_tren');
			anm_duoito.classList.remove('animation_duoito');
			anm_duoinho.classList.remove('animation_duoinho');
		}
		
	}
	/*Auto Slide*/
	function check(){
		for(let i =0; i<=button.length-1;i++){
			if(button[i].classList[0] === 'active' && i<=button.length-2){

				/*Demo Delay*/
				var delaymili = 1000;
				setTimeout(function(){
					var slide_current = document.getElementById(button[i+1].getAttribute('data-hienthi'));
					button[i].classList.remove('active');
					button[i+1].classList.add('active');
					for(let i=0;i<=slide.length-1;i++){
						slide[i].classList.remove('display-slide');
					}
					slide_current.classList.add('display-slide');
					default1.classList.remove('default-display');
				},delaymili);
				/*Call addClass and removeClass*/
				handleSlide(button[i],'remove');
				handleSlide(button[i+1],'add');
				/**/	
				return;
			}else if(button[i].classList[0] === 'active' && i === button.length-1){
				var delaymili = 1000;
				setTimeout(function(){
					var slide_current = document.getElementById(button[0].getAttribute('data-hienthi'));
					button[i].classList.remove('active');
					button[0].classList.add('active');
					for(let i=0;i<=slide.length-1;i++){
						slide[i].classList.remove('display-slide');
					}
					slide_current.classList.add('display-slide');
				},delaymili);	
				handleSlide(button[i],'remove');
				handleSlide(button[0],'add');	
			}
		}
	}
		var remove_interval = setInterval(check,6000);
	/*Slide switch when click*/

	for(let i = 0; i<=button.length -1; i++){
		button[i].addEventListener('click',function(){
			handleSlide(this,'add');
			for(let i=0;i<=button.length-1;i++){
				if(button[i] !== this){
					handleSlide(button[i],'remove');
				}
			}
			clearInterval(remove_interval);
			remove_interval = setInterval(check,6000);
			var delaymili = 100;
				setTimeout(function(){
					for(let i = 0; i<=button.length -1; i++){
						button[i].classList.remove('active');
					}
					button[i].classList.add('active');
					/*Lấy ra được slide tương ứng với nút click để hiển thị thông qua data-hienthi và id*/
					var slidehienthi = document.getElementById(button[i].getAttribute("data-hienthi"));	
					for(let i=0;i<=slide.length-1;i++){
						slide[i].classList.remove('display-slide');
					}
					slidehienthi.classList.add('display-slide');
					/*Xoá class hiển thị mặc định*/
					default1.classList.remove('default-display');
				},delaymili);
	})
	}
},false);