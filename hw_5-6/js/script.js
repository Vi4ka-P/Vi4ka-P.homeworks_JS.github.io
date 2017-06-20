var timer = {
	msec: 0,
	sec: 0,
	minutes: 0,
	hours: 0,
	timerInt: NaN,
	splitCount: 0,

	startTime: function() {
		timer.timerInt = setInterval(timer.count, 4);
		start.style.display = "none";
		pause.style.display = "inline-block";
		split.disabled = false;
	},

	count: function() {
		timer.msec += 4;

		if (timer.msec > 999) {
			timer.sec ++ ;
			timer.msec %= 1000;
		}
		
		if (timer.sec > 59) {
	 		timer.minutes ++ ;
 	 		timer.sec = 0;
 	 	}

 	 	if (timer.minutes > 59) {
 	 		timer.hours ++ ;
 	 		timer.minutes = 0;
 	 	}	

 	 	timer.printTime(); 
	},

	
	pauseTime: function () {
		if (timer.timerInt != NaN) {
			clearInterval(timer.timerInt);
		}
		pause.style.display = "none";
		start.style.display = "inline-block";

		timer.printStatus(1);
		split.disabled = true;
	},

	clearTime: function () {
		timer.pauseTime();
		timer.msec = 0;
		timer.sec = 0;
		timer.minutes = 0;
		timer.hours = 0;
		timer.printTime();
		statist.innerHTML = '';
		timer.splitCount = 0;
	},

	printTime: function () {

		var second, msecond, minutes, hours;

		if (timer.msec < 10) {
	 		msecond = '00' + String(timer.msec);
	 	} else if (timer.msec < 100) {
	 		msecond = '0' + String(timer.msec);
	 	} else {
	 		msecond = String(timer.msec);
	 	}

	 	if (timer.sec < 10) {
	 		second = '0' + String(timer.sec);
	 	} else {
	 		second = String(timer.sec);
	 	}

	 	if (timer.minutes < 10) {
	 		minutes = '0' + String(timer.minutes);
	 	} else {
	 		minutes = String(timer.minutes);
	 	}

	 	if (timer.hours < 10) {
	 		hours = '0' + String(timer.hours);
	 	} else {
	 		hours = String(timer.hours);
	 	}

	 	times.value = hours + ':' + minutes + ':' + second + '.' + msecond;
	 	// console.log(hours + ':' + minute + ':' + second + ':' + msecond);
	},

	printStatus: function (st) {
		timer.splitCount ++ ;
		if (timer.msec == 0 && timer.sec == 0 && timer.minutes == 0 && timer.hours == 0) {
			// statement
		} else {
			if (st === 1) {
				var p = document.createElement('p');  // создать новый тег style
		        p.innerHTML = timer.splitCount + ' Pause: ' + times.value;
				statist.appendChild(p);
			} else {
				var p = document.createElement('p');  // создать новый тег style
		        p.innerHTML = timer.splitCount + ' Split:&nbsp;&nbsp;&nbsp; ' + times.value;
				statist.appendChild(p);
				console.log(timer.timerInt);
			}
			
		}
		
	}
}

split.disabled = true;

pause.style.display = "none";

start.addEventListener("click", timer.startTime);

pause.addEventListener("click", timer.pauseTime);

split.addEventListener("click", timer.printStatus);

clear.addEventListener("click", timer.clearTime);