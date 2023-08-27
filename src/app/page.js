import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.mainPage}>
        <nav className={styles.menu}>              
            <Link href="ourResearch" className={styles.buttonMy}>Our research</Link>
            <Link href="worldAchievements" className={styles.buttonMy}>World achievements</Link>
            <Link href="ourTeam" className={styles.buttonMy}>Our team</Link>
            <Link href="contacts" className={styles.buttonMy}>Contacts</Link>  
            <Link href="authorizationPage" className={styles.buttonMy}>Authorization</Link>  
        </nav>

        <div className={styles.nameLab}>
            REIN LIFE PHARMACEPTICS 
            <br/>Scientific Center For Research On Increasing Human Life Expectancy
        </div>
       

    </div>
)
}
