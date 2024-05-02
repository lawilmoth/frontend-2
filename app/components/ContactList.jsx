import React from "react"

const ContactList = ({ contacts }) => {

    return(
    <>
    <h2>Contacts</h2>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>To do</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>)
    }

export default ContactList