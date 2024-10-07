import React from 'react'
import style from "./IsFollowing.module.css"
export const IsFollowing = (props) => {
    const {is_following} = props;
    // console.log(is_following);
    const isTrue = is_following

    // if(isTrue){
    //     console.log("Folloing")
    // }
    // else{
    //     console.log("Unfollow")
    // }
  return (
    <div className={style.following_div}>
        {isTrue ? <button>Following</button> : <button>Unfollow</button> }
    </div>
  )
}

