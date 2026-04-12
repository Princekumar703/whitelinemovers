const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ✅ CORS
const allowedOrigins = [
  "https://whitelinemovers-14a6.vercel.app",
  "http://localhost:5173"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow Postman / curl
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use(express.json());

// ✅ Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;
app.get("/help", (req, res) => {
  console.log("HELP HIT");
  res.status(200).json({
    success: true,
    message: "Backend is running"
  });
});
// ✅ Route
app.post("/send-quote", async (req, res) => {
  const { name, email, phone, movingType, movingFrom, movingTo } = req.body;

  // 🔹 Required check
  if (!email && !phone) {
    return res.status(400).json({
      success: false,
      message: "Email or Phone number is required"
    });
  }

  // 🔹 Email validation
  if (email && !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  // 🔹 Phone validation
  if (phone && !phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number"
    });
  }

  try {
    // ❗ ENV check (important)
    if (!process.env.GMAIL || !process.env.PASS) {
      throw new Error("Missing EMAIL credentials in environment variables");
    }

    // ✅ Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
      },
    });

  

    // ✅ Mail options
    const mailOptions = {
      from: process.env.GMAIL,
      replyTo: email || process.env.GMAIL,
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
      `,
    };

    // ✅ Send mail
    const info = await transporter.sendMail(mailOptions);

    console.log("MAIL SENT:", info.response);

    return res.json({
      success: true,
      message: "Quote submitted successfully!",
    });

  } catch (error) {
    console.log("MAIL ERROR FULL:", error); // full error

    return res.status(500).json({
      success: false,
      message: error.message || "Mail failed",
    });
  }
});

// ✅ Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});