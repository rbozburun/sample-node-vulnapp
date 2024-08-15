const express = require('express');
const _ = require('lodash');
const app = express();
const port = 3000;

// Hardcoded secret (for demonstration purposes only)
const secretKey = 'myHardcodedSecret123';

// Testing for gitleaks
const secretKey2 = 'myHardcodedSecret122';

app.get('/', (req, res) => {
    // Example usage of lodash
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = _.shuffle(array);
    res.send(`Hello World! Here is a shuffled array: ${shuffledArray}`);
    console.log(" Secretkey2 added: " + secretKey2);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
