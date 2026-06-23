const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


const mongoURI = process.env.MONGO_URI || 'mongodb://aayushi:aayushi@mongo:27017/';
mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB not Connected', err));

app.get('/', (req, res) => {
  res.send('Hello Docker Compose1 Node + MongoDB');
});



app.get('/data', async (req, res) => {
    const data = await Employee.find({});
    res.json(data);
});


app.listen(port, () => {
  console.log(`✅ Server running: http://localhost:${port}`);
});
