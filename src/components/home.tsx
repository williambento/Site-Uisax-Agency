import React from "react";
import styles from "./../styles/start.module.css"
import Image from "next/image";
import caneta from "./../../images/caneta.png"

export default function Start(){
    return(
        <div className={styles.content}>
            <div className={styles.subcontent}>
                <div className={styles.text}>
                    <h1> SEJA <span className={styles.colorText}>BEM VINDO!</span> VEJA UM POUCO DO NOSSO TRABALHO. </h1>
                    <p> Explore nosso portfólio. </p>
                    <button className={styles.buttonn}> CONTATO </button>
                </div>
                <div>
                    <Image className={styles.image} src={caneta} alt="Imagem Principal"></Image>
                </div>
            </div>
        </div>
    )
}