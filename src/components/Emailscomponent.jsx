import React from 'react'
import Emailcomponent from './emailcomponent'

function Emailscomponent(props) {
  return (
    <>
    <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
            // eslint-disable-next-line react/jsx-key
            <Emailcomponent key = {index} index = {index} email = {email} toggleRead = {props.toggleRead} toggleStar = {props.toggleStar}/>
          ))}
        </ul>
      </main>
    </>
    
  )
}

export default Emailscomponent