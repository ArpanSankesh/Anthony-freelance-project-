const services = document.querySelectorAll(".service-selector");
const hourSelector = document.querySelectorAll(".hour-selector");
const workerSelector = document.querySelectorAll(".professional-selector");
const workerCount = document.querySelector(".workerCount");
const timeSelector = document.querySelectorAll(".time-selector");
const addOnSelector = document.querySelectorAll(".add-on-selector");
const timeCount = document.querySelector(".timeCount");
const serviceCount = document.querySelector(".serviceCount");
const savebtn = document.querySelector(".save-btn");
const Address = document.querySelector(".address");
const AddressCount = document.querySelector(".addressCount");

let hours = "";
let workers = "";
let timming = "";
let serviceCounter = "";
let addressCounter = "";
let addOnCounter = 0;


let selectService = () => {
  services.forEach((service) => {
    service.addEventListener("click", () => {
      services.forEach((s) => s.classList.remove("active"));
      service.classList.add("active");
      serviceCounter = service.innerHTML;
      serviceCount.innerHTML = serviceCounter;
    });
  });
};
selectService();

let addOn = () => {
  addOnSelector.forEach((addOn) => {
    addOn.addEventListener("click", () => {
      if(addOnCounter === 0){
        addOn.classList.add("active");
        addOnCounter = 1;
      }else{
        addOn.classList.remove("active");
        addOnCounter = 0;
      }
    });
  });
};
addOn();

let selectHour = () => {
  hourSelector.forEach((hour) => {
    hour.addEventListener("click", () => {
      hourSelector.forEach((s) => s.classList.remove("active"));
      hour.classList.add("active");
      hours = hour.innerHTML;
    });
  });
};
selectHour();
let selectWorker = () => {
  workerSelector.forEach((worker) => {
    worker.addEventListener("click", () => {
      workerSelector.forEach((s) => s.classList.remove("active"));
      worker.classList.add("active");
      workers = worker.innerHTML;
      workerCount.innerHTML = workers;
    });
  });
};
selectWorker();
let selectTime = () => {
  timeSelector.forEach((time) => {
    time.addEventListener("click", () => {
      timeSelector.forEach((s) => s.classList.remove("active"));
      time.classList.add("active");
      timming = time.innerHTML;
      timeCount.innerHTML = timming;
    });
  });
};
selectTime();

let saveInfo = () => {
    addressCounter =  Address.value;
     AddressCount.innerHTML = addressCounter;
    console.log(addressCounter);
};
savebtn.addEventListener('click', saveInfo)
