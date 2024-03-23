const services = document.querySelectorAll(".service-selector");
const hourSelector = document.querySelectorAll(".hour-selector");
const workerSelector = document.querySelectorAll(".professional-selector");
const workerCount = document.querySelector(".workerCount");
const timeSelector = document.querySelectorAll(".time-selector");
const frequencySelector = document.querySelectorAll(".frequency-selector");
const timeCount = document.querySelector(".timeCount");
const serviceCount = document.querySelector(".serviceCount");
const savebtn = document.querySelector(".save-btn");
const Address = document.querySelector(".address");
const AddressCount = document.querySelector(".addressCount");
const subtotalElement = document.querySelector(".subtotal");
const totalElement = document.querySelector(".total");
const discountElement = document.querySelector(".discount");

let hours = "";
let workers = "";
let timming = "";
let serviceCounter = "";
let addressCounter = "";
let frequencyCounter = "";


// Prices per worker per hour
const prices = {
  1: [98.88, 137.88, 176.88, 215.88, 254.88, 293.88, 332.88],
  2: [196.76, 274.76, 352.76, 430.76, 508.76, 586.76, 664.76],
  3: [294.64, 411.64, 528.64, 645.64, 762.64, 879.64, 996.64],
  4: [392.52, 548.52, 704.52, 860.52, 1016.52, 1172.52, 1328.52],
};

const calculateSubtotal = () => {
  if (hours && workers) {
    if (workers >= 1 && workers <= 4 && hours >= 2 && hours <= 8) {
      const pricePerWorker = prices[workers][hours - 2];

      const subtotal = pricePerWorker + (workers - 1);

      subtotalElement.innerHTML = `AED ${subtotal.toFixed(2)}`;
      
      let discount = 0;

      let total = subtotal - discount;

      discountElement.innerHTML = `- AED ${discount.toFixed(2)}`;
      totalElement.innerHTML = `AED ${total.toFixed(2)}`;
      
      
    } else {
      subtotalElement.innerHTML = "AED 0.00";
    }
  }
};

// const calculateSubtotal = () => {
//   if (hours && workers) {
//     if (workers >= 1 && workers <= 4 && hours >= 2 && hours <= 8) {
//       const pricePerWorker = prices[workers][hours - 2];

//       // Calculate subtotal by multiplying price per worker by the number of workers
//       const subtotal = pricePerWorker * workers;

//       const serviceFrequency = serviceCounter.trim().toUpperCase();
//       let discount = 0;
//       if (serviceFrequency === "WEEKLY") {
//         discount = subtotal * 0.10; // 10% discount for Weekly
//       } else if (serviceFrequency === "EVERY 2 WEEKS") {
//         discount = subtotal * 0.03; // 3% discount for Every 2 Weeks
//       }
      
//       // Calculate total after discount
//       const total = subtotal - discount;

//       // Update UI
//       subtotalElement.innerHTML = `AED ${subtotal.toFixed(2)}`;
//       discountElement.innerHTML = `- AED ${discount.toFixed(2)}`;
//       totalElement.innerHTML = `AED ${total.toFixed(2)}`;
//     } else {
//       // Reset values if workers or hours are out of range
//       subtotalElement.innerHTML = "AED 0.00";
//       discountElement.innerHTML = "- AED 0.00";
//       totalElement.innerHTML = "AED 0.00";
//     }
//   } else {
//     // Reset values if workers or hours are not selected
//     subtotalElement.innerHTML = "AED 0.00";
//     discountElement.innerHTML = "- AED 0.00";
//     totalElement.innerHTML = "AED 0.00";
//   }
// };



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
      timming = time.innerHTML;
      timeCount.innerHTML = timming;
    });
  });
};
const selectFrequency = () => {
  frequencySelector.forEach((frequency) => {
    frequency.addEventListener("click", () => {
      frequencySelector.forEach((s) => s.classList.remove("active"));
      frequency.classList.add("active");
      frequencyCounter = frequency.innerHTML;
      console.log(frequencyCounter);
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
selectFrequency();
savebtn.addEventListener("click", saveInfo);
