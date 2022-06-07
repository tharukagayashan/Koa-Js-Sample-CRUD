const Koa =  require('koa');
const mongoose = require('mongoose');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(cors());
app.use(bodyParser());

const PORT = 3000 || process.env.PORT;
const MONGODB = "mongodb+srv://admin:admin@cluster0.ouwfw.mongodb.net/Test_DB?retryWrites=true&w=majority";

mongoose.connect(MONGODB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Mongo DB Connected...");
})
.catch((err)=>{
    console.log(err);
})

const user = require('./routes/user.route');

app.use(user.routes()).use(user.allowedMethods());

app.listen(PORT,()=>{
    console.log(`App is up and running on PORT ${PORT}`);
})