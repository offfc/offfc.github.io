import styles from "./MainSheetView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faArrowUpRightFromSquare, faCircleNotch, faTable } from "@fortawesome/free-solid-svg-icons";

function MainSheetView(props: { target: string; title: string; description?: string }) {
    const [loading, setLoading] = useState<boolean>(true);
    const loadingClass = loading ? styles.show : styles.hidden;

    useEffect(() => {
        const innerFrame = document.getElementById("inner") as HTMLIFrameElement;

        if (innerFrame === null)
            return;

        const handleLoadStart = () => {
            setLoading(true);
        }

        const handleLoad = () => {
            setLoading(false);
        };

        if (innerFrame.contentWindow && innerFrame.contentWindow.document.readyState === 'complete') {
            handleLoad();
        } else {
            innerFrame.addEventListener('loadstart', handleLoadStart);
            innerFrame.addEventListener('load', handleLoad);
        }

        return () => {
            innerFrame.removeEventListener('loadstart', handleLoadStart);
            innerFrame.removeEventListener('load', handleLoad);
        };

    }, [props.target]);

    return (
        <div className={styles.sheetContainer}>
            <div className={styles.sheetTopbar}>
                <div className={styles.sheetTopbarPart}>
                    <FontAwesomeIcon icon={faTable} style={{width: "24px", height: "24px"}} />
                    <span className={styles.sheetTitle}>{props.title}</span>
                    <div className={`${styles.loadingIconContainer} ${loadingClass}`}>
                        <FontAwesomeIcon icon={faCircleNotch} spin />
                    </div>
                </div>
                <div className={styles.sheetTopbarPart}>
                    <a className="footer__link-item" href={props.target} target="_blank" rel="noopener noreferrer">
                        <b>在新页面打开 </b>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            </div>
            {props.description || (
                <div>{props.description}</div>
            )}
            <iframe src={props.target} style={{ width: "100%", aspectRatio: 16 / 9 }} id="inner" />
        </div>
    );
}

export default MainSheetView;
