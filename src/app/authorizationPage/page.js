'use client';
import {React, useState, useEffect } from "react";
import styles from "./authorizationPage.module.css";
import ButtonMain from "../components/Button/button";

export default function AuthorizationPage() {  

    const Auth = [{login: "a", password: 1}]
    
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState(""); 
    const [authorization, setAuthorization] =  useState(false);
    const [outauth, setOutauth] =  useState(false);  
    
    let value = localStorage.getItem('isAuth') || ""    
        
    const admin = () => {         
       if ((`${login}` == Auth[0].login) && (`${password}` == Auth[0].password)) { 
               window.localStorage.setItem( 'isAuth', 'ok' ) 
               setAuthorization(!authorization)                
            } else {
                alert("Неверный пароль");
            };  
    } 

    const delAuthor = () => {
        window.localStorage.setItem( 'isAuth', '' ) 
        setOutauth(!outauth)
    }
      
    return (
        <div className={styles.authorizationPage}>

            <ButtonMain />
                        
           <h2 className={styles.authorizationText}>Authorization</h2>
          
           { value ? 
                <div className={styles.inputUser}>
                    <div className={styles.authorizationText}>Hello admin</div>
                    <button className={styles.authorizationButton} onClick={delAuthor}>Разлогиниться</button> 
                </div>
            :
                <div className={styles.inputUser}>
                    <label>Login</label>
                    <input 
                        label="Login"
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />   

                    <label>Password</label>        
                    <input 
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
            
                    <button className={styles.authorizationButton} onClick={admin}>Authorization</button>
                    <button className={styles.authorizationButton} onClick={delAuthor}>Разлогиниться</button>

                </div>               
            } 

            
                                
            
        </div>         
    )
}

