import styles from "./contacts.module.css"
import ButtonMain from "../components/Button/button";


export default function ourResearch() {
    return (
        <div className={styles.contacts}>            
            <ButtonMain />
            <div className={styles.mapsAndTel}>
                <div >
                    <div className={styles.contactMy}>Contacts:</div>
                    tel +7 (499)849-71-20
                    <br/>fax +7 (499)849-71-21                
                </div>           
                
                <div className={styles.map1}>
                    <div className={styles.text}> Our office:</div>
                    <a className={styles.map2}  href="https://yandex.ru/maps/?um=constructor%3Aedabffe91d4cadbff7d5d11111aa4a1d341e0c3b873b281cf3a9dc716c0ff614&amp;source=constructorStatic"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aedabffe91d4cadbff7d5d11111aa4a1d341e0c3b873b281cf3a9dc716c0ff614&amp;width=600&amp;height=450&amp;lang=ru_RU"/></a>
                </div>
            </div> 

        </div>
    )
}
