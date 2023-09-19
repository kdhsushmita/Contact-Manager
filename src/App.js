import ContactList from "./Components/ContactList";
import "./Styles/App.css";
import ContactAdder from "./Components/ContactAdder";
import { useState } from "react";
import NavBar from "./Components/NavBar";

const App = () => {
  const getData = JSON.parse(localStorage.getItem("contacts"));
  const [contact, setContact] = useState(getData ? getData : []);
  const onContactAdded = (contactData) => {
    const allContacts = [...contact, contactData];
    setContact(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const handleClearAll = () => {
    localStorage.clear();
    setContact([]);
  }
  return ( 
    <>
      <NavBar />
      <div className="container">
        <h3>Contact Adder:</h3>
        <ContactAdder onContactAdded={onContactAdded} />
      </div>
      <div className="container">
        <h3>Contact List:</h3>
        {contact.map((data) => (
          <ContactList key={data.id} contact={data} />
        ))}
        <br />
        <button onClick={handleClearAll} style={{ backgroundColor: "#CC0000" }}>Clear All Contacts</button>
      </div>
    </>
  );
};
export default App;
