import React from "react";
import Image from 'next/image'
import styles from './../styles/popup.module.css'
import navbar from './../../images/menubar.png'

interface PopupProps {
  isOpen: boolean;
  setModalOpen: boolean;
}

export default function Popup({isOpen, setModalOpen}:PopupProps){
    if (isOpen){
      return(
        <div className={styles.popup}>
          <div className={styles.content}>
            {/*<Image className={styles.imagenavbar} onClick={setModalOpen} src={navbar} alt="Icone Menu Bar"
            width={30} height={30}>
            </Image>*/}
            <a href="#home"> Home </a>
            <a href=""> Sobre </a>
            <a href=""> Contato </a>
            <a href="#portfolio"> Portfólio </a>
          </div>
        </div>
      )
    }
    return null
}

