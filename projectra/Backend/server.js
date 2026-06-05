import express from 'express'
import cors from 'cors'
import { userchecking } from './Functions/user.js';
import { adduser } from './Database/userdbhandling.js';
const server = express();
import { MongoClient } from 'mongodb';
server.use(express.json());
server.use(cors())
let db;
let users;
const client = new MongoClient("mongodb://localhost:27017/");
const connectdb = async () => {
    try {
        await client.connect();
        db = client.db("Projectra");

        console.log(" mongodb is connected")
    }
    catch (e) {
        console.log("Mongo db connection error" + e);
    }
}
const requestlistener = async () => {
    console.log('server is listening on 7000 port');
    await connectdb();

}
server.get('/api/users', async (req, res) => {
    users = await db.collection("users").find().toArray();
    console.log(users);
    res.json(users);

})
server.post('/api/users',async (req,res)=>{
    const {name,email,password}=req.body;
    console.log(name)
    let userchecked= await userchecking(dib,req.body);
    console.log(userchecked)
    if (userchecked.isnotemail===false && userchecked.existuser===false && userchecked.usernameexist===false && userchecked.emailzero===false && userchecked.passwordzero===false && userchecked.passwordcondition===true){
        console.log("adding");
        adduser(db,req.body);
    res.json({msg: userchecked});
    }
    else{
        console.log('not adding')
        res.json({msg: userchecked});
    }
})


server.listen(7000, requestlistener);

