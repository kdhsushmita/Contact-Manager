import React, { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      id: Math.random(),
      name: name,
      contact: contact,
      address: address,
    };
    if (name.length < 1 || contact.length < 1 || address.length < 1) {
      alert("Fill all the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setContact("");
      setAddress("");
    }
  };
  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const onContactChangeHandler = (event) => {
    setContact(event.target.value);
  };
  const onAddressChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  return (
    <>
      <div>
        <form onSubmit={onFormSubmitHandler}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={onNameChangeHandler}
          required
        />
        <input
          type="text"
          value={contact}
          placeholder="Contact"
          onChange={onContactChangeHandler}
          required
        />
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={onAddressChangeHandler}
          required
        />{" "}
        <br />
        <br />
        <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
