const express = require("express");
const app = express();
const cors = require('cors')
const connectWithDataBase= require("./connectWithDataBase/connectWithDataBase")


// handle errors between server and client
const corsOptions = {
  exposedHeaders: 'Token',
};

app.use(cors())
app.use(cors(corsOptions));


//   the port where the server run
const PORT = process.env.PORT || 3000

//   use json in express 
app.use(express.json());

//   connect with the data base 
connectWithDataBase()


//  routers 
const Register = require('./routes/register')
const Login = require('./routes/login')
const GetParents = require('./routes/getParent')
const SendMessage = require('./routes/SendMessage')
const GetCurrentParent = require('./routes/getCurrentParent')
app.use('/register',Register)
app.use('/login',Login)
app.use('/getParents',GetParents)
app.use('/sendMessage',SendMessage)
app.use('/getCurrentParent',GetCurrentParent)

app.listen(PORT, () => {
    console.log(`port is listen in ${PORT}`);
  });