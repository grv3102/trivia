var router = require('express').Router();

var data = require('../models/data');


router.get('/',verify, async (req,res)=>{
    data.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log('Error in  Retriving Data : '+JSON.stringify(err, undefined, 2));
        }
        });
});

router.post('/post', async (req,res)=>{
    var Data = new data({
        name : req.body.name,
        answer1 : req.body.answer1,
        answer2 : req.body.answer2
    });
    try{
        var res, msg;
        if(Data.save()){
            res =1;
            msg = "Successfully data saved";
        }

        res.send(res + "\t"+ msg);
    }catch(err){
        res.status(400).send(err);
    }

});


module.exports = router;