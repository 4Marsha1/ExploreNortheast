import React from "react";
import styles from "./Popup.module.css";

function Popup({ body, handleOnButtonClick }) {
    return (
        <div className={styles["popup-box"]}>
            <div className={styles["box"]}>
                <div className={styles["popup-button"]} onClick={handleOnButtonClick}>X</div>
                <p className={styles["popup-body"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis, tortor sed dapibus finibus, mi mauris eleifend eros, ac lobortis augue libero ut elit. Vestibulum tincidunt, urna eu tristique condimentum, ante libero congue dui, dictum aliquam ipsum sem a velit. Donec eleifend ligula non sem tempus fermentum. Etiam condimentum tincidunt justo, at scelerisque arcu tristique non. Fusce rhoncus pretium cursus. Suspendisse potenti. Quisque et placerat urna. </p>
            </div>
        </div>
    );
};

export default Popup;