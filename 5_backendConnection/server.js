const express = require('express');

const app = express();

const db = require('./db');

const student = require('./moduls/SchoolStudents');

const bodyParser =  require('body-parser');
app.use(bodyParser.json());


app.post('/student', async(req, res)=>{
    try{
        const data = req.body;

        const studedentData = new student(data);

        const response = await studedentData.save();
        
        console.log('menueItem => data saved successfully')
        res.status(200).json({response}); // this will show the status in the network section show there that all the data the is fielled and the post to the server


    }
    catch(error){
           console.log('Failed to save data');
           res.status(500).json({error : 'Internal Server Error'})
    };
    
})

app.get('/student', async(req, res)=>{
    try{
        const data = await student.find(); 

        console.log('data fetched successfully');

      res.status(200).json(data);

    }catch(error){
           console.log('Failed to save data');
           res.status(500).json({error : 'Internal Server Error'})
    };
});



app.listen(4000, ()=>{
    console.log('Server is responding on 4000 Port');
});