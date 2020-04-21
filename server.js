const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'html');

app.get('/products', (req, res) => {
   const products = [
     {
       id: "1",
       name: "product1",
       price: 20
     },
     {
       id: "2",
       name: "product2",
       price: 30
     },
     {
       id: "3",
       name: "product3",
       price: 40
     }
   ];
   res.send(products);
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
