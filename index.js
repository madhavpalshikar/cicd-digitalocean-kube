const app = require('./app');

app.listen(4000, (err)=>{
    if(err){
        console.error(err);
    }

    console.log(`Service is running at port: 4000`);
})