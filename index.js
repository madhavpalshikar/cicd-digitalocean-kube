const app = require('./app');

app.listen(process.env.PORT, (err)=>{
    if(err){
        console.error(err);
    }

    console.log(`Service is running at port awesome ${process.env.PORT}`);
})