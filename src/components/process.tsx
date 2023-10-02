import React from "react"
import styles from './../styles/process.module.css'
import Image from "next/image"
import briefing from './../../images/brienfing.png'
import analiseBriefing from './../../images/analiseBriefing.png'
import orcamento from './../../images/orçamento.png'
import paleta from './../../images/paleta.png'
import tipografia from './../../images/tipografia.png'
import desenho from './../../images/desenho.png'
import vetorizacao from './../../images/vetorizacao.png'
import apresentacao from './../../images/apresentacao.png'

export default function Process(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                Processo de Criação
            </div>
            <div className={styles.process}>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={briefing} alt="briefing"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Briefing </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Questionário estratégico a ser preenchido pelo cliente sobre a marca,
                            função de orientação.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={analiseBriefing} alt="analiseBriefing"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Análise do Briefing </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Estudo do documento mais busca estratética por conhecimento sobre o projeto.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={orcamento} alt="orçamento"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Orçamento </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Análise da dificuldade do projeto + orçamento. Fase de negociação.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={paleta} alt="paleta"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Paleta de Cores </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Definição das cores da marca com base no briefing.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={tipografia} alt="tipografia"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Tipografia </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Definiçao da tipografia com base do briefing.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={desenho} alt="desenho"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Desenho da Logo </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Desenho a mão de possíveis versões da logo.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={vetorizacao} alt="vetorização"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Vetorização </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Vetorização do projeto vencedor.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.imgTitle}>
                        <Image className={styles.image} src={apresentacao} alt="apresentação"></Image>
                    </div>
                    <div className={styles.text}>
                        <h1> Apresentação </h1>
                    </div>
                    <div className={styles.description}>
                        <p> Apresentação do projeto ao cliente, discussão e levantamentos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}