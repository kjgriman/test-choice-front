import { useState, CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import styles from "./spinner.module.css";


export default function Spinner() {
    let [color, setColor] = useState("#00994E");
    return (
        <div className={styles.backgroundSpinner}>
            <div className={styles.spinner}>
                <ScaleLoader
                    color="#00994E"
                    loading={true}
                    size={450}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
      );
}