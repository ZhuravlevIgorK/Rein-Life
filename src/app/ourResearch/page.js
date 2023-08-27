'use client';
import { useState, useEffect } from "react";
import styles from "./ourResearch.module.css";
import ButtonMain from "../components/Button/button";

export default function OurResearch() {
    
    // let isAdmin = window.localStorage.getItem('isAuth');
    const [isAuth, setIsAuth] = useState("")

    useEffect(() => {
         let value         
         value = localStorage.getItem('isAuth') || ""
         setIsAuth(value)
    }, [])
    
    return (   
        <div>     
            { isAuth ?
                <div>            
                    <div className={styles.research}>            
                        <ButtonMain /> 
                        <ul>
                            <li>Наши исследования в области генетики</li>                    
                            <li>Исследования в области фармакологии</li>
                        </ul>          
                    </div>
                </div> : 
                <div>                    
                    <div className={styles.research}>            
                        <ButtonMain /> 
                        <h3>
                            Раздел недоступен для Вас.
                            <br/>Для доступа авторизируйтесь, или обратитесть в контактный центр по тел. 8-800-999-41-23                   
                        </h3>          
                    </div>
                </div> 
            }         
        </div>
    )
}
