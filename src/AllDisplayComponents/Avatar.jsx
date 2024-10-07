import React from 'react'
import style from "./Avatar.module.css"
export const Avatar = (props) => {
    const {avatar} = props
  return (
    <div className={style.image_div}>
        <img src={avatar} alt="Image loading.." />
    </div>
  )
}
