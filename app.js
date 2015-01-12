
var dinnerPartyRef = new Firebase("https://tonkinsondinnerparty.firebaseio.com/");


dinnerPartyRef.set({
	Dinner: {
	dinnerTheme: "The Great Wall Feast",
	location: "Mark's Apartment",
	time: "7pm"
	}

})

var getRef = new Firebase(dinnerPartyRef + "/Dinner")

getRef.on("value", function(snapshot) {
  console.log(snapshot.val());
  var partyInfo = snapshot.val();
  $('#dinner-theme').text(partyInfo.dinnerTheme);
  $('#dinner-time').text(partyInfo.time)
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


