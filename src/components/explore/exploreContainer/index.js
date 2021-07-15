import React from 'react'
import styles from "./Explore.module.css"
import ExploreCard from "../exploreCard"
import ExploreData from "../exploreData/exploreData"

const index = () => {
    const cards = ExploreData.map(card => {
        return <ExploreCard key={card.id} card={card} />
    })
    return (
        <>
            <div className={styles["explore"]}>
                {cards}
            </div>
            <button className={styles["see-more"]}>see-more...</button>
        </>
    )
}

export default index
