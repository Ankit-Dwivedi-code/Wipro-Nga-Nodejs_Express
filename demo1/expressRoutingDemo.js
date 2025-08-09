// Step 1: Creating express ref, setting up port

import express from 'express';

const app = express();
const PORT = 3000;

//Step 2: Middleware to parse JSON request body
app.use(express.json());

//Step 3: get route - root
app.get('/', (req, res) => {
    res.send('Welcome to Express!');
});

// Step 4: POST route - accepts the JSON data
app.post('/data', (req, res) => {
    const jsonData = req.body;
    res.json({ 
        message: 'Data received',
         Yourdata: jsonData
     });
});

// Step 5: PUT route - updates the JSON data
app.put('/update', (req, res) => {
    res.json({ 
        message: 'Data updated',
        Yourdata: req.body
    });
});

// Step 6: DELETE route - removes the JSON data
app.delete('/data', (req, res) => {
    res.json({
        message: 'Data deleted'
    });
});

// Step 7: Dynamic route with url parameters
app.get('/users/:id', (req, res) => {
    res.json({
        message: 'User Id retrieved successfully',
        userId: req.params.id
    });
});


// Step 8: Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});