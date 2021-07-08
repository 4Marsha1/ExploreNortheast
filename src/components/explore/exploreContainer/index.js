import React from 'react'
import styles from "./Explore.module.css"
import ExploreCard from "../exploreCard"
import Img1 from "../../../uploads/explore/1.png"
import Img2 from "../../../uploads/explore/2.png"
import Img3 from "../../../uploads/explore/3.png"

const img1 = Img1;
const img2 = Img2;
const img3 = Img3;

const index = () => {
    return (
        <>
            <div className={styles["explore"]}>
                <ExploreCard src={img1} name="Sweet Cult" location="Guwahati" />
                <ExploreCard src={img2} name="Brahmaputra" location="Guwahati" />
                <ExploreCard src={img3} name="Bibliophilia Cafe" location="Guwahati" />
            </div>
            <span className={styles["see-more"]}>see more ...</span>
        </>
    )
}

export default index
