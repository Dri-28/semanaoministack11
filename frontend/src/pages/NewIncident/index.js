import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhamente para encontar um heroi para resolver isso</p>

            <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para home
            </Link>
     <form>
         <input placeholder="Titulo do Caso"/>
         <textarea type placeholder="Descrição"/>
         <input placeholder="Valor em reais"/>

         

         <button className="button" type="submitt">
           Cadastrar
         </button>
     </form>

        </section>
    </div>
    </div>
    );

}