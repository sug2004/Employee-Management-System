const mongoose =require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const LoginRoutes = require('./routes/employeeRoutes');

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log('Successfully Connected to MongoDB')})
.catch((err)=>{console.log('Failed to connect to MongoDB', err)})

app.use('/api/v1/employee', LoginRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})