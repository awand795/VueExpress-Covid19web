const express = require('express');
const app = express();
const cors = require('cors');
const apiController = require('./controllers/apiController');
const PORT = process.env.PORT || 5000;

//Midleware CORS
app.use(cors());

app.use('/api/corona',apiController);

if(process.env.NODE_ENV === "production"){
    //static folder
    app.use(express.static(__dirname+"/public"));
    //Handle SPA
    app.get(/.*/,(req,res)=>{
        res.sendFile(__dirname+'/public/index.html');
    });
}

app.listen(PORT,()=>{
    console.log(`Application running on port ${PORT}`);
});