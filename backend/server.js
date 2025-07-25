import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import User from './models/userModal.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({ debug: true });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,}))

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello World YOYOY!');
});

app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Signup request body:", req.body);
  try {
    if (!username || !email || !password) {
      throw new Error("All fields are required");
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    
    const { password: _, ...userData } = user.toObject();

    res.status(201).json({ message: "User created successfully", user: userData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//************************************************ */
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login request:", req.body);

  try {
    if (!username || !password) {
      throw new Error("All fields are required");
    }

    const user = await User.findOne({ username });
    console.log("Found user:", user);
    if(!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    } 

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
     return res.status(200).json({ message: "Login successful", user: { username: user.username, email: user.email } });


  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})
//************************************************ */

app.get("/api/fetch-user", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized "});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(decoded.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/api/logout", async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});


app.listen(PORT, () => {
  connectDB();  
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;

