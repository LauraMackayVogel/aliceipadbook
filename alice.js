(function() {
	var startX = null;
	var startY = null;
	var dx = null;
	var direction = null;

	function reset() {
	    startX = null;
	    startY = null;
	    direction = null;
		dx = 0;
	}

	function onTouchMove(e) {
		if ( startX !== null ) {
		     if (e.touches.length > 1) {
		         reset();

		     } else {
		         dx = e.touches[0].pageX - startX;
		         var dy = e.touches[0].pageY - startY;
		         if (direction == null) {
		             direction = dx;
		         } else if ((direction < 0 && dx > 0) || (direction > 0 && dx < 0) || Math.abs(dy) > 110) {
		             reset();
		         }
		     }
		}
		e.preventDefault();
	}

	function onTouchEnd(e) {
		if ( startX !== null ) {
		     if (Math.abs(dx) > 40) {
				var swipelink = document.getElementById('swipe' + (dx > 0 ? 'right': 'left'));
				if ( swipelink ) {
					window.location.href = swipelink.href;
					e.preventDefault();
				}
		     }
			reset();
		}
	}

	function onTouchStart(e) {
	    if (e.touches.length == 1) {
	        startX = e.touches[0].pageX;
	        startY = e.touches[0].pageY;
	    }
	}

	document.addEventListener('touchstart', onTouchStart, false);
	document.addEventListener('touchmove', onTouchMove, false);
	document.addEventListener('touchend', onTouchEnd, false);
})();

(function() {
	var timeout;
	document.body.addEventListener('touchend', function() {
		clearTimeout(timeout);
		if ( /fadeinbuttonset/.test(document.body.className) ) {
			document.body.className = "";
		} else {
			document.body.className = "fadeinbuttonset";
			timeout = setTimeout(function() { document.body.className = ""; }, 5000)
		}
	});
})();
