export const userchecking=async (db,user)=>{
    let users=await db.collection('users').find().toArray();
    console.log(users);
    console.log(user);
    let usernamechecked={existuser:false,usernamezero:true,isnotemail:true,emailzero:true,passwordzero:true,passwordcondition:false,usernameexist:false}
    // let existuser=false;
    users.map((u,i)=>{
        if (u.email===user.email){
            usernamechecked.existuser=true;
        }
        if (u.name===user.name){
            usernamechecked.usernameexist=true;
        }
    });
    
        
        

    if (user.name.length>0){
        usernamechecked.usernamezero=false;

    }
    if (user.email.length>0){
        usernamechecked.emailzero=false;
    }
    if (user.password.length>=6){
        usernamechecked.passwordzero=false;
    }
    if (/[a-z]/.test(user.password)){
        if (/[A-Z]/.test(user.password)){
            if (/[^A-Za-z0-9]/.test(user.password)){
                usernamechecked.passwordcondition=true;
            }
        }
    }
    
    if (user.email.endsWith('@gmail.com')){
        
        usernamechecked.isnotemail=false;
    }
    
    return usernamechecked;
    

}