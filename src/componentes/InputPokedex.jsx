import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userName } from '../store/slice/user.slice';
import { useNavigate } from 'react-router-dom';
import img from '../assets/img/img';

const InputPokedex = () => {
    const [user, setUser] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cambio = () => {
        dispatch(userName(user))
        navigate('/Pokedex')
    }
    return (
        <div className='container'>
            <div className='container-input'>
                <img className="img-input" src={img.pokedex} alt="" />
                <div className='text-input'>
                    <h2>¡Hola Entrenador!</h2>
                </div>
                <p>Para poder comenzar,dame tu nombre</p>
                <div className='input-div'>
                    
                    <input type="text"
                        value={user}
                        onChange={e => { setUser(e.target.value) }} placeholder="Nombre" />
                    <button onClick={cambio}> <i className='bx bx-right-arrow-alt'/></button>
                </div>
                <img className="img-pokebola" src={img.pokebola} alt="" />
            </div>
        </div>
    );
};

export default InputPokedex;