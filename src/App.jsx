import { useState } from 'react'
import $ from 'jquery';
import reactLogo from './assets/svg/react.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';

import Btn  from './components/button';
import Header from './components/header';
import Cards from './components/cards';
import Feature from './components/feature';

import './App.css'


function App() {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

export default App
