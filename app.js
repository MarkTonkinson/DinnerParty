$(document).ready(function(){
	
	$('#party-definition').hide();
	var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");



	var getRef = new Firebase(dinnerPartyRef + "/currentDinner")

	getRef.on("value", function(snapshot) {
	  console.log(snapshot.val());

	  var partyInfo = snapshot.val();
	  $('#dinner-theme').text(partyInfo.dinnerTheme);
	  $('#dinner-location').text(partyInfo.location)
	  $('#dinner-time').text(partyInfo.time)
	  $('#dinner-date').text(partyInfo.date)
	  $('#dinner-price').text(partyInfo.price)
	  $('#first-course').text(partyInfo.firstCourse)
	  $('#second-course').text(partyInfo.secondCourse)
	  $('#third-course').text(partyInfo.thirdCourse)
	  $('#fourth-course').text(partyInfo.fourthCourse)
	  $('#spots-left').text(partyInfo.spotsAvailable - partyInfo.attendees + '/' + partyInfo.spotsAvailable)
		console.log('done')
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

	
	$('section').ready(function(){
		$('section').slideDown("slow");
	})
	

	$('#show-party-definition').on('click', function(){
		$('#party-definition').show();
		$('#show-party-definition').hide();
	})

	$('#party-definition').on('click', function(){
		$('#party-definition').hide();
		$('#show-party-definition').show();
	})

});//end document.ready
