import React from 'react';
import styles from "./Navbar.module.css"
import { ReactComponent as Logo } from "../../uploads/logo.svg"

const index = () => {
    return (
        <div className={styles['navbar']}>
            <ul>
                <li><span>About</span></li>
                <li><span>Explore</span></li>
                <Logo className={styles['logo']} />
                <li><span>Videos</span></li>
                <li><span>Blog</span></li>
            </ul>
        </div>
    )
}

export default index
