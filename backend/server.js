const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: "https://whitelinemovers-14a6.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));
app.use(express.json());

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;

// POST Route for Quote Form
app.post("/send-quote", async (req, res) => {
  const { name, email, phone, movingType, movingFrom, movingTo } = req.body;

  // ✅ Required check
  if (!email && !phone) {
    return res.status(400).json({
      success: false,
      message: "Email or Phone number is required"
    });
  }

  // ✅ Email validation
  if (email && !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // ✅ Phone validation
  if (phone && !phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number"
    });
  }

  // Create Transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASS
    }
  });

  // Email Content
  let mailOptions = {
    from: process.env.GMAIL, // ⚠️ yahan user email use mat karo (gmail reject kar sakta h)
    replyTo: email, // ✅ isse tum directly user ko reply kar paoge
    to: process.env.GMAIL,
    subject: "New Quote Request",
    html: `
      <h2>New Quote Request</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email || "N/A"}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Moving Type:</b> ${movingType}</p>
      <p><b>Moving From:</b> ${movingFrom}</p>
      <p><b>Moving To:</b> ${movingTo}</p>
    `
  };

  // Send Mail
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Quote submitted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});