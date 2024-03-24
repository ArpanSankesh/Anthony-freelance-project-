// const payBtn = document.querySelector(".pay-now-btn");

// payBtn.addEventListener("click", () => {
//     fetch("/stripe-checkout",{
//         methord: "POST",

//     })
// })

const payBtn = document.querySelector(".pay-now-btn");

payBtn.addEventListener("click", () => {
    fetch("/stripe-checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // Include any data you want to send in the body
        })
    })
    .then(response => {
        // Check if the response is not ok (i.e., if the status code is not in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(data => {
        // Handle the data returned from the server
        console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('There was an error!', error.message);
    });
});
