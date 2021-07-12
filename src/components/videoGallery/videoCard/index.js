import React, { useState } from 'react'
import styles from "./VideoCard.module.css"
import Popup from "../../popup"
import { ReactComponent as Play } from "../../../uploads/playButton.svg"
import YouTube from 'react-youtube'

const Index = ({ video }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    return (
        <div className={styles["video"]}>
            <div className={styles["video-card"]}>
                <Play className={styles["play"]} onClick={togglePopup} />
                <img src={video.img} alt="video image" className={styles["video-img"]} />
            </div>
            <span className={styles["date"]}>{video.date}</span>
            <span className={styles["location"]}>{video.location}</span>
            {isPopupOpen && (
                <Popup
                    type="video"
                    className={styles["popup"]}
                    video_link={video.video_link}
                    handleOnButtonClick={togglePopup}
                />
            )}
        </div>
    )
}

export default Index
