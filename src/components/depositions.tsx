import React from "react";
import styles from './../styles/depositions.module.css'
import Image from "next/image";
import feh from "./../../images/fer.png"
import juh from "./../../images/juh.png"

export default function Depositions(){
    return(
        <div className={styles.container}>
        
            <div className={styles.title}>
                DEPOIMENTOS
            </div>
            <div className={styles.depositions}>
                <div className={styles.falas}>
                    <Image src={juh} alt={"juliana"} width={200} height={200}></Image>
                    <h1> Juliana Fontans - Sócia da OCKA System </h1>
                    <p>"Meu nome é Fernanda Oliveira e sou social da FJ Company.
                        Trabalhar com a equipe da UISAX foi uma experiência
                        excepcional! Sua criatividade e capacidade de compreender
                        nossa visão resultaram em um logotipo que realmente
                        representa nossa marca. Estamos encantados com o resultado
                        final, e o logotipo já se tornou um símbolo importante para
                        nós. Recomendo a UISAX a qualquer pessoa que esteja em busca
                        de um design de logotipo único e impactante."
                    </p>
                </div>
                <div className={styles.falas}>
                    <Image src={feh} alt={"fernanda"} width={200} height={200}></Image>
                    <h1> Fernanda Olliveira - Sócia da FJ Company </h1>
                    <p>"Me chamo Juliana Fontans e fiquei muito feliz com o
                        resultado que a UISAX proporcionou. Trabalhar com a equipe
                        foi uma experiência incrível! Sua criatividade e habilidade
                        em capturar a essência da nossa marca em um logotipo foram
                        impressionantes. O resultado final superou todas as nossas
                        expectativas, e agora temos um logotipo que realmente nos
                        representa. Recomendo a UISAX a todos que buscam um design 
                        único e impactante."
                    </p>
                </div>
            </div>
        </div>
    )
}