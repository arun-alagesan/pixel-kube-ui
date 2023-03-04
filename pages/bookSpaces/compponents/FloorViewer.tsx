import styles from './floorviewer.module.css'
import floor from '../../../assets/images/floor.png'
const FloorViewer = () => {

    return (
        <div>
            <div className={styles.con} style={{height:"524px", width:"569%", backgroundImage:`url(${floor.src})`, backgroundSize:'100%', backgroundRepeat:"no-repeat" }} >
                <div className={styles.dot + " " + styles.dot1}></div>
                <div className={styles.dot + " " + styles.dot2}></div>
                <div className={styles.dot + " " + styles.dot3}></div>
                {/* <img src={floor.src} className={styles.imgClass} style={{height:"100px", width:"60px"}} /> */}
            </div>
        </div>
    )

}
export default FloorViewer;