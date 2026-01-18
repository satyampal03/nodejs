const express = require("express");
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

const Person = require('./models/person.js');
const MenuItem = require('./models/Menue.js');


app.get("/menueItem", function (req, res) {
  res.send("hellow dear");
});
[]
  
// post route to add a person
app.post('/person', async(req,res) =>{

  try{
    const data = req.body;

    const newPerson = new Person(data); 

    const response = await newPerson.save();

    console.log('data saved successfully')
    res.status(200).json({response});


  }catch(err){
     console.log('error occure', err);
     res.status(500).json({err: 'Internal Servar Error'});
  

  }

})

  app.get('/person', async(req, res)=>{

    try{

      const data = await Person.find();
      console.log('data fetched successfully');

      res.status(200).json(data);

    }catch(err){
     console.log('error occure', err);
     res.status(500).json({err: 'Internal Servar Error'});
  
    }
  })


app.listen(30, () => {
  console.log("server is on prot num- 30");
});



/*


  const data = req.body // Assume that reqest body is containing the person data.
  
  // Creating the new person document using the mongoose model
  // const newPerson = new Person();
  
  newPerson.name = data.name;
  newPerson.age = data.age;
  newPerson.work = data.work;
  newPerson.mobile = data.mobile;
  newPerson.email = data.email;
  newPerson.adress = data.adress;
  newPerson.salary = data.salary;
 // This is very complex way to save the data to the database


// we prefer to save

  const newPerson = new Person(data);
 
  newPerson.save((err, savedPerson) =>{
      if(err){
        console.log('error occure', err);
        res.status(500).json({err: 'Internal Servar Error'});
      }else{
        console.log('data saved successfully')
        res.status(200).json({savedPerson})
      }
  })   // this is callback hell we dont use callbacks in post method
      
  // we will use async and await
  
*/