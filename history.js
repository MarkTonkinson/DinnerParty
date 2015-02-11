var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");



	var getRef = new Firebase(dinnerPartyRef + "/history")
	var counterRef = new Firebase(dinnerPartyRef + '/counter');
	var historyRef = new Firebase(dinnerPartyRef + '/history/');
	var counter;
		//get counter value for history- this needs to happen first- and also only needs to happen when it's updated
	var once = function(){
		counterRef.once("value", function(snapshot){
			counter = snapshot.val();
		}, function(errorObject){
			console.log("the read failed:" + errorObject.code)
		})
	}
	once()

	getRef.on("value", function(snapshot) {
		var history = snapshot.val()
		
		var historyLength = Object.keys(history).length
		$('#dynamic-history').append('<table></table>');
		for(var i = 1; i <= historyLength; i++){
			
			var newTable = $('#dynamic-history').children()
			var dinner = "dinner" + i
			
			//console.log(history[dinner])
			//could reduce code here by changing the tags to a variable- but would that add much?
			//var openTag = '<tr><td> '
			//table head doesn't work here - because it's at the top of a table
			newTable.append('<tr class="history-title"><td> Dinner' + i + ' <input type="submit" val=' + dinner + ' placeholder="Set To Current Dinner"></td></tr>')
			newTable.append('<tr><td> Dinner Theme  ' + history[dinner].dinnerTheme + '</td><td> First Course : ' + history[dinner].firstCourse + '</tr></td>')
			newTable.append('<tr><td> Location : ' + history[dinner].location + '</td><td> Second Course : ' + history[dinner].secondCourse + '</td></tr>')
			newTable.append('<tr><td> Time : ' + history[dinner].time + '</td><td> Third Course : ' + history[dinner].thirdCourse + '</td></tr>')
			newTable.append('<tr><td> Date : ' + history[dinner].date + '</td><td> Fourth Course : ' + history[dinner].fourthCourse + '</td></tr>')
			newTable.append('<tr><td> Price : ' + history[dinner].price + '</td><td> Attended : ' + history[dinner].attendees + '/' + history[dinner].spotsAvailable + '</td></tr>')
			newTable.append('<tr class="invisible-row"><td></td><td></td></tr>')		
		}
		
		//what is the difference- why does the variable return undefined?
		$(".history-title").on('click', function(){
			var dinner2 = $(this).text() //returns as Dinner + num
			dinner2 = dinner2.replace('D','d').trim()
			console.log(history[dinner2])

			dinnerPartyRef.update({currentDinner: history[dinner2]})
			var dinnerNum = "dinner" + (counter.value += 1)
			historyRef.child(dinnerNum).set(history[dinner2])
			counterRef.set(counter)
		})

	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});

	

	

