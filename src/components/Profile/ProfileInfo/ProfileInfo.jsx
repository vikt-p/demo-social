import React from 'react';

import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = (props) => {
 if(!props.profile){
    return  <Preloader />
 }
  let onMainPhotoSelected=(e)=>{
     if (e.target.files.length){
         props.savePhoto(e.target.files[0]);
     }
    }

  return (

    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
        <div className={s.descriptionBlock}>

            <img src={props.profile.photos.large || userPhoto}/>
            {props.isOwner && <input type="file"  onChange={onMainPhotoSelected}/>}

            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
  )
}

export default ProfileInfo;