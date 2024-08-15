const express = require('express');
const _ = require('lodash');
const app = express();
const port = 3000;

// Hardcoded secret (for demonstration purposes only)
const secretKey = 'myHardcodedSecret123';

app.get('/', (req, res) => {
    // Example usage of lodash
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = _.shuffle(array);
    res.send(`Hello World! Here is a shuffled array: ${shuffledArray}`);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
