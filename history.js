var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");



	var getRef = new Firebase(dinnerPartyRef + "/history")

	getRef.on("value", function(snapshot) {
		var history = snapshot.val()
		
		var historyLength = Object.keys(history).length

		for(var i = 1; i <= historyLength; i++){
			$('#dynamic-history').append('<table></table>');
			var newTable = $('#dynamic-history').children()
			var dinner = "dinner" + i
			
			console.log(history[dinner])
			//could reduce code here by changing the tags to a variable
			//var open = '<tr><td>'
			newTable.append('<tr><td> Dinner Theme : ' + history[dinner].dinnerTheme + '</td><td> First Course : ' + history[dinner].firstCourse + '</tr></td>')
			newTable.append('<tr><td> Location : ' + history[dinner].location + '</td><td> Second Course : ' + history[dinner].secondCourse + '</td></tr>')
			newTable.append('<tr><td> Time : ' + history[dinner].time + '<td> Third Course : ' + history[dinner].thirdCourse + '</td></tr>')
			newTable.append('<tr><td> Date : ' + history[dinner].date + '<td> Fourth Course : ' + history[dinner].fourthCourse + '</td>')
			newTable.append('<tr><td> Price : ' + history[dinner].price + '</td></tr>')
		
			
			newTable.append('<tr><td> Spots Available : ' + history[dinner].spotsAvailable + '</td></tr>')
			newTable.append('<tr><td> Attendees : ' + history[dinner].attendees + '</td></tr>')


			

		}



	  // var partyInfo = snapshot.val();
	  // $('#dinner-theme').text(partyInfo.dinnerTheme);
	  // $('#dinner-location').text(partyInfo.location)
	  // $('#dinner-time').text(partyInfo.time)
	  // $('#dinner-price').text(partyInfo.price)
	  // $('#first-course').text(partyInfo.firstCourse)
	  // $('#second-course').text(partyInfo.secondCourse)
	  // $('#third-course').text(partyInfo.thirdCourse)
	  // $('#fourth-course').text(partyInfo.fourthCourse)
	  // $('#spots-left').text(partyInfo.spotsAvailable - partyInfo.attendees + '/' + partyInfo.spotsAvailable)
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

