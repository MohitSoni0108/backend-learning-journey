const express = require("express");


const app = express();

const arr=[
    {id :1,name:'mohit'},
    {id :2,name:'rohit' }]

const products = [
  { id: 1, name: "iPhone", category: "mobile" },
  { id: 2, name: "Samsung", category: "mobile" },
  { id: 3, name: "Macbook", category: "laptop" }
];



app.get("/user/:id", (req, res) => {
    console.log(req.params);
     const userId = req.params.id;
    for(let i =0;i<2;i++)
    {
        if(userId==arr[i].id)
        {
res.send(`User ID is ${userId} and User name is ${arr[i].name}`);
        }
        else{
            res.send('USER NOT EXIST');
        }
    }  
});


app.get("/products", (req, res) => {
  const category = req.query.category;

  const filteredProducts = products.filter(
    product => product.category === category
  );

  res.send(filteredProducts);
});





app.listen(3000);