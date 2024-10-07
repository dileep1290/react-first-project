import style from "../DisplayUserDetails.module.css"

import React from 'react'

export const UserNameAndAddress = (props) => {
    const {first_name, last_name, address} = props
  return (
    <div className='main-div'>
        <div className='sub-div'>
            <div className='user-name-div'>
                <span className={`${style.same}`}>{first_name}</span>
                <span className={`${style.same}`}>{last_name}</span>
            </div>
            <div className={`${style.address_div} ${style.span_mt}`}>{address}</div>
        </div>
    </div>
  )
}
