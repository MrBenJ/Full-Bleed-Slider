$(document).ready(function() {

	var images = document.getElementsByClassName('image');
	var i = 0;
	var currentImage = i;
	var IMAGE_ACTIVE = 'image active';
	var IMAGE_INACTIVE = 'image';

	var slideshow = document.getElementById('slides');

	images[i].setAttribute('class', IMAGE_ACTIVE); // Sets the first image to be visible
	
	$('#back-button').click(function() {
		console.log("Back Clicked");
		images[currentImage].setAttribute('class', IMAGE_INACTIVE);


		stepBackwards();

	});

	$('#forward-button').click(function() {
		console.log("Forward Clicked");
		images[currentImage].setAttribute('class', IMAGE_INACTIVE);

		stepForwards();
	})

	function stepBackwards() {
		i--;
		console.log(i);
		if (i < 0) {
			i = (images.length - 1);
			console.log("CONDITION HIT i = " + i);
		}


		images[i].setAttribute('class', IMAGE_ACTIVE);
		currentImage = i;


	}

	function stepForwards() {
		i++;
				console.log(i);

		if(i === images.length) {
			i = 0;
			console.log("CONDITION HIT i = " + i);
		}

		images[i].setAttribute('class', IMAGE_ACTIVE);
		currentImage = i;
	}


});

