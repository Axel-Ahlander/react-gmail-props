import React from 'react'

function DisplayEmail({email, onBack}) {
    if (email != null){
        return (
            <>
            <div className="displayed-email">
                <h1>From: {email.sender}</h1>
                <p>Content: {email.title}</p>
                <br />
                <button onClick={ onBack}>Back</button>
            </div>
            
            </>
          )
    }

    else {
        return null;
    }
  
}

export default DisplayEmail