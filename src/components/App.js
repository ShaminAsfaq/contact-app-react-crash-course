import React, {useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';

import '../styles/App.css';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {...contact, id: uuid()}]);
  };

  const removeContactHandler = (id) => {
    const filteredContacts = contacts.filter(each => each.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const foundContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (foundContacts) {
      setContacts(foundContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="ui container">
      <Header/>
      <div style={{paddingTop: '5%'}}>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} removeContactHandler={removeContactHandler}/>
      </div>
    
    </div>
  );
}

export default App;

