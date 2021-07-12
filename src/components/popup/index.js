import React, { useState } from "react";
import styles from "./Popup.module.css";
import { ReactComponent as Pin } from "../../uploads/location_pin.svg"
import YouTube from "react-youtube";

function Popup({ type, body, handleOnButtonClick, img, address, video_link }) {
    const [show, setShow] = useState(false)
    const readMore = () => {
        setShow(!show)
    }
    const options = {
        playerVars: {
            autoplay: 1
        }
    }
    if (type === 'photo') {
        return (
            <div className={styles["popup-box"]}>
                <div className={styles["box"]}>
                    <img src={img} className={styles["bg-img"]} />
                    <div className={styles["popup-header"]}>
                        <div></div>
                        <Pin className={styles['pin']} />
                        <div className={styles["popup-button"]} onClick={handleOnButtonClick}>X</div>
                    </div>
                    <span className={styles["address"]}>{address}</span>
                    <p className={styles["popup-body"]}>{show ? body : `${body.substring(0, 350)}...`}<br />
                        <button className={styles['btn2']} onClick={readMore}>{show ? 'Show Less' : 'Read More'}</button>
                    </p>
                    <div className={styles["explore"]}>Explore More</div>
                </div>
            </div >
        );
    }
    else if (type === 'video') {
        return (
            <div className={styles["popup-box"]}>
                <div className={styles["box"]}>
                    <div className={styles["popup-header"]}>
                        <div></div>
                        <Pin className={styles['pin']} />
                        <div className={styles["popup-button"]} onClick={handleOnButtonClick}>X</div>
                    </div>
                    <YouTube videoId={video_link} opts={options} className={styles["video-play"]} />
                    <div className={styles["explore"]}>Explore More</div>
                </div>
            </div >
        );
    }
};

export default Popup;