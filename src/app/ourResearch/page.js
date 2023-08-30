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
                        <main className={styles.resp}>
                            <h3>Our research in genetics</h3>
                            <div>
                                 We are currently doing a lot of research, and we will be happy to tell you about it in the near future. 
                                 You can get more detailed information at the meeting of shareholders of the company.
                            </div>

                          
                        </main>          
                    </div>
                </div> : 
                <div>                    
                    <div className={styles.research}>            
                        <ButtonMain /> 
                        <h3>
                            The section is not available to you.
                            <br/>To access, log in, or contact the contact center at tel. 8-800-999-41-23                   
                        </h3>          
                    </div>
                </div> 
            }         
        </div>
    )
}
