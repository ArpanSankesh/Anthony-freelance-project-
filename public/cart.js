const payBtn = document.querySelector(".pay-now-btn");

payBtn.addEventListener("click", () => {
    fetch("/stripe-checkout",{
        methord: "POST",

    })
})
