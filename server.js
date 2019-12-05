const express = require('express');
const app = express();
const mongoose = require("mongoose");
const mongoURI = 'mongodb://localhost:27017/mongoRelationships';
const port = 5000;
const UserRouter = require('./routes/user_routes');
app.listen(port, () => {
    console.log(`listening ${port}`);
});

mongoose.connect(mongoURI, { useNewUrlParser: true, 
    useUnifiedTopology: true  }, () => {
  console.log('the connection with mongod is established (connected to database)')
})
/*** Middleware ***/
// Add bodyParser middleware
app.use(express.json())
/*** Routes ***/
app.use(UserRouter);
