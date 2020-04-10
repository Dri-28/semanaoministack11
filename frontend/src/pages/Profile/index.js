import React, { useEffect, useState } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';


import './styles.css';
import LogoImg from '../../assets/logo.svg'
import api from '../../services/api'


export default function Profile() {


   const history = useHistory()

   const [incidents, setIncidents] = useState([])

   const ngoName = localStorage.getItem('ngoName')
   const ngoId = localStorage.getItem('ngoId')



   async function handleDeleteIncident(id) {
      try {
         await api.delete(`incidents/${id}`, {
            headers: {
               authorization: ngoId
            }
         })

         setIncidents(incidents.filter(incident => incident.id !== id))
      } catch (error) {
         alert('Erro ao deletar caso, tente novamente')
      }
   }

   useEffect(() => {
      api.get('profile', {
         headers: {
            authorization: ngoId
         }
      }).then(response => {
         setIncidents(response.data)
      })
   }, [ngoId])

   function handleLogout() {
      localStorage.clear()
      history.push('/')
   }

   return (
      <div className="profile-container">
         <header>
            <img src={LogoImg} alt="BeTheHero" />
            <span>Bem vinda, {ngoName}</span>


            <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
            <button type="button" onClick={handleLogout}>
               <FiPower size={16} color="#e04041" />
            </button>
         </header>

         <h1>Casos cadastrados</h1>

         <ul>
            {
               incidents.map(
                  (incident) => (
                     <li key={incident.id}>
                        <strong>
                           CASO:
            </strong>
                        <p>{incident.title}</p>
                        <strong>
                           DESCRIÇÃO:
            </strong>
                        <p>
                           {incident.description}
                        </p>
                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', {
                           style: 'currency',
                           currency: 'BRL'
                        }).format(incident.value)}</p>

                        <button type="button" onClick={
                           () => handleDeleteIncident(incident.id)
                        } >
                           <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                     </li>
                  )
               )
            }
         </ul>

      </div>
   );



}

