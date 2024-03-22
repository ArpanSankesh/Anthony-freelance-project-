const services = document.querySelectorAll(".service-selector");
const hourSelector = document.querySelectorAll(".hour-selector");
const workerSelector = document.querySelectorAll(".professional-selector");
const workerCount = document.querySelector(".workerCount");
const timeSelector = document.querySelectorAll(".time-selector");
const timeCount = document.querySelector(".timeCount");
const serviceCount = document.querySelector(".serviceCount");
const savebtn = document.querySelector(".save-btn");
const Address = document.querySelector(".address");
const AddressCount = document.querySelector(".addressCount");
const subtotalElement = document.querySelector(".subtotal");

let hours = "";
let workers = "";
let timming = "";
let serviceCounter = "";
let addressCounter = "";

// Prices per worker per hour
const prices = {
  1: [98.88, 137.88, 176.88, 215.88, 254.88, 293.88, 332.88],
  2: [197.76, 275.76, 353.76, 431.76, 509.76, 587.76, 665.76],
  3: [296.64, 413.64, 530.64, 647.64, 764.64, 881.64, 998.64],
  4: [395.52, 551.52, 707.52, 863.52, 1019.52, 1175.52, 1331.52]
};

// Function to calculate subtotal
// const calculateSubtotal = () => {
//   if (hours && workers) {
//     const pricePerWorker = prices[workers][hours -2]; // Subtract 2 because hours start from 2
//     const subtotal = pricePerWorker * hours;
//     subtotalElement.innerHTML = `AED ${subtotal.toFixed(2)}`;
//     console.log(subtotal)
//   }
// };

// const calculateSubtotal = () => {
//     if (hours && workers) {
//       // Check if the selected number of workers and hours is within the defined range
//       if (workers >= 1 && workers <= 4 && hours >= 2 && hours <= 8) {
//         const pricePerWorker = prices[workers][hours - 2]; // Subtract 2 because hours start from 2
//         const subtotal = pricePerWorker * workers; // Multiply by the number of workers
//         subtotalElement.innerHTML = `AED ${subtotal.toFixed(2)}`;
//         console.log(subtotal);
//       } else {
//         // Handle cases where the selected number of workers or hours is out of range
//         subtotalElement.innerHTML = "AED 0.00"; // Reset subtotal to 0
//         console.log("Invalid number of workers or hours selected.");
//       }
//     }
//   };

const calculateSubtotal = () => {
    if (hours && workers) {
      // Check if the selected number of workers and hours is within the defined range
      if (workers >= 1 && workers <= 4 && hours >= 2 && hours <= 8) {
        const pricePerWorker = prices[workers][hours - 2]; // Subtract 2 because hours start from 2
        const subtotal = pricePerWorker * hours * workers; // Multiply by the number of hours and workers
        subtotalElement.innerHTML = `AED ${subtotal.toFixed(2)}`;
        console.log(subtotal);
      } else {
        // Handle cases where the selected number of workers or hours is out of range
        subtotalElement.innerHTML = "AED 0.00"; // Reset subtotal to 0
        console.log("Invalid number of workers or hours selected.");
      }
    }
  };
  

// Event listeners
const selectService = () => {
  services.forEach((service) => {
    service.addEventListener("click", () => {
      services.forEach((s) => s.classList.remove("active"));
      service.classList.add("active");
      serviceCounter = service.innerHTML;
      serviceCount.innerHTML = serviceCounter;
    });
  });
};

const selectHour = () => {
  hourSelector.forEach((hour) => {
    hour.addEventListener("click", () => {
      hourSelector.forEach((s) => s.classList.remove("active"));
      hour.classList.add("active");
      hours = parseInt(hour.innerHTML);
      calculateSubtotal();
    });
  });
};

const selectWorker = () => {
  workerSelector.forEach((worker) => {
    worker.addEventListener("click", () => {
      workerSelector.forEach((s) => s.classList.remove("active"));
      worker.classList.add("active");
      workers = parseInt(worker.innerHTML);
      workerCount.innerHTML = workers;
      calculateSubtotal();
    });
  });
};

const selectTime = () => {
  timeSelector.forEach((time) => {
    time.addEventListener("click", () => {
      timeSelector.forEach((s) => s.classList.remove("active"));
      time.classList.add("active");
      timming = parseInt(time.innerHTML);
      timeCount.innerHTML = timming;
      calculateSubtotal();
    });
  });
};

const saveInfo = () => {
  addressCounter = Address.value;
  AddressCount.innerHTML = addressCounter;
  console.log(addressCounter);
};

// Attach event listeners
selectService();
selectHour();
selectWorker();
selectTime();
savebtn.addEventListener('click', saveInfo);



// --------------------------------------------------------------------------------------------------



// const services = document.querySelectorAll(".service-selector");
// const hourSelector = document.querySelectorAll(".hour-selector");
// const workerSelector = document.querySelectorAll(".professional-selector");
// const workerCount = document.querySelector(".workerCount");
// const timeSelector = document.querySelectorAll(".time-selector");
// const addOnSelector = document.querySelectorAll(".add-on-selector");
// const timeCount = document.querySelector(".timeCount");
// const serviceCount = document.querySelector(".serviceCount");
// const savebtn = document.querySelector(".save-btn");
// const Address = document.querySelector(".address");
// const AddressCount = document.querySelector(".addressCount");

// let hours = "";
// let workers = "";
// let timming = "";
// let serviceCounter = "";
// let addressCounter = "";
// let addOnCounter = 0;


// let selectService = () => {
//   services.forEach((service) => {
//     service.addEventListener("click", () => {
//       services.forEach((s) => s.classList.remove("active"));
//       service.classList.add("active");
//       serviceCounter = service.innerHTML;
//       serviceCount.innerHTML = serviceCounter;
//     });
//   });
// };
// selectService();

// let addOn = () => {
//   addOnSelector.forEach((addOn) => {
//     addOn.addEventListener("click", () => {
//       if(addOnCounter === 0){
//         addOn.classList.add("active");
//         addOnCounter = 1;
//       }else{
//         addOn.classList.remove("active");
//         addOnCounter = 0;
//       }
//     });
//   });
// };
// addOn();

// let selectHour = () => {
//   hourSelector.forEach((hour) => {
//     hour.addEventListener("click", () => {
//       hourSelector.forEach((s) => s.classList.remove("active"));
//       hour.classList.add("active");
//       hours = hour.innerHTML;
//     });
//   });
// };
// selectHour();
// let selectWorker = () => {
//   workerSelector.forEach((worker) => {
//     worker.addEventListener("click", () => {
//       workerSelector.forEach((s) => s.classList.remove("active"));
//       worker.classList.add("active");
//       workers = worker.innerHTML;
//       workerCount.innerHTML = workers;
//     });
//   });
// };
// selectWorker();
// let selectTime = () => {
//   timeSelector.forEach((time) => {
//     time.addEventListener("click", () => {
//       timeSelector.forEach((s) => s.classList.remove("active"));
//       time.classList.add("active");
//       timming = time.innerHTML;
//       timeCount.innerHTML = timming;
//     });
//   });
// };
// selectTime();

// let saveInfo = () => {
//     addressCounter =  Address.value;
//      AddressCount.innerHTML = addressCounter;
//     console.log(addressCounter);
// };
// savebtn.addEventListener('click', saveInfo);
