import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Br,Routes as Rs,Route as R} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { useState } from 'react';
import Kanban from './components/Kanban';
import Projects from './components/Projects';
import Userdetails from './components/Userdetails';
import { Projectpage } from './components/Projectpage';
import Task from './components/Task';
function App() {
  return (
    <div className="App">
      <Br>
      <Rs>
        <R path='/' element={<Signup/>}/>
        <R path='/login' element={<Signin/>}/>
        <R path='/kanban' element={<Kanban/>}/>
        <R path='/projects' element={<Projects/>}/>
        <R path='/user' element={<Userdetails/>}/>
        <R path='/projectpage' element={<Projectpage/>}/>
        <R path='/task' element={<Task/>}/>

      </Rs>
      </Br>
     
    </div>
  );
}

export default App;
