export async function adduser(db,user){
    await db.collection('users').insertOne(user);
    console.log('user is inserted');
}