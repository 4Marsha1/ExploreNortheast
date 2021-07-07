import React from 'react'
import styles from "./ExploreCard.module.css"
const index = (props) => {
    return (
        <div className={styles["explore-card"]}>
            <img src={props.src} alt="" />
            <div className={styles["info"]}>
                <span className={styles["name"]}>{props.name}</span>
                <span className={styles["location"]}>{props.location}</span>
            </div>
        </div>
    )
}

export default index
