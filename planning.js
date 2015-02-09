$(document).ready(function(){
	
	var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");
	var counterRef = new Firebase(dinnerPartyRef + '/counter');
	
	var historyRef = new Firebase(dinnerPartyRef + '/history/');
	var obj = {}
	var counter;
	


	var newDinner = function(dinnerObj){
		//this is always the case, no need to have to input it
		//console.log(dinnerObj)
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
		
		
		var p = "dinner" + (counter.value + 1)
		// //console.log(p)
		obj = dinnerObj
		//console.log(obj)
		// //its breaking here- it doesn't generate a new endpoint even though I'm giving it a new name- it overwrites the old one
		//dinnerPartyRef.push(dinnerObj)
		
		historyRef.child(p).set(obj,
			// dinner2: {
			// 	dinnerTheme: "The Great Wall Feasting",
			// 	location: "Tonkinson Apartment",
			// 	time: "7pm",
			// 	date: "January 27",
			// 	firstCourse: "Boadza",
			// 	secondCourse: "Mandarin Chicken Orange Salad or Peanut Dressing Salad",
			// 	thirdCourse: "General Tzos and Orange Chicken with fried rice and steam vegetables",
			// 	fourthCourse: "Dessert- to be determined",
			// 	price: "$8.00",
			// 	spotsAvailable: 6,
			// 	attendees: 0}
			// }, 
			function(error, success){
			if(error){
				console.log(error)
			} else if (success){
				console.log('success', success);
			} else {
				console.log("i guess not")
			}
		})

		// newRef.child('dinner2').set(obj, function(error, success){
		// 	if(error){
		// 		console.log(error)
		// 	} else if (success){
		// 		console.log('success', success);
		// 	} else {
		// 		console.log("i guess not")
		// 	}
		// })

		// newRef.child(p).setWithPriority(obj, counter.value, function(error, success){
		// 	if(error){
		// 		console.log(error)
		// 	} else if (success){
		// 		console.log('success', success);
		// 	} else {
		// 		console.log("i guess not")
		// 	}
		// })
		//.set overwrites all children at the location. which answers the problem above
		//newHistoryRef.set(obj[p])
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
		dinnerPartyRef.update({currentDinner: DinnerCurrent}, function(err){
			if(err){
				console.log(err)
			} else {
				newDinner(DinnerCurrent);
			}
		})
		
		//newDinner(DinnerCurrent);
		
	})

}); //end document.ready