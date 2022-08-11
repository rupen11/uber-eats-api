require("dotenv/config");
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URL)
    .then((con) =>
        console.log("Connection established: " + con.connection.host)
    )
    .catch((err) => console.log("Something went wrong: " + err.message));
