import styles from "./ourTeam.module.css"
import ButtonMain from "../components/Button/button";
import Image from "next/image";


    
export default function ourResearch() {   
    return (
        <div className={styles.team}>            
            <ButtonMain />
            <h1> Our team:</h1>
            <div className={styles.photoLoc}>
                <div className={styles.fotoSyle}>
                    <figure className={styles.foto}>        
                        <Image className={styles.img} src="/IgorZ.jfif" width={300} height={310} alt="фото"/>
                        <figcaption >Development Director <br/>Zhuravlev Igor</figcaption>
                    </figure> 
                </div>
                <figure className={styles.foto}>        
                    <Image className={styles.img} src="/VadimM.jpg" width={300} height={310} alt="фото"/>
                    <figcaption >Executive director <br/>Vadim Minakov</figcaption>
                </figure> 
               
                 
            </div>         

                
        </div>
    )
}