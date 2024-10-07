import React from 'react'
import { Avatar } from './AllDisplayComponents/Avatar';
import { UserNameAndAddress } from './AllDisplayComponents/UserNameAndAddress';
import style from "./DisplayUserDetails.module.css"
import { IsFollowing } from './AllDisplayComponents/IsFollowing';

export const DisplayUserDetails = (props) => {
    // console.log(props);
    const {avatar, first_name, last_name, address, points, followers, posts, is_following} = props;
    // console.log(address);
  return (
    <div>
    
        <div className={style.main_div}>
            <Avatar avatar={avatar}/>
            <UserNameAndAddress first_name = {first_name} last_name = {last_name} address = {address}/>
            <div className={style.point_div}>
                <p className={style.same}>Points</p>
                <p>{points}</p>
            </div>
            <div className={style.follower_div}>
                <p className={style.same}>Followers</p>
                <p>{followers}</p>
            </div>
            <div className={style.post_div}>
                <p className={style.same}>Posts</p>
                <p>{posts}</p>
            </div>
            <IsFollowing is_following={is_following}/>
        </div>
    </div>
  )
}
