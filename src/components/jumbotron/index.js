import React from 'react'
import styles from "./Jumbotron.module.css"

const index = () => {
    return (
        <div className={styles["jumbotron"]} >
            <span className={styles["brand-name"]}>Explore Northeast</span>
            <div className={styles["mid"]}>
                <div class={styles["container"]}>
                    <a href="http://marcel-pirnay.be/" class={styles["btn"]}>
                        <svg width="200" height="62">
                            <defs>
                                <linearGradient id="grad1">
                                    <stop offset="0%" stop-color="#FF8282" />
                                    <stop offset="100%" stop-color="#E178ED" />
                                </linearGradient>
                            </defs>
                            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="190" height="50"></rect>
                        </svg>
                        <span>Discover</span>
                    </a>
                </div>
                <div className={styles["hello"]}>
                    <a href="http://marcel-pirnay.be/" class={styles["btn"]}>
                        <svg width="200" height="62">
                            <defs>
                                <linearGradient id="grad1">
                                    <stop offset="0%" stop-color="#FF8282" />
                                    <stop offset="100%" stop-color="#E178ED" />
                                </linearGradient>
                            </defs>
                            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="190" height="50"></rect>
                        </svg>
                        <span>Say Hello</span>
                    </a>
                </div>
            </div>
            <span className={styles["headline"]}>Discover Northeast India to the fullest!</span>
            <div className={styles["description"]}>
                <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec pulvinar tellus, in mollis velit. Duis non mauris tempus, venenatis tellus consectetur, mattis sem. Suspendisse non tempus nulla, quis cursus nisi. Mauris tristique, ligula vulputate imperdiet vulputate.</span>
            </div>
        </div>
    )
}

export default index
