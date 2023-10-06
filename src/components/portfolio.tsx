import React from "react";
import styles from './../styles/portfolio.module.css'
import company from './../../images/company.png'
import jufontans from './../../images/jufontans.png'
import rdo from './../../images/rdo.png'
import system from './../../images/system.png'
import Image from "next/image";

export default function Portfolio(){
    return(
        <div className={styles.portfolio}>
            <h1>PORTFOLIO</h1>
            <div className={styles.projeto}>
                <a href="https://drive.google.com/file/d/1P4xolr0L5Uz_Fd1yXOAKYB-fGRyw4uWk/view?usp=drive_link" className={styles.btimg}>
                    <Image src={company} alt="FJ Company" width={200} height={200}/>
                    <button> VER MAIS </button>
                </a>
                <a href="https://drive.google.com/file/d/1Rhj_dGoCNbeySk_K6HYLQgib-Nz2DELN/view?usp=drive_link" className={styles.btimg}>
                    <Image src={system} alt="Ocka System" width={200} height={200}/>
                    <button> VER MAIS </button>
                </a>
                <a href="https://drive.google.com/file/d/1UV0ZeKrs8REzeUYxLZ6QMpMkreMhMnIW/view?usp=drive_link" className={styles.btimg}>
                    <Image src={rdo} alt="RDO Consultoria" width={200} height={200}/>
                    <button> VER MAIS </button>
                </a>
                <a href="https://drive.google.com/file/d/1QxrhouZm9yEVI06dYbqqqnC4MXl5wyPa/view?usp=drive_link" className={styles.btimg}>
                    <Image src={jufontans} alt="Ju Fontans" width={200} height={200}/>
                    <button> VER MAIS </button>
                </a>
            </div>
            {/*<button>ORÇAMENTO</button>*/}
        </div>
    )
}