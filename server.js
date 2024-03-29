import express from "express";
const app = express();

import cors from "cors";

const dotenv = require("dotenv");
const stripe = require("stripe");

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5500",
  })
);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);

const stripeInstance = stripe(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
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
