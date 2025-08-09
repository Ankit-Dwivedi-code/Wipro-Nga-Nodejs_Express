// Using express server
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    res.send('Hello');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// step1: Install express
// npm install express
// Step2: Create a file named server.js
//Change the type to module in package.json "type": "module",

// Now in server.js import express
//Step3: Create a simple express server that listens on port 3000
//Step4: Create a endpoint like / to serve the application 
//Step5: then listen to it on port 3000