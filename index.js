const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js")
const Product = require("./models/product.model.js");
const app = express();

//  MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// ROUTES
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API");
});


// DATABASE CONNECTION
mongoose.connect("mongodb+srv://shivxm:Abc1234@cluster0.k7fcvoa.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to the DB");
        app.listen(3000, () => {
            console.log("Server is listening at port 3000");
        });
    })
    .catch(() => {
        console.log("Couldn't connect to the DB");
    });