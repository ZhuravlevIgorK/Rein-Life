import styles from "./button.module.css";
import Link from "next/link";

export default function ButtonMain() {
    return (                
        <nav className={styles.ButtonMain}>   
            <div>       
                <Link href='/'>Main page</Link>                
            </div>                  
        </nav>
    )
}
