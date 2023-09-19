import React from 'react'

const ContactList = ({ contact }) => {
  // const myStyle = { color: "red" , background:"green",border:"2px solid black"}
  return (
    <div>
      <div className="contactList" /*style={myStyle}*/>
        {contact.name}
        <br />
        {contact.contact}
        <br />
        {contact.address}
        <br />
      </div>
    </div>
  )
}

export default ContactList
