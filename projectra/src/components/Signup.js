import React, { useState,useRef, useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import './Signup.css'
const Signup = () => {
    const {state}=useLocation();
        const navigate=useNavigate();    
        const [name,setname]=useState('');
        const [email,setemail]=useState ('');
        const [password,setpassword]=useState('');
        let useradded=useRef('false');
        const namechange=(e)=>{
            setname(e.target.value);
        }
        const emailchange=(e)=>{
            setemail(e.target.value);
        }
        const passwordchange=(e)=>{
            setpassword(e.target.value);
        }
        
        const addnewuser= async (e)=>{
            e.preventDefault();
            
            await fetch('http://localhost:7000/api/users',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                       name: name,
                       email: email,
                       password: password 
                    }
                )         
            
            }).then(async  (response)=>{
                return await response.json();
            }            
            ).then(async (response)=>{
                console.log(response);
                useradded.current=response.msg;
                console.log(response.msg)
            });
            console.log(useradded.current)
            if (useradded.current==='true'){
                alert('Sucessfull Sign Up');
                navigate('/login');
            }
            else{
                alert('User is already exists');
                navigate('/');
            }
        }
        const gotologin=()=>{
            navigate('/login',{state: {name,email,password}});
        }
        useEffect(()=>{
            if (state){
            setname(state.name);
            setemail(state.email);
            setpassword(state.password)}

        },[])
         

  return (
    <div className='center fullpage' >
        <form className='formsignup center column'>
        <h1 className='center'>Sign Up</h1>
        <table className='tablesignup'>
            
        <tbody>
            <tr>
                <td><p>Name</p></td><td></td><td><input type='text' value={name} onChange={namechange} placeholder='Enter your Name'/> </td>
            </tr>
            <tr>
                <td><p>Email</p></td><td></td><td><input type='email' value={email} onChange={emailchange} placeholder='Enter your E-mail'/> </td>
            </tr>
            <tr>
                <td><p>Password</p></td><td></td><td><input type='password' value={password} onChange={passwordchange} placeholder='Enter your Password'/> </td>
            </tr>
            <tr>
                <td><button type="button" onClick={addnewuser}>Sign Up</button></td><td></td><td><button type='button' onClick={gotologin}>Sign In</button></td>
            </tr>

        </tbody>

        </table>

        </form>


    </div>
  )
}

export default Signup