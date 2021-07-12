import React from 'react';
import styles from "./Navbar.module.css"
import Logo from "../../uploads/logo.png"

const logo = Logo

const index = () => {
    return (
        <div className={styles['navbar']}>
            <ul>
                <li><span>About</span></li>
                <li><span>Explore</span></li>
                <img src={logo} className={styles['logo']} alt="logo" />
                <li><span>Videos</span></li>
                <li><span>Blog</span></li>
            </ul>
        </div>
    )
}

export default index
