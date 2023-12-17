import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import routes from "./routes/userRegisterRoutes";

const app = express();
const PORT = 4000;

mongoose.connect('mongodb://0.0.0.0:27017/stocky', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// // Mongo connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/stockyDB',{
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Cors setup
app.use(cors());

routes(app); 

app.get('/',(req,res)=>
res.send(`Our Stocky application is running ${PORT}`)
);

app.listen(PORT,() => 
console.log(`Youer stocky app run on pore ${PORT}`)
)