import React from 'react'
import Counter from './counter'
import Header from './header'
import Card from './profile-card'
const App = () => {
   return(
    <>
     <Header />
     <div className="flex justify-around">

     <Card fname="Nasrullah" lname="Qanoni" job="web devloper"/>
     <Card fname="Ali" lname="Ahmadi" job="designer"/>
     <Card fname="mojib" lname="faqiri" job="devloper"/>
     </div>
     <Counter />
    </>
   )
}

export default App

