$(document).ready(function(){
	
	var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");
	var counterRef = new Firebase(dinnerPartyRef + '/counter');
	var historyRef = new Firebase(dinnerPartyRef + '/history/');
	var counter;
	


	var newDinner = function(dinnerObj){
		var obj = {}
		var dinnerNum = "dinner" + (counter.value += 1)
		
		historyRef.child(dinnerNum).set(dinnerObj,

			function(error){
			if(error){
				console.log(error)
			}
		})
		
		counterRef.set(counter)

	}
	


	//get counter value for history- this needs to happen first- and also only needs to happen when it's updated
	var once = function(){
		counterRef.once("value", function(snapshot){
			counter = snapshot.val();
		}, function(errorObject){
			console.log("the read failed:" + errorObject.code)
		})
	}
	once()

	
	//get the values from the form

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

		DinnerCurrent.attendees = '0';
		event.preventDefault();
		dinnerPartyRef.update({currentDinner: DinnerCurrent}, function(err){
			if(err){
				console.log(err)
			} else {
				newDinner(DinnerCurrent);
			}
		})
		
	})

}); //end document.ready