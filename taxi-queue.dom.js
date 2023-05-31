
// DOM element references
const joinBtn = document.querySelector(".join_queue");
const leaveBtn = document.querySelector(".leave_queue");
const passengerCount = document.querySelector(".passenger_queue_count");

const taxiCount = document.querySelector(".taxi_queue_count");
const joinTaxiQueueBtn = document.querySelector(".join_taxi_queue");
const taxiDepartBtn = document.querySelector(".depart");

let passengers = 0;
if(localStorage["passengers"]){
  passengers = localStorage["passengers"] ;
}

let taxiQueueCounter = 0;
if(localStorage["taxis"]){
  taxiQueueCounter = localStorage["taxis"] ;
}

// create Factory Function instance
const taxiQueue = TaxiQueue(passengers, taxiQueueCounter);


passengerCount.innerHTML = taxiQueue.queueLength();
taxiCount.innerHTML = taxiQueue.taxiQueueLength();

// DOM events

joinBtn.addEventListener("click", function () {
  taxiQueue.joinQueue();
  localStorage["passengers"] = taxiQueue.queueLength()
  passengerCount.innerHTML = taxiQueue.queueLength();
});

leaveBtn.addEventListener("click", function () {
  taxiQueue.leaveQueue();
  passengerCount.innerHTML = taxiQueue.queueLength();
});

joinTaxiQueueBtn.addEventListener("click", function () {
  taxiQueue.joinTaxiQueue();
  localStorage["taxis"] = taxiQueue.taxiQueueLength() ;
  taxiCount.innerHTML = taxiQueue.taxiQueueLength();
});

taxiDepartBtn.addEventListener("click", function(){
  taxiQueue.taxiDepart()
  localStorage["taxis"] = taxiQueue.taxiQueueLength();
localStorage["passengers"] = taxiQueue.queueLength();


  taxiCount.innerHTML = taxiQueue.taxiQueueLength();
  passengerCount.innerHTML = taxiQueue.queueLength();

})
