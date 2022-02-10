const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB"))
.catch((err)=>{
    console.error(err.message);
});

app.use("/api/auth",authRouter);

app.listen("5001", () => {
  console.log("Server is running on port 5001");
});
