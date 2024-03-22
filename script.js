const services = document.querySelectorAll(".service-selector");
const hourSelector = document.querySelectorAll(".hour-selector");
const workerSelector = document.querySelectorAll(".professional-selector");
const workerCount = document.querySelector(".workerCount");
const time = document.querySelectorAll(".time-selector");
let serviceflag = 0;
let hours = "";
let workers = "";

let selectService = () => {
  services.forEach((service) => {
    service.addEventListener("click", () => {
      console.log("Service clicked");
      if (serviceflag === 0) {
        service.classList.add("active");
        serviceflag = 1;
      } else {
        service.classList.remove("active");
        serviceflag = 0;
      }
    });
  });
};
selectService();

let selectHour = () => {
  hourSelector.forEach((hour) => {
    hour.addEventListener("click", () => {
      hourSelector.forEach((s) => s.classList.remove("active"));
      hour.classList.add("active");
      hours = hour.innerHTML;
      console.log(hours);
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
      console.log(workers);
    });
  });
};
selectWorker();
