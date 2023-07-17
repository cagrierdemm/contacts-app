import React, { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
  const oldContact = [
    {fullname:"Çağrı", phone_number:58324325143}, 
    {fullname:"Erdem", phone_number:58153425416}
  ];
    var [contact, setContact] = useState(() => {
      const stored = JSON.parse(localStorage.getItem('contacts'));
      return stored || oldContact;
    });

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contact));
    }, [contact]);

    useState(contact);

    const sortedContact = contact.slice().sort((a, b) => a.fullname.localeCompare(b.fullname));
    
  return (
    <div className='bg'>
        <List contact={sortedContact}/>
        <Form setContact={setContact} contact={contact}/>
    </div>
  )
}

export default Contacts