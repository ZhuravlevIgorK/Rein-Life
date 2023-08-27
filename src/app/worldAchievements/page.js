'use client';
import styles from "./worldAchievements.module.css";
import { useState } from "react";
import ButtonMain from "../components/Button/button";
import Articles from "../components/Articles/articles";

let articles = Articles();

export default function OurResearch(props) {      
    const [articleObj, setArticleObj] = useState(true);
    const [pushButton, setPushButton] = useState(false);
    const [newName, setNewName] = useState("");
    const [newText, setNewText] = useState("");
    
    let isAdmin = window.localStorage.getItem('isAuth');

    const pushClick = () => {
        setPushButton(!pushButton);        
    }

    const saveArticle = () => {
        articles.push({name: `${newName}`, text: `${newText}`, flag: false})      
        setArticleObj(!articleObj); 
    }

        

    return (
        <div className={styles.achiev}>            
            <div className={styles.button}>          
               <ButtonMain />     
            </div> 
            
            <h1 className={styles.nameList}> World achievements in the field of research </h1>            
           
            { articles.map((e, index) => {          
                const handleClick = () => {                                        
                    e.flag = !e.flag;                   
                    setArticleObj(!articleObj); 
                }   
                
                const deleteClick = () => {                    
                    delete articles[index];
                    setArticleObj(!articleObj); 
                }  

                return (                                            
                    <div className={styles.article1}>   

                        <div className={styles.buttonsArticles}>
                            <button 
                                className={styles.buttonArticles}                                                         
                                onClick={handleClick}                                                       
                            >
                            {e.name}
                            </button>

                            <div>              
                                <button 
                                    className={styles.buttonArticle}  
                                    onClick={deleteClick}                                          
                                >
                                Удалить статью
                                </button>
                            </div>
                        </div>

                        { e.flag ? <div>{e.text}</div> : "" }                          

                    </div>                  

                )
            })} 

            { isAdmin && <button 
                className={styles.makeArticle}  
                onClick={pushClick}                                          
            >
                Добавить статью
            </button>
            }  
            
            { pushButton ? 
                <div className={styles.pushArticles}>  
                    <input 
                        style={{width: "300px"}}
                        type="name"
                        value ={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />

                    <textarea
                        style={{height: "200px", width: "80%"}}
                        type="text"
                        value ={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />

                    <button 
                        onClick={ saveArticle }
                    >
                        Сохранить введенную статью
                    </button> 
                </div>
            : ""} 

        </div>
    )
}