"use client"
import Header from "./components/Header"
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

import { useState, useEffect } from "react";

import styles from "./page.module.css";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(()=>{
      fetchContacts()
  },[]);

  const fetchContacts = async () =>{
      const response = await fetch('http://127.0.0.1:5000/contacts');
      const data = await response.json();
      setContacts(data.contacts);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact({});
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  }

  const openEditModal = (contact) => {
    if (isModalOpen) return 
    setCurrentContact(contact);
    setIsModalOpen(true);
  }

  const onUpdate = () =>{
    closeModal()
    fetchContacts()
  }

  return (
    <>
      <Header/>
      <ContactList contacts={contacts} updateContact={openEditModal} updateCallback = {onUpdate}/>
      <button onClick={openCreateModal}>Create New Contact</button>
      {isModalOpen && <div className="modal">
          <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
            <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
          </div>      
        
        </div>}
      
    </>
  );
}
