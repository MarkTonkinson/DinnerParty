$(document).ready(function(){
	
	var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");

	var newDinner = function(dinnerObj){
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
			price: "$8.00",
			spotsAvailable: 6,
			attendees: 0
			}

		})
	}
	
	


	$("form").submit(function(event){
		var dinner = {
			dinnerTheme: $('#planned-theme').val(),
			location: $('#planned-location').val(),
			time: $('#planned-time').val(),
			price: $('#planned-price').val(),
			date: $('#planned-date').val(),
			firstCourse: $('#planned-course1').val(),
			secondCourse: $('#planned-course2').val(),
			thirdCourse: $('#planned-course3').val(),
			fourthCourse: $('#planned-course4').val(),
			spotsAvailable: $('#spots-available').val()
		}
		console.log(dinner);
		event.preventDefault();
	})

}); //end document.ready