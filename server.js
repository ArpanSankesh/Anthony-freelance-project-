import express from "express";
import dotenv from "dotenv";
import stripePackage from "stripe";

dotenv.config();

const app = express();
const stripe = new stripePackage(process.env.STRIPE_SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());

// Your existing routes...

// Endpoint to handle Stripe checkout session creation
app.post("/stripe-checkout", async (req, res) => {
  try {
    // Extract necessary data from the request
    const { service, hours, workers, timming, frequency, address, date, addons } = req.body;

    // Calculate total amount
    // Assuming you have a function to calculate the total amount based on the selected services, hours, etc.

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'aed',
            product_data: {
              name: 'Service Booking', // Adjust as needed
            },
            unit_amount: totalAmountInCents, // Convert total amount to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://yourwebsite.com/success.html',
      cancel_url: 'http://yourwebsite.com/cancel.html',
    });

    // Send the session URL back to the client
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Your existing code...

app.listen(3000, () => {
  console.log("listening on port 3000");
});


// import express from "express";
// import dotenv from "dotenv";
// import stripe from "stripe";

// dotenv.config();

// const app = express();

// app.use(express.static("public"));
// app.use(express.json());

// //routes
// app.get("/", (req, res) => {
//   res.sendFile("index.html", { root: "public" });
// });

// app.get("/about.html", (req, res) => {
//   res.sendFile("about.html", { root: "public" });
// });
// app.get("/services.html", (req, res) => {
//   res.sendFile("services.html", { root: "public" });
// });
// app.get("/booking.html", (req, res) => {
//   res.sendFile("booknow.html", { root: "public" });
// });

// //stripe
// let srtipeGateway = stripe(process.env.stripe_key);
// app.post("/stripe-checkout", async (req, res) => {
//   const lineItems = req.body.item.map((item) => {
//     const unitAmount = parseInt(parseFloat(item.price) * 100);
//     console.log("item-price:", item.price);
//     console.log("unit ammount:", unitAmount);
//     return {
//       price_data: {
//         currency: "AED",
//         procuct_data: {
//           name: item.title,
//         },
//         unit_amount: unitAmount,
//       },
//       quantity: item.quanity,
//     };
//   });
//   const session = await srtipeGateway.checkout.sessions.create({
//     payment_methord_types: ["card"],
//     mode: "payment",
//     success_url: "http://localhost:3000/success.html",
//     cancle_url: "http://localhost:3000/cancel.html",
//     billing_address_collection: "required",
//     line_items: lineItems,
//   });
//   res.json({ url: session.url });
// });

// app.listen(3000, () => {
//   console.log("listining");
// });
