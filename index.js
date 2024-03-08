const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const route = require('./routes/route');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
function ConnecttoDb() {
const uri = process.env.REACT_APP_MONGODB_URI;

mongoose.connect(uri).then(() => console.log('you are connected to the databse'));
}

app.listen(8000, () => {
    ConnecttoDb();
    console.log('Server is running on port 8000');
});
app.use(route);
