const express = require('express');

const router = express.Router();

const student = require('../moduls/SchoolStudents');


// Push the Student Data to the Database
router.post('/', async(req, res)=>{
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
    
});

// Get the student data from the database
router.get('/', async(req, res)=>{
    try{
        const data = await student.find(); 

        console.log('data fetched successfully');

      res.status(200).json(data);

    }catch(error){
           console.log('Failed to save data');
           res.status(500).json({error : 'Internal Server Error'})
    };
});

// genderType data get from the database
router.get('/:gender', async(req, res)=> {
    try{
        const genderType = req.params.gender ;  // :gender this variable is here; extract the work type from the gender parameter
    if(genderType =='male' || genderType == 'female' || genderType == 'other'){

        const response = await student.find({gender:genderType});

        console.log('Response Fetched');
        res.status(200).json({response});

    }else{
        res.status(404).json({error : 'Invalid Work Type'});
    }
        }catch(error){
           console.log('Failed to save data');
           res.status(500).json({error : 'Internal Server Error'})
    };
});


// Update Operations 
router.put('/:id', async(req, res)=>{
    try{
        const studentId = req.params.id; // extrect id from the id parameter
        const updateStudentData = req.body; // update data for the person

        const response = await  student.findByIdAndUpdate(studentId, updateStudentData, {
            new: true,
            runValidators:true
        });

        if(!response){
            console.log('Student Not Found');
            res.status(404).json({error : 'internal Server Error'});
        }
    } catch(error){
           console.log('Failed to save data');
           res.status(500).json({error : 'Internal Server Error'});
    };
});


// Delete Operations  (using delete method);
router.put('/:id', async(req, res)=>{
    try{
        const studentId = req.params.id; // extrect id from the id parameter
       
        const response = await  student.findByIdAndDelete(studentId);

        if(!response){
            console.log('Student Not Found');
            res.status(404).json({error : 'internal Server Error'});
        }
        
    } catch(error){
           console.log('Failed to save data');
           res.status(500).json({error : 'Internal Server Error'});
    };
});

module.exports = router;