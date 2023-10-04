import React from "react";
import styles from './../styles/about.module.css'
import Image from "next/image";
import note from "./../../images/note.png"

export default function About(){
    return(
        <div className={styles.geral}>
            <div className={styles.container}>
                <div>
                    <Image src={note} alt={"note"} className={styles.imgNote}></Image>
                </div>
                <div className={styles.texto}>
                    <h1 className={styles.title}> SOBRE </h1>
                    <p>
                    A UISAX é mais do que uma agência de design de logotipos; é um
                        sonho realizado e uma paixão transformada em realidade. Ao
                        longo de dois anos, seu objetivo ousado é ajudar empresas a
                        criar identidades visuais memoráveis e impactantes que as
                        destaquem no mercado. {/*Com paixão pela criatividade e dedicação,
                        eles abraçam cada projeto, buscando constantemente a
                        excelência. Seu compromisso com a inovação e a qualidade é
                        evidente em cada logotipo que produzem. Eles não são apenas uma
                        agência, mas parceiros na busca pelo sucesso, convidando você a
                        se juntar a eles para transformar sua visão em realidade visual
                        única.*/}
                    </p>
                </div>    
            </div>
        </div>
    )
}