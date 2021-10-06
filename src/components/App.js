import React, {useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import api from '../api/contacts';


import '../styles/App.css';
import EditContact from './EditContact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filteredContactList, setFilteredContactList] = useState([]);

  //  Retrieve Contracts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const payload = {
      id: uuid(),
      ...contact
    }

    const response = await api.post('/contacts', payload);

    setContacts([...contacts, response.data]);
  };

  const searchHandler = (keyword) => {
    setSearchKey(keyword);

    if (keyword !== '') {
      const foundResult = contacts.filter(item => {
                            return  Object.values(item)
                                          .join(' ')
                                          .toLocaleLowerCase()
                                          .includes(keyword.toLocaleLowerCase());
                          });
                          setFilteredContactList(foundResult)
    } else {
      setFilteredContactList(contacts);
    }
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact?.id}`, contact);
    const { id } = response.data;

    setContacts(contacts.map(each => {
      return each?.id === id? { ...response?.data } : each;
    }));
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const filteredContacts = contacts.filter(each => each.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const getContactList = async () => {
      const foundList = await retrieveContacts();
      if (foundList) {
        setContacts(foundList);
      }
    }

    getContactList();
  }, []);


  return (
    <div className="ui container">
      <Router>
        <Header/>
        <div style={{paddingTop: '50px'}}>
          <Switch>
            <Route 
                path="/" 
                exact
                render = { (props) => (<ContactList 
                                          {...props} 
                                          contacts={ searchKey.length < 1 ? contacts : filteredContactList } 
                                          searchKey={searchKey}
                                          searchHandler={searchHandler}
                                          removeContactHandler={removeContactHandler}
                                        />)}
              />

              <Route 
                path="/add" 
                render = { (props) => (<AddContact 
                                          {...props} 
                                          addContactHandler={addContactHandler} 
                                        />)}
              />

              <Route
                path="/contact/:id"
                component={ContactDetails}
              />

              <Route
                path = "/edit"
                render = { (props) => (<EditContact
                                          {...props}
                                          updateContactHandler={updateContactHandler} 
                                      />)}
              />
          </Switch>
        </div>
      </Router>
    
    </div>
  );
}

export default App;

