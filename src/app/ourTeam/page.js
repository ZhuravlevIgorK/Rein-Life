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
                        <img className={styles.img} src="IgorZ.jfif" alt="фото"/>
                        <figcaption >Development Director <br/>Zhuravlev Igor</figcaption>
                    </figure> 
                </div>
                <figure className={styles.foto}>        
                    <img className={styles.img} src="VadimM.jpg" alt="фото"/>
                    <figcaption >Executive director <br/>Vadim Minakov</figcaption>
                </figure> 
               
                 
            </div>         

                
        </div>
    )
}