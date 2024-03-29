
import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.get("/about.html", (req, res) => {
  res.sendFile("about.html", { root: "public" });
});
app.get("/services.html", (req, res) => {
  res.sendFile("services.html", { root: "public" });
});
app.get("/booking.html", (req, res) => {
  res.sendFile("booknow.html", { root: "public" });
});

//stripe
let srtipeGateway = stripe(process.env.stripe_key);
app.post("/stripe-checkout", async (req, res) => {
  const lineItems = req.body.item.map((item) => {
    const unitAmount = parseInt(parseFloat(item.price) * 100);
    console.log("item-price:", item.price);
    console.log("unit ammount:", unitAmount);
    return {
      price_data: {
        currency: "AED",
        procuct_data: {
          name: item.title,
        },
        unit_amount: unitAmount,
      },
      quantity: item.quanity,
    };
  });
  const session = await srtipeGateway.checkout.sessions.create({
    payment_methord_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000/success.html",
    cancle_url: "http://localhost:3000/cancel.html",
    billing_address_collection: "required",
    line_items: lineItems,
  });
  res.json({ url: session.url });
});

app.listen(3000, () => {
  console.log("listining");
});
