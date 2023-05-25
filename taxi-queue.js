function TaxiQueue() {
  var passengerCounter = 0;
  var taxiCounter = 0;

  function joinQueue() {
    passengerCounter++;
  }

  function leaveQueue() {
    if (passengerCounter > 0) {
      passengerCounter--;
    }

  }

  function joinTaxiQueue() {
    taxiCounter++;
  }

  function queueLength() {
    return passengerCounter;
  }

  function taxiQueueLength() {
    return taxiCounter;
  }

  function taxiDepart() {
    if (passengerCounter >= 12 && taxiCounter > 0) {
      passengerCounter -= 12;
      taxiCounter--;
    }else {

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
