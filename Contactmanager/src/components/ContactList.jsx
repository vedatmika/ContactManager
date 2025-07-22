import React from "react";
import Contactcard from "./Contactcard";

const ContactList = (props) => {
  const renderList = props.contacts.map((contact,idx) => {
    return (
   <Contactcard key={idx} contact={contact}></Contactcard>
    )
  });

  return <div className="ui celled list">{renderList}</div>;
};

export default ContactList;
