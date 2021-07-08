import React, { useState } from 'react'
import styles from "./ExploreCard.module.css"
import Popup from '../../popup'
const Index = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <div className={styles["explore-card"]}>
            <img src={props.src} alt="" onClick={togglePopup} />
            <div className={styles["info"]}>
                <span className={styles["name"]}>{props.name}</span>
                <span className={styles["location"]}>{props.location}</span>
            </div>
            {isPopupOpen && (
                <Popup
                    className={styles["popup"]}
                    body="Are you sure you want to delete this post?"
                    button1="Yes, delete this post!"
                    button2="Cancel"
                    handleOnButtonClick={togglePopup}
                />
            )}
        </div>
    )
}

export default Index
