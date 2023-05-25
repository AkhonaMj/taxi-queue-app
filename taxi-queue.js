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

  function joinTaxiQueue(taxis) {
	taxi.push(taxis)
    taxiCounter++;
  }

  function queueLength() {

    return passangers.length;
  }

  function taxiQueueLength() {
    return taxi.length;
  }

  function taxiDepart() {
   if(queueLength() == 12){
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
