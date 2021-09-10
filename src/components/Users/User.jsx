import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import {getFollowingInProgress} from "../../redux/users-selector";

let User = ({user,...props}) => {
let u=user;
    return <div>

                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small = null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                    </div>
                    <div>{
                        u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                props.unfollow(u.id);

                            }}>Unfollow</button> :

                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                props.follow(u.id);
                            }}>Follow</button>
                    }
                    </div>
                </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                    <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                </div>

}


export default User;