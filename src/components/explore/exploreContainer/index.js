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
            <span className={styles["see-more"]}>see more ...</span>
        </>
    )
}

export default index
