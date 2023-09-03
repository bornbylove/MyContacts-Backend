const express = require("express");

const dotenv = require("dotenv").config();

const port  = process.env.PORT || 5000;
//const errorHandler = require("./middleware/ErrorHandler");

const app = express();
//body-parser usage example
app.use(express.json());

app.use("/api/contacts", require("./routes/ContactRoutes"));
//app.use(errorHandler());


app.listen(port, () =>{
    console.log("Server running on port:" + port);
});


const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;
        switch (statusCode) {
            case 400:

            res.json({title: "Not Found",
            message: err.message,
            stackTrace: err.stack
        });
            break;

            case 404:
                res.json({title: "Validationn Failed",
                message: err.message,
                stackTrace: err.stack
            });
                break;   
        }
    
};
