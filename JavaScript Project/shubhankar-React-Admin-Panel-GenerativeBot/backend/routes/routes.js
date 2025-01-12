const express = require('express');
const router = express.Router();

// Models
const FeedBack = require('../models/FeedBackModel');
const Refinement = require('../models/RefinementModel');
const  Links=require('../models/LinksModel');

// route get all feedback
router.get('/feedback', async (req, res) => {
    try {
        const feedback = await FeedBack.find({});
        res.json(feedback);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete from feedback
router.delete('/feedback/delete/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const feedback = await FeedBack.findByIdAndDelete(id);
        res.json(feedback); 
    }
    catch(err){
        res.json({ message: err });
    }
});// add to refinement
router.post('/refinement', async (req, res) => {
    const refinement = new Refinement({
        query: req.body.query,
        response: req.body.response
    });

    try {
        const savedRefinement = await refinement.save();
        res.json(savedRefinement);
    } catch (err) {
        res.json({ message: err });
    }
});



//routes for links
// route get all link
router.get('/link', async (req, res) => {
    
    try {
        const link = await Links.find();
      
        res.json(link);
    } catch (err) {
        res.json({ message: err });
    }
});

// delete from link
router.delete('/link/delete/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const link = await Links.findByIdAndDelete(id);
        res.json(link); 
    }
    catch(err){
        res.json({ message: err });
    }
});





 //update ke liye 
router.post('/updatelink', async (req, res) => {
    const newlink = new Links({
        linkurl: req.body.query,
       
    });
    try {
        const savedlink = await newlink.save();
        res.json(savedlink);

    } catch (err) {
        res.json({ message: err });
    }
});


//to add a new link

 router.post('/newlink', async (req, res) => {
    const newlink = new Links({
        linkname: req.body.linkname,
        linkurl: req.body.query,
       
    });
    try {
        const savedlink = await newlink.save();
        res.json(savedlink);

    } catch (err) {
        res.json({ message: err });
    }
});
module.exports = router;