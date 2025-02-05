import React from 'react'
import Emailcomponent from './emailcomponent'

function Emailscomponent(props) {
  return (
    <>
    <main className="emails">
        <ul id = "curr-emails">
          {props.filteredEmails.map((email, index) => (
            <Emailcomponent key = {index} index = {index} email = {email} toggleRead = {props.toggleRead} toggleStar = {props.toggleStar} onClick={() => props.onClick(email)}/>
          ))}
        </ul>
      </main>
    </>
    
  )
}

export default Emailscomponent