import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
const App = () => {


   const [contacts,setContacts]=useState([]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts, contacts]);
  }

  return (
    <div className='ui container'>
      <Header/>
      <AddContact AddContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App
