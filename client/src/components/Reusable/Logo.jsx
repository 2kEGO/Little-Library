import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Logo = ({icon}) => {
  return (
    <div className='logo-container'>
        <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default Logo