import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUserCount, pageSize, onPageChanged, currentPage, ...props}) => {

    return <div>

        <Paginator totalItemsCount={totalUserCount} pageSize={pageSize} onPageChanged={onPageChanged}
                   currentPage={currentPage}/>
        <div>
            {
                props.users.map(u => <User user={u}
                                           {...props}
                                           key={u.id}
                    />
                )
            }
        </div>
    </div>
}


export default Users;
