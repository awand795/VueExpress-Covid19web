const express = require('express');
const router = express.Router();
const url = 'http://api.kawalcorona.com';
const request = require('request');

router.get('/positif',(req,res)=>{
    request.get(url+'/positif',(error,response,body)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(JSON.parse(body));
        }
    }); 
});

router.get('/sembuh',(req,res)=>{
    request.get(url+'/sembuh',(error,response,body)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(JSON.parse(body));
        }
    }); 
});

router.get('/meninggal',(req,res)=>{
    request.get(url+'/meninggal',(error,response,body)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(JSON.parse(body));
        }
    }); 
});

router.get('/indonesia',(req,res)=>{
    request.get(url+'/indonesia',(error,response,body)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(JSON.parse(body));
        }
    }); 
});

router.get('/indonesia/provinsi',(req,res)=>{
    request.get(url+'/indonesia/provinsi',(error,response,body)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(JSON.parse(body));
        }
    }); 
});

router.get('/global',(req,res)=>{
    request.get(url,(error,response,body)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(JSON.parse(body));
        }
    }); 
});

module.exports = router;