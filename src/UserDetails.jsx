import React from 'react'
import { DisplayUserDetails } from './DisplayUserDetails'



export const UserDetails = ({userArray}) => {
    // console.log(userArray);
  return (
    <div>
        {
            userArray.map((eachPerson)=>{
                return <DisplayUserDetails key={eachPerson.id}  {...eachPerson}/>
            })
        }
    </div>
  )
}
