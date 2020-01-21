/* Function to check if an element is visible */

function isVisible(elem) {
	elem = document.getElementById(elem);
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/* Function to download resume */

function downloadResume() {

	/* Display progress bar */

	M.Modal.getInstance(progressDialogModal).open();

	$.get('https://wildscript.tech/resume', function (data) {

		/* Hide progress bar */

		M.Modal.getInstance(progressDialogModal).close();

	}).fail(function () {

		/* Hide progress bar */

		M.Modal.getInstance(progressDialogModal).close();

		/* Display error message */

		Swal.fire('Oops!', 'Something went wrong.', 'error');

	});
}

/* Main function */

window.onload = function () {

	/* Register a service worker */

	if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }

	/* Update footer year */

	$("#footerYear").html(new Date().getFullYear().toString());

	/* Initialize Materialize CSS components */

	$('.modal#progressDialogModal').modal({ dismissible: false });
	$('.tooltipped').tooltip();

	/* Form Field Monitors */

	setInterval(function () {

		/* Collect Value */

		email = $('#email').val();

		/* Validate Value */

		if (email.match('[a-z0-9._%+-]+@+[a-z]+\.+[a-z]') !== null) $('#submit').removeClass('disabled'); else $('#submit').addClass('disabled');

	}, 100);

	/* Display progress bar */

	M.Modal.getInstance(progressDialogModal).open();

	/* Initialise Firebase */

	var firebaseConfig = {
		apiKey: "AIzaSyCmZ7ZPW-MTKYBYMKm61BUNegcN6LHImXs",
		authDomain: "wildscript-tech.firebaseapp.com",
		databaseURL: "https://wildscript-tech.firebaseio.com",
		projectId: "wildscript-tech",
		storageBucket: "wildscript-tech.appspot.com",
		messagingSenderId: "165008496476",
		appId: "1:165008496476:web:8fc21657e7c97eaf8e1399",
		measurementId: "G-YHZ9SJM4SF"
	};
	firebase.initializeApp(firebaseConfig);

	/* Lazy load necessary JS files */

	$.when(
		$.getScript("resources/scripts/firebase-analytics.js"),
		$.getScript("resources/scripts/sweetalert.js"),
		$.Deferred(function (deferred) {
			$(deferred.resolve);
		})
	).done(function () {

		/* Initialize Firebase services */

		firebase.analytics();

		/* Hide progress bar */

		M.Modal.getInstance(progressDialogModal).close();

		/* Handle what happens when the user submits an email address */

		$('#submit').click(function () {

			/* Display progress bar */

			M.Modal.getInstance(progressDialogModal).open();

			$.get('https://wildscript.tech/addEmail?email=' + email, function (data) {
				if (data) {

					/* Hide progress bar */

					M.Modal.getInstance(progressDialogModal).close();

					/* Display success message */

					Swal.fire('Perfect!', 'I\'ll stay in touch.', 'success');

				}
				else {

					/* Hide progress bar */

					M.Modal.getInstance(progressDialogModal).close();

					/* Display error message */

					Swal.fire('Oops!', 'Something went wrong.', 'error');

				}
			}).fail(function () {

				/* Hide progress bar */

				M.Modal.getInstance(progressDialogModal).close();

				/* Display error message */

				Swal.fire('Oops!', 'Something went wrong.', 'error');

			});

			/* Handle what happens when the user clicks on the download resume button in the footer */

			$('#download_resume_footer').click(function () { downloadResume(); });

		});

		/* Begin execution of non-critical code */

	});

}