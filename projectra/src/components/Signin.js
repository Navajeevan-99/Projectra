import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { setUserDetails } from './store/userSlice';
import './Signin.css';

const Signin = () => {
    const {state}=useLocation();
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const [name,setname]=useState('')
    const [email,setemail]=useState ('');
    const [password,setpassword]=useState('');
    const [checkeduser,setcheckeduser]=useState({passwordcorrect:true})
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
        let cuemail=email;
        if (!email.endsWith('@gmail.com')){
            cuemail=cuemail+'@gmail.com';
            cuemail=cuemail.toLowerCase();
            
        }
        console.log(cuemail)
        console.log(password)
        users.current.map((user)=>{
            if (user.email && !user.password===password){
                    setcheckeduser({...checkeduser,passwordcorrect:false})
            }
            if (user.email===cuemail && user.password===password){
                
                userexist=true;
                u=user;
            }
           
        })
        if (userexist){
                console.log(u);
                alert('Sucessfully Sign in');
                await dispatch(setUserDetails(u));
                navigate('/projects');
                
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
    <div className='center fullpage'>

    <form className='formsignin center column'>
        <h1 style={{fontSize:'40px'}}>Sign In</h1>
        <table className='tablesingin '>
        <tbody>
           
            <tr>
                <td><p>Email</p></td><td></td><td><input className='signinput' type='email' value={email} onChange={emailchange} placeholder='Enter the E-Mail'/> </td>
            </tr>
            <tr>
                <td><p>Password</p></td><td></td><td><input className='signinput' type='password' value={password} onChange={passwordchange} placeholder='Enter the Password'/> </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td> {!checkeduser.passwordcorrect &&<p style={{color:'red',fontSize:'12px',textAlign:'left'}}>Incorrect password</p>}</td>
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