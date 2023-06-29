import React from 'react'
import './Error.css'

const Error = () => {
  return (
    <div className='error-container'>
        <p className='error-data'>
        <span>ERROR !</span>
        <br></br>The file concerned may have been damaged, moved, deleted, or a bug may have caused the error. Alternatively, the file simply might not exist, or the user has mistyped its name. This is most commonly seen on the internet with outdated links to web pages that no longer exist. On a local computer, this is more frequent on command line interfaces than on graphical user interfaces where files are presented iconically and users do not type file names.
        </p>
     
    </div>
  )
}

export default Error
