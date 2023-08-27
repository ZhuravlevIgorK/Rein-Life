import styles from "./ourTeam.module.css"
import ButtonMain from "../components/Button/button";


    
export default function ourResearch() {   
    return (
        <div className={styles.team}>            
            <ButtonMain />
            <h1> Our team:</h1>
            <div className={styles.photoLoc}>
                <div className={styles.fotoSyle}>
                    <figure className={styles.foto}>        
                        <img className={styles.img} src="http://кпрф-королёв.рф/UserFiles/Image/guravlev.jpg" width="250px" alt="фото"/>
                        <figcaption >Development Director <br/>Zhuravlev Igor</figcaption>
                    </figure> 
                </div>
                <figure className={styles.foto}>        
                    <img className={styles.img} src="https://4.downloader.disk.yandex.ru/preview/e0c303c3f9d73df540a9ba90912bdec62bf3f5101e03433e25e3c6a6ae3d607f/inf/rDILKMsQlyJhFAt7MnVPldO9FYLrgjnBIduH71kzi0mcZWM2PYXf33CkcsExRf-c8tL4EtAQmQcm9NHM8SX9Vw%3D%3D?uid=252678335&filename=c9312fb4-afaa-430a-936b-d2e4b4dd40ae.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=252678335&tknv=v2&size=1855x964" width="250px" alt="фото"/>
                    <figcaption >Executive director <br/>Vadim Minakov</figcaption>
                </figure> 
               
                 
            </div>         

                
        </div>
    )
}