function TaxiQueue() {
  var passangers = [];
  var taxi = [];
  var passengerCounter = 0;
  var taxiCounter = 0;

  function joinQueue(people) {
    passangers.push(people);
    passengerCounter++;
  }

  function leaveQueue(people) {
		passangers.pop(people);
		passengerCounter--


  }

  function joinTaxiQueue(taxies) {
	taxi.push(taxies)
    taxiCounter++;
  }

  function queueLength() {
    return passangers.length;
  }

  function taxiQueueLength() {
    return taxi.length;
  }

  function taxiDepart() {
   if(passangers.length >= 12){
	   taxiCounter--;
   }
    }
  

  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
  };
}
