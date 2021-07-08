import React from 'react'
import styles from "./VideoCard.module.css"

const index = (props) => {
    return (
        <div className={styles["video"]}>
            <img src={props.src} />
            <span className={styles["date"]}>{props.date}</span>
            <span className={styles["location"]}>{props.location}</span>
        </div>
    )
}

export default index
