import React from 'react'
import styles from "./Video.module.css"
import VideoCard from "../videoCard"
import Img1 from "../../../uploads/header.jpg"

const img1 = Img1

const Index = () => {
    return (
        <div className={styles["video-container"]}>
            <div className={styles["video-header"]}>
                <span className={styles["section-title"]}>Our Videos</span>
                <span className={styles["section-desc"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci diam,
                    pellentesque ac mi elementum, tempus condimentum leo. Nunc quis justo sit amet ipsum dapibus accumsan id sed justo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas orci diam, </span>
            </div>
            <div className={styles["videos"]}>
                <VideoCard src={img1} date="May 30, 2021" location="Arunachal" />
            </div>
            <span className={styles["see-more"]}>see more ...</span>
        </div>
    )
}

export default Index
