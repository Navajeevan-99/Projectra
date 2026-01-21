import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Br,Routes as Rs,Route as R} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { useState } from 'react';
import Kanban from './components/Kanban';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Br>
      <Rs>
        <R path='/' element={<Signup/>}/>
        <R path='/login' element={<Signin/>}/>
        <R path='/kanban' element={<Kanban/>}/>
        <R path='/projects' element={<Projects/>}/>
      </Rs>
      </Br>
     
    </div>
  );
}

export default App;
