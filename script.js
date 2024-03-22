const services = document.querySelectorAll(".service-selector");
const workerHours = document.querySelectorAll(".selector");
const time = document.querySelectorAll(".time-selector");
let serviceflag = 0;

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

let hourSelector = () => {
  workerHours.forEach((selector) => {
    selector.addEventListener("click", () => {
        
    });
  });
};
hourSelector();
