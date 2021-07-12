import React from 'react'
import styles from "./Video.module.css"
import VideoCard from "../videoCard"
import videoData from "../videoData/videoData"

const Index = () => {
    const videos = videoData.map(video => {
        return <VideoCard key={video.id} video={video} />
    })
    return (
        <div className={styles["video-container"]}>
            <div className={styles["video-header"]}>
                <span className={styles["section-title"]}>Our Videos</span>
                <span className={styles["section-desc"]}>
                    We capture memories of the places we visit,
                    the people we meet, joy and pain, smiles and tears.
                    Explore the beautiful Northeast India through our lens.
                </span>
            </div>
            <div className={styles["videos"]}>
                {videos}
            </div>
            <span className={styles["see-more"]}>see more ...</span>
        </div>
    )
}

export default Index
