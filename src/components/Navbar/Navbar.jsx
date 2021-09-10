import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
console.log(s);
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
 // }

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
        </div>

        <div className={s.item}>
            <a href="/news">News</a>
        </div>
        <div className={s.item}>
            <a href="/music">Music</a>
        </div>
        <div className={s.item}>
            <a href="/settings">Settings</a>
        </div>
    </nav>
}

export default Navbar;