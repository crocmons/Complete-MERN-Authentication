const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})