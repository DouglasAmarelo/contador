(function(){
	'use strict';

	let $form = document.querySelector('.form');
	let a;

	$form.addEventListener('submit', function(e) {
		e.preventDefault();
		var date = $form.querySelector('.date');

		console.log('Opa!');
		console.log( date.value );

		a = new Date( date.value );
		console.log( a.getTime() );

		countdown(a);
	}, false);


	function countdown(endDate) {
		let days, hours, minutes, seconds;

		endDate = new Date(endDate).getTime();

		if (isNaN(endDate)) {
			return;
		}

		setInterval(calculate, 1000);

		function calculate() {
			let startDate = new Date();
			startDate = startDate.getTime();

			let timeRemaining = parseInt((endDate - startDate) / 1000);

			if (timeRemaining >= 0) {
				days = parseInt(timeRemaining / 86400);
				timeRemaining = (timeRemaining % 86400);

				hours = parseInt(timeRemaining / 3600);
				timeRemaining = (timeRemaining % 3600);

				minutes = parseInt(timeRemaining / 60);
				timeRemaining = (timeRemaining % 60);

				seconds = parseInt(timeRemaining);

				document.querySelector('.days').innerHTML = parseInt(days, 10);
				document.querySelector('.hours').innerHTML = ("0" + hours).slice(-2);
				document.querySelector('.minutes').innerHTML = ("0" + minutes).slice(-2);
				document.querySelector('.seconds').innerHTML = ("0" + seconds).slice(-2);
			} else {
				return;
			}
		}
	}

	// countdown('04/01/2333 05:00:00 PM');
})();