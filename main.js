$(document).keydown(function(event) {
	switch (event.keyCode) {
		case 37: window.location = '{{{ prevUrl }}}'; break;
		case 39: window.location = '{{{ nextUrl}}}'; break;
	}
}