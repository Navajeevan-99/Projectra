import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Signin = () => {
    const {state}=useLocation();
    const navigate=useNavigate();
    const [name,setname]=useState('')
    const [email,setemail]=useState ('');
    const [password,setpassword]=useState('');
    let users=useRef([]);
    const gotosignup=(e)=>{
        e.preventDefault();
        navigate('/',{state:{name,email,password}});
    }
    const checkuser=async (e)=>{
        e.preventDefault();
        await fetch('http://localhost:7000/api/users').
        then((response)=>{
            return response.json();
        }).then((response)=>{
            users.current=response;
        });
        let userexist=false;
        let u;
        users.current.map((user)=>{
            if (user.email===email && user.password===password){
                userexist=true;
                u=user;
            }
           
        })
        if (userexist){
                alert('Sucessfully Sign in');                
                navigate('/projects',{state: u})
                return;
        }
        alert('User does not exists');
        navigate('/login');
        

    }
    const emailchange=(e)=>{
        setemail(e.target.value);
    }
     const passwordchange=(e)=>{
            setpassword(e.target.value);
        }
         useEffect(()=>{
            if(state){
            setname(state.name);
            setemail(state.email);
            setpassword(state.password);}
        

    },[])
  return (
    <div>

    <form>
        <table>
        <tbody>
           
            <tr>
                <td><p>Email</p></td><td></td><td><input type='email' value={email} onChange={emailchange}/> </td>
            </tr>
            <tr>
                <td><p>Password</p></td><td></td><td><input type='password' value={password} onChange={passwordchange}/> </td>
            </tr>
            <tr>
                <td><button type="button" onClick={gotosignup}>Sign Up</button></td><td></td><td><button onClick={checkuser}>Sign In</button></td>
            </tr>

        </tbody>

        </table>

        </form>

    </div>
  )
}

export default Signin