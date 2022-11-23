import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import PokemonLi from './PokemonLi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/img/img';

const Pokedex = () => {
    const [poke, setPoke] = useState([])
    const [type, setType] = useState([])
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => setPoke(res.data.results))
        axios.get("https://pokeapi.co/api/v2/type/").then(res => setType(res.data.results))
    }, [])
    const config = () => {
        navigate("/Pokedex/config")
    }
    const filterType = (e) => {
        axios.get(e.target.value).then(res => setPoke(res.data.pokemon))
    }
    const value = () => {
        navigate(`/Pokedex/${inputValue}`)
    }
    return (
        <>  
            <div className='title-pokedex'>
                <h1><img src={img.pokedex} alt="" /></h1>
                    
                
                
                <button className='button-setting' onClick={config}>
                    <div className='div-button'>
                        <img src={img.pokebola} alt="" />
                        <i className='bx bx-cog'></i>
                    </div>
                </button>
                
            </div>
            <section className='select-info'>

                <article className='uno'>
                    <div className='InputValue'>
                    <input type="text" value={inputValue} onChange={e => { setInputValue(e.target.value) }} placeholder="Busca tu pokemon" />
                        <button onClick={value}><i className='bx bx-right-arrow-alt'></i></button>
                    </div>
                </article>
                <article className='article dos'>
                <select onChange={filterType} name="" id="">
                    {type.map((e) => (
                        <option key={e.name} value={e.url}>{e.name}</option>
                    ))}
                </select>
                </article>
                
                
                    
            </section>
            

            <ul className='card-ul'>
                {poke.map(e => (
                    <li className='card-pokemon' key={e.name ? e.name : e.pokemon.url}>
                        <PokemonLi url={e.url ? e.url : e.pokemon.url}></PokemonLi>
                    </li>
                ))}
            </ul>
            <div>
                {
                    
                }

            </div>

        </>
    );
};

export default Pokedex;