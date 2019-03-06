document.addEventListener('DOMContentLoaded',function(){
	var button = document.querySelectorAll('ul.icon-bar li');
	var slide = document.querySelectorAll('ul.slide-bar li');
	var default1 = document.getElementsByClassName('default-display')[0];
	for(let i = 0; i<=button.length -1; i++){
		button[i].addEventListener('click',function(){
			/*Xoá class hiển thị mặc định*/
			default1.classList.remove('default-display');
			/*Lấy ra được slide tương ứng với nút click để hiển thị thông qua data-hienthi và id*/
			var slidehienthi = document.getElementById(this.getAttribute("data-hienthi"));

					
			for(let i=0;i<=slide.length-1;i++){
				slide[i].classList.remove('display-slide');
			}
			slidehienthi.classList.add('display-slide');

		for(let i = 0; i<=button.length -1; i++){
			button[i].classList.remove('active');
		}
		this.classList.add('active');
	})
	}
},false);