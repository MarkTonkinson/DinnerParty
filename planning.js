$(document).ready(function(){
	
	var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");
	var counterRef = new Firebase(dinnerPartyRef + '/counter');
	
	var historyRef = new Firebase(dinnerPartyRef + '/history/');
	var obj = {}
	var counter;
	


	var newDinner = function(dinnerObj){
		//this is always the case, no need to have to input it
		console.log(dinnerObj)
		dinnerObj.attendees = 0
		// var DinnerCurrent = { 
		// 		dinnerTheme: "The Great Wall Feasting",
		// 		location: "Tonkinson Apartment",
		// 		time: "7pm",
		// 		date: "January 27",
		// 		firstCourse: "Boadza",
		// 		secondCourse: "Mandarin Chicken Orange Salad or Peanut Dressing Salad",
		// 		thirdCourse: "General Tzos and Orange Chicken with fried rice and steam vegetables",
		// 		fourthCourse: "Dessert- to be determined",
		// 		price: "$8.00",
		// 		spotsAvailable: 6,
		// 		attendees: 0
		// 	}
		dinnerPartyRef.set({currentDinner: dinnerObj})
		
		var p = "Dinner" + (counter.value + 1);
		console.log(p)
		obj[p] = dinnerObj
		//its breaking here- it doesn't generate a new endpoint even though I'm giving it a new name- it overwrites the old one
		newHistoryRef = historyRef.child(p)
		
		newHistoryRef.set(obj[p])
		counter.value +=1
		
		counterRef.set(counter)

	}
	//newDinner()


	//get counter value for history- this needs to happen first
	var once = function(){
		counterRef.once("value", function(snapshot){
			counter = snapshot.val();
			console.log(counter)
			//newDinner();
		}, function(errorObject){
			console.log("the read failed:" + errorObject.code)
		})
	}
	once()

	
	
	


	
	

	$("form").submit(function(event){

		var DinnerCurrent = {
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
		console.log(DinnerCurrent.date)
		
		event.preventDefault();
		newDinner(DinnerCurrent);
	})

}); //end document.ready