import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiSettings } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from'../../assets/heroes.png';
import qrCode from '../../assets/QRcode.png';

import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {

            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');

        } catch (error) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">

            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <button className = "button" type="submit">
                    <FiSettings size={18} color="#383943" />
                    Painel Administrativo
                </button>
            </header>

            <div className="siteContentContainer">

                <section className="form">
                    <form onSubmit={handleLogin}>
                        <h1>ONG Login</h1>
                        <input 
                            placeholder ="Sua ID" 
                            value = {id}
                            onChange = {e => setId(e.target.value)}
                        />
                        <button className = "button" type="submit">Entrar</button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#E02041" />    
                            Não tennho cadastro
                        </Link>
                    </form>
                </section>

                <div className="imgMiddle">
                    <img src={heroesImg} alt="Heroes"/>
                </div>

                <aside>
                    <img src={qrCode} alt="QRcode"/>
                    <h1>Quer ser o heroi? <br/> 
                    Baixe o App!</h1>
                </aside>
            
            </div>

            <footer>
                    Todos os direitos reservados por Be The Hero. 2020 - 2022.
            </footer>

        </div>
    );
}