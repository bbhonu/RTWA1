
	var counter = 0;

	gallery1 = ["img/me1.jpg", "img/me2.jpg", "img/me3.jpg", "img/me4.jpg"]
	gallery2 = ["img/place1.png", "img/place2.png", "img/place3.png", "img/place4.png", "img/place5.png", "img/place6.png", "img/place7.png"]
	gallery3 = ["img/fun1.png", "img/fun2.png", "img/fun3.png", "img/fun4.png"]


		function rotateImage1() {

		document.getElementById('image1').src = gallery1[counter];
		counter++;

		if (counter >= gallery1.length) {
			counter= 0;
		}
		
	}

		function rotateImage2() {
		document.getElementById('image2').src = gallery2[counter];
		counter++;

		if (counter >= gallery2.length) {
			counter= 0;
		}
	}


		function rotateImage3() {
		document.getElementById('image3').src = gallery3[counter];
		counter++;

		if (counter >= gallery3.length) {
			counter= 0;
		}
	}



