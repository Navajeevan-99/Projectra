import React, { useState,useRef, useEffect } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
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
        
        const addnewuser=(e)=>{
            e.preventDefault();
            
            fetch('http://localhost:7000/api/users',{
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
            
            }).then((response)=>{
                return response.json();
            }            
            ).then((response)=>{
                console.log(response.msg);
                useradded.current=response.msg
            });
            if (useradded==='true'){
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
    <div className='signupentire'>
        <form>
        <table>
        <tbody>
            <tr>
                <td><p>Name</p></td><td></td><td><input type='text' value={name} onChange={namechange}/> </td>
            </tr>
            <tr>
                <td><p>Email</p></td><td></td><td><input type='email' value={email} onChange={emailchange}/> </td>
            </tr>
            <tr>
                <td><p>Password</p></td><td></td><td><input type='password' value={password} onChange={passwordchange}/> </td>
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