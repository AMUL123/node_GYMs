const express = require('express');
const router = express.Router();
const Person=require('./../models/Person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data saved');
        res.status(200).json(data);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
});
router.get('//:workType', async(req,res)=>{
    try{
      const workType= req.params.workType;
      if(workType=='Trainer' || workType=='Associate' || workType=='Swiper'){
        const response=await Person.find({work: workType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(400).json({error: 'Invalid workd type'});
      }
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports=router;