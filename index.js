const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); /* use as a middleware when req.body is undefined */

app.get('/', (req, res) => {
    res.send('My Second Node Practice Module, revision six')
});

const users = [
    { name: 'Zamal', id: 1, email: 'zamal@gmail.com' },
    { name: 'Juel', id: 2, email: 'juel@gmail.com' },
    { name: 'Klam', id: 3, email: 'kalam@gmail.com' },
    { name: 'Hrun', id: 4, email: 'hraun@gmail.com' },
    { name: 'Stop', id: 5, email: 'stiop@gmail.com' },
    { name: 'Khilmi', id: 6, email: 'khilam@gmail.com' },
    { name: 'Zahangir', id: 7, email: 'zahangir@gmail.com' },
    { name: 'Razon', id: 8, email: 'razon@gmail.com' },
    { name: 'Oshhud', id: 9, email: 'oshudh@gmail.com' },
    { name: 'Ohid', id: 10, email: 'ohid@gmail.com' },
    { name: 'Kaka', id: 11, email: 'kaka@gmail.com' },
];

app.get('/users', (req, res) => {

    // show users without query 
    /*  app.get('/users', (req, res) => {
          res.send(users);
      }); */

    // show users with query
    if (req.query.name) { /* if searched by query params as name (?name= will be after the server link) */
        const search = req.query.name.toLowerCase();
        const matchedSearch = users.filter(user => user.name.toLowerCase().includes(search)); /* as we want to match all so used filter instead of  find */
        res.send(matchedSearch);
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    const idAsParams = parseInt(req.params.id); /* access id as params and as id number is json format so parsed it  */
    const userId = users.find(user => user.id === idAsParams); /* find matched id to show on ui */
    res.send(userId); /* show on ui */
});

app.post('/user', (req, res) => {
    // console.log(req.body)
    const user = req.body; /* receive client side sent data and keep it in the variable  */
    user.id = users.length + 1; /* adding a user id */
    users.push(user); /* add each user data received from client side to out backend database/server side data base */
    res.send(user); /* now send to client side finally */
    console.log(user)
});

app.listen(port, () => {
    console.log('Printing my 2nd node command', port)
});





