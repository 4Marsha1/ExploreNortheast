import React, { useState } from 'react'
import styles from "./ExploreCard.module.css"
import Popup from '../../popup'
const Index = ({ card }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <div className={styles["explore-card"]}>
            <img src={card.img} alt="" onClick={togglePopup} />
            <div className={styles["info"]}>
                <span className={styles["name"]}>{card.name}</span>
                <span className={styles["location"]}>{card.location}</span>
            </div>
            {isPopupOpen && (
                <Popup
                    type="photo"
                    className={styles["popup"]}
                    body={card.body}
                    img={card.img}
                    address={card.address}
                    handleOnButtonClick={togglePopup}
                />
            )}
        </div>
    )
}

export default Index
