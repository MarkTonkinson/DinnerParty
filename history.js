var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");



	var getRef = new Firebase(dinnerPartyRef + "/history")

	getRef.on("value", function(snapshot) {
	  var history = snapshot.val()
	  console.log(history)
	  console.log(Object.keys(history).length)

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

