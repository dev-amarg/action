require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const mongoURI = process.env.AAYUSHI_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB not Connected', err));

const employeeSchema = new mongoose.Schema({
  name: String,
  gender: String,
  department: String,
  designation: String,
  city: String
});

const Employee = mongoose.model('Employee', employeeSchema); 

app.get('/', (req, res) => {
  res.send('Hello Docker Compose1 Node + MongoDB from Amar');
});

app.get('/data', async (req, res) => {
    try {
	    const data = await Employee.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
  console.log(`✅ Server running: http://localhost:${port}`);
});

