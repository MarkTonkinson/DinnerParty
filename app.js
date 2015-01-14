$(document).ready(function(){
	// TODO: Find out how to hide this while the page is loading, rather than after
	$('#party-definition').hide();
	var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");

	var newDinner = function(){
		dinnerPartyRef.set({
			Dinner: {
			dinnerTheme: "The Great Wall Feast",
			location: "Tonkinson Apartment",
			time: "7pm",
			date: "January 27",
			firstCourse: "Boadza",
			secondCourse: "Mandarin Chicken Orange Salad or Peanut Dressing Salad",
			thirdCourse: "General Tzos and Orange Chicken with fried rice and steam vegetables",
			fourthCourse: "Dessert- to be determined",
			price: "$8.00"
			}

		})
	}

	var getRef = new Firebase(dinnerPartyRef + "/Dinner")

	getRef.on("value", function(snapshot) {
	  console.log(snapshot.val());
	  var partyInfo = snapshot.val();
	  $('#dinner-theme').text(partyInfo.dinnerTheme);
	  $('#dinner-location').text(partyInfo.location)
	  $('#dinner-time').text(partyInfo.time)
	  $('#dinner-price').text(partyInfo.price)
	  $('#first-course').text(partyInfo.firstCourse)
	  $('#second-course').text(partyInfo.secondCourse)
	  $('#third-course').text(partyInfo.thirdCourse)
	  $('#fourth-course').text(partyInfo.fourthCourse)
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
