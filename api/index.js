const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const categoryRouter = require("./routes/categories");
const cors = require('cors')
const bodyParser = require('body-parser');

dotenv.config();
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => {
        console.error(err.message);
    });


app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});