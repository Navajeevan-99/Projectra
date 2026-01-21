export const adduser=async (db,user)=>{
    let users=await db.collection('users').find().toArray();
    console.log(users);
    console.log(user);
    let existuser=false;
    users.map((u,i)=>{
        if (u.email===user.email){
            existuser=true;
        }
    });
    if (!existuser){
        await db.collection('users').insertOne(user);
        console.log('inserted');
    }
    return existuser
    

}