$(document).ready(function(){
	console.log('hey there')
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


	$("form").submit(function(event){
		var hello = $('#planned-theme').val()
		console.log(hello);
		event.preventDefault();
	})

}); //end document.ready