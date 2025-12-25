import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import Card from './profile-card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
   <div className='flex justify-around'>
    <Card fname="Nasrullah" lname="Qnoni" job="softwere engineer"/>
    <Card fname="Ali" lname="Ahadi" job="web engineer"/>
    <Card fname="mohammad" lname="khan" job="engineer"/>
   </div>
  </StrictMode>,
)
